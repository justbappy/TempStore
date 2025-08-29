

export const CustomerReviewCard = ({ userData }) => {

    const { firstName, lastName } = userData;

    return (
    <div className="flex flex-col gap-3 bg-[#050505] p-3 text-white">
        <div className="flex items-center gap-2">
            <div className="bg-white rounded-[50%]">
                <img 
                src={userData.image}
                alt={userData.username} 
                width={40}
                className=" rounded-[50%]"
                />                
            </div>
            <p className="text-[20px]">{firstName} {lastName}</p>
        </div>
        <div className="text-[18px]">
            <p>Review, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, sapiente.</p>
        </div>
    </div>
    )
}