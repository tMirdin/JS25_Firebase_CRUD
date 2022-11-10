import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

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
        product: action.payload.data,
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

  // create
  async function addProduct(newProduct) {}

  //   read

  async function readProduct() {}

  async function readOneProduct(id) {}

  // delete
  async function deleteProduct(id) {}

  async function editProduct(id, editedObj) {}

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
