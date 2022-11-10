import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

function getCountProductsBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.products.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountProductsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}

const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToBasket(productObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: productObj,
      count: 1,
      subPrice: productObj.price,
    };

    // Хранение дубликатов
    let filterBasket = basket.products.filter((elem) => {
      return elem.item.id === productObj.id;
    });

    if (filterBasket.length > 0) {
      basket.products = basket.products.filter((elem) => {
        return elem.item.id !== productObj.id;
      });
    } else {
      basket.products.push(newProduct);
    }
    basket.totalPrice = calcTotalPrice(basket.products);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.products.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeProductCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.products = basket.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    basket.totalPrice = calcTotalPrice(basket.products);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function calcTotalPrice(products) {
    let total = 0;
    products.map((item) => {
      total += item.subPrice;
    });
    return total;
  }

  //   delete products in basket

  function deleteBasketProduct(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.products = basket.products.filter((elem) => {
      return elem.item.id !== id;
    });
    basket.totalPrice = calcTotalPrice(basket.products);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.products.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addProductToBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
    productsInBasket: state.basket,
    basketCount: state.basketCount,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
