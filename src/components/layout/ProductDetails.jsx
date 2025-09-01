import { ProductReviewCard } from "../UI/ProductReviewCard";
import { ProductsHeading } from "../UI/ProductsHeading";
import { CustomerReviews } from "./CustomerReviews";

export const ProductDetails = ({ productDetails }) => {

    // console.log(productDetails);

    const {
        thumbnail, title, description, availabilityStatus, reviews, price, rating, warrantyInformation
    } = productDetails;

    return (
    <section>
    <div
    className="sm:flex p-6"
    >
        <div className="sm:w-[50%]">
            <div className="flex justify-center">
               <img 
               src={thumbnail} 
               alt="" />
            </div>
        </div>
        <div className="sm:w-[50%] flex flex-col justify-evenly md:gap-0 gap-4">
            <h1
            className="font-bold text-[24px] sm:text-[25px] "
            >{title}</h1>
            <p
            className="text-[18px]"
            >
                {description}
            </p>
            <div
            className={`text-[17px]  flex justify-between items-center`}
            >
                <p
                className={`${availabilityStatus=="In Stock"?"bg-green-500":"bg-red-500"} py-1 px-2 font-bold rounded-2xl`}
                >{availabilityStatus}</p>
                <p
                className="text-[20px]"
                >{warrantyInformation}</p>
            </div>
            <div
            className="text-[20px] flex justify-between items-center"
            >
                <p>Price: <span className="font-bold">{price}$</span></p>
                <p>Rating: <span className="font-bold">{rating}</span></p>
            </div>
            <div
            className="text-[20px] flex justify-center sm:justify-start gap-3 items-center"
            >
                <button
                className="bg-black text-white py-2 px-5 hover:rounded-xl transition-all duration-300"
                >
                    Buy Now
                </button>
                <button
                className="bg-black text-white py-2 px-5 hover:rounded-xl transition-all duration-300"
                >
                    Add to Cart
                </button>
                
            </div>
        </div>
    </div>
    <div>
        <ProductsHeading heading={"Product Reviews"}/>
       <ul
       className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 py-6 px-3"
       >
        {
            reviews && reviews.map((curReview, index) => {
                return <ProductReviewCard key={index} curReview={curReview}/>
            })
        }
       </ul>
    </div>
    </section>
    )

}