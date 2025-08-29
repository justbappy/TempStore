import { useLoaderData } from "react-router-dom"
import { CustomerReviewCard } from "../UI/CustomerReviewCard";


export const CustomerReviews = () => {

    const customerReviews = useLoaderData();

    // console.log(customerReviews);

    return (
        <ul
        className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 py-6"
        >
            {
                customerReviews.map((curReview) => {
                    return <CustomerReviewCard key={curReview.id} userData={curReview}/>
                })
            }
        </ul>
    )
}