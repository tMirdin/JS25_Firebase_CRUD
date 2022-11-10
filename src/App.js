import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <BasketContextProvider>
        <ProductContextProvider>
          <NavBar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </BasketContextProvider>
    </AuthContextProvider>
  );
};

export default App;
