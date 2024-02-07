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
        const existingCartItemIndex = items.findIndex(val=> val.id === item.id)
        if(existingCartItemIndex!==-1){
            items[existingCartItemIndex].quantity+=item.quantity
            changeItem([...items])
        }
        else{
            changeItem([item,...items]);
        }
    }
    const removeItem=(id)=>{
       const existingCartItemIndex=items.findIndex(item=>item.id ===id);
       if(items[existingCartItemIndex].quantity===1){
        const updatedItems=items.filter(item=> item.id !== id)
        changeItem([...updatedItems])
       }
       else{
        items[existingCartItemIndex].quantity-=1
        changeItem([...items])
       }
       
    }
    return(
        <CartContext.Provider value={{items:items,totalAmount:0,addItem:addItem,removeItem:removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;