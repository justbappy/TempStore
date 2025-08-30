

export const ProductReviewCard = ({ curReview }) => {
    return (
    <div className="flex flex-col gap-3 bg-[#050505] p-3 text-white">
        <div className="flex items-center gap-2">
            <div className="bg-white rounded-[50%]">
                <img 
                src={"default-pfp.jpg"}
                alt={"user-profile"} 
                width={40}
                className=" rounded-[50%]"
                />                
            </div>
            <p className="text-[20px]">{curReview.reviewerName}</p>
        </div>
        <div className="text-[18px]">
            <p>
                {curReview.comment}
            </p>
        </div>
    </div>
    )
}