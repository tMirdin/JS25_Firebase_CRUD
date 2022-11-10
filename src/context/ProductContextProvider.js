import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import fire from "../fire";

export const productContext = createContext(); // облако

// const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload,
        // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();

  const navigate = useNavigate();

  const db = getFirestore(fire); // это API из Firebase

  // create
  async function addProduct(newProduct) {
    try {
      await addDoc(collection(db, "products"), newProduct);
    } catch (e) {
      console.log(e);
    }
  }

  //   read

  async function readProduct() {
    try {
      const { docs } = await getDocs(collection(db, "products"));
      const data = docs.map((item) => {
        return { ...item.data(), id: item.id };
      });
      dispatch({
        type: "GET_PRODUCT",
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function readOneProduct(id) {
    try {
      const oneDoc = doc(db, "products", id);
      const data = await getDoc(oneDoc);
      let obj = { ...data.data(), id: data.id };
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: obj,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // delete
  async function deleteProduct(id) {
    try {
      let oneDoc = doc(db, "products", id);
      await deleteDoc(oneDoc);
      readProduct();
      navigate("/list");
    } catch (e) {
      console.log(e);
    }
  }

  // update
  async function editProduct(id, editedObj) {
    try {
      let oneDoc = doc(db, "products", id);
      await updateDoc(oneDoc, editedObj);
      readProduct();
      navigate(`/details/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProduct,
    productsArr: state.product,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
