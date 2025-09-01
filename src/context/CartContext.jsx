import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const getLocalCartData = JSON.parse(localStorage.getItem("TempStore - Cart Items")) || [];

    const [cartData, setCartData] = useState(getLocalCartData);
    // const [cartPopUp, setCartPopUp] = useState(null);

    const addToCart = (addToCartProduct) => { 
        setCartData((prev) => [...prev, addToCartProduct]);
        setCartPopUp("Added to cart");
        // if(cartData){
        //     console.log(cartData);
        // }
    }

    function setAllCartItems(){
        localStorage.setItem("TempStore - Cart Items", cartData.length===0 ? JSON.stringify([]) : JSON.stringify(cartData));
    }

    useEffect(()=>{
        setAllCartItems();
    },[cartData]);

    return <CartContext.Provider value={{addToCart, cartData, cartPopUp}}>
        { children }
    </CartContext.Provider>
}