import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const getLocalCartData = JSON.parse(localStorage.getItem("TempStore - Cart Items")) || [];

    const [cartData, setCartData] = useState(getLocalCartData);
    
    const addToCart = (addToCartProduct) => {
        // setCartData((prev) => {
        //     return prev.includes(addToCartProduct)?
        //     [...prev]
        //     :[addToCartProduct, ...prev]
        // });
        setCartData((prev) => {
            return prev.length===0?
            [addToCartProduct, ...prev]
            :[addToCartProduct, ...(prev.filter((data) => data.title!==addToCartProduct.title))]
        });
    }

    const removeFromCart = (removeCartProduct) => {
        setCartData((prev) => {
            return prev.filter((curData) => curData!==removeCartProduct);
        })
        // console.log(cartData.filter((curData) => curData!=removeCartProduct));
    }

    function setToastText(getToast){
        return toast(getToast);
        // console.log(getToast);
    }

    function setAllCartItems(){
        localStorage.setItem("TempStore - Cart Items", cartData.length===0 ? JSON.stringify([]) : JSON.stringify(cartData));
    }

    useEffect(()=>{
        setAllCartItems();
    },[cartData]);

    return <CartContext.Provider value={{addToCart, cartData, removeFromCart, setToastText}}>
        { children }
    </CartContext.Provider>
}