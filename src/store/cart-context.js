import React from "react";
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})
export const CartProvider=(props)=>{
    const addItem=(e)=>{
        e.preventDefault()
        console.log('added')
    }
    const removeItem=()=>{
        console.log('remove')
    }

    return(
        <CartContext.Provider value={{items:[],totalAmount:0,addItem:addItem,removeItem:removeItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;