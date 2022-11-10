import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductsList from "./Components/Products/ProductsList/ProductsList";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Basket from "./Components/Basket/Basket";
import Authorization from "./Components/Auth/Authorization";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authorization />} />

      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default MainRoutes;
