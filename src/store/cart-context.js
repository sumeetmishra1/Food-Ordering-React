import React, { useState } from "react";
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export const CartProvider=(props)=>{
    const[items,changeItem]=useState([]);
    const addItem=(item)=>{
        
       changeItem([item,...items]);
    }
    const removeItem=()=>{
        console.log('remove')
    }

    return(
        <CartContext.Provider value={{items:items,totalAmount:0,addItem:addItem,removeItem:removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;