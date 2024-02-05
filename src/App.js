import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
function App() {
  
  const[isCartShown,changeCartState]=useState(false);
  function showCart(){
    changeCartState(true)
  }
  function closeCart(){
    changeCartState(false);
  }
  return (
   <React.Fragment>
    <Header showCart={showCart} />
    {isCartShown && <Cart closeCart={closeCart} />}
   <Meals/>
   </React.Fragment>
  );
}

export default App;
