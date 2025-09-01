import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ProductCover } from "../components/UI/ProductCard";

const Cart = () => {

    const { cartData } = useContext(CartContext);

    // console.log(allCartData);
    // console.log(cartData);
    console.log(JSON.parse(localStorage.getItem("TempStore - Cart Items")));

    return (
    <section>
        <div>
            <h1
            className="p-4 text-[25px] text-center sm:text-start"
            >Total Amount of cart: <span className="font-bold">{
            cartData && cartData.length && cartData.map((curData) => {
                return curData.price;
            }).reduce((accum, curPrice) => {
                return accum + curPrice;
            },0).toFixed(2)
            }$</span></h1>
        </div>
        <div>
            {
                cartData && cartData.length ?
                <ul
                className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 my-6 px-6"
                >
                    {
                        cartData.map((curProduct) => {
                            return <ProductCover key={curProduct.id} productData={curProduct}/>
                        })   
                    }
                </ul> :
                <h1
                className="text-[30px] text-center py-5 "
                >
                    No items in cart
                </h1>
            }
        </div>
        <div>

        </div>
    </section>
    )
}

export default Cart;