import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context/CartContext.jsx"


export const ProductCover = ({ productData }) => {

    const { addToCart } = useContext(CartContext);

    // console.log(cartData);

    // useEffect(() => {
    //     getCartProducts();
    // },[]);

    return (
        
        <li
        className="bg-[#C5C5C5] flex sm:flex-col gap-3 items-center justify-center py-4 px-3 transform hover:scale-[1.05] transition-all duration-200"
        >
           <div className="sm:w-[100%] w-[40%]">
            <NavLink
            to={`/${productData.id}`}
            >
                <img 
                src={productData.thumbnail}
                alt={productData.title}
                />
            </NavLink>
           </div>
           <div
           className="flex flex-col gap-2 sm:w-[100%] w-[60%]"
           >
                <div className="">
                    <NavLink
                    to={`/${productData.id}`}
                    >
                        <h1
                        className="product-card-heading text-[20px] text-center font-bold hover:underline"
                        >
                            {productData.title}
                        </h1>
                    </NavLink>
                </div>
                <NavLink
                to={`/${productData.id}`}
                >
                    <p
                    className="product-card-description text-[17px] hover:underline"
                    >{productData.description}</p>
                </NavLink>
                <div
                className="flex justify-between items-center"
                >
                    <p
                    className="text-[25px] font-bold"
                    >{productData.price}$</p>
                    <p
                    className="text-[20px] bg-green-500 px-2 py-1 rounded-xl"
                    >{Math.floor(productData.discountPercentage)}% off</p>
                </div>
                <div className="flex justify-center">
                    <button
                    className="bg-black text-white py-2 px-5 hover:rounded-xl transition-all duration-300"
                    id="addToCart"
                    onClick={()=>addToCart(productData)}
                    >
                        Add to Cart
                    </button>
                    </div>
           </div>
        </li>
    )
}