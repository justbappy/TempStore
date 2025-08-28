

export const ProductCover = ({ productData }) => {
    return (
        <li
        className="bg-[#C5C5C5] flex flex-col gap-3 items-center justify-center py-4 px-3 hover:cursor-pointer transform hover:scale-[1.05] transition-all duration-200"
        >
           <div>
                <img 
                src={productData.thumbnail}
                alt={productData.title}
                />
           </div>
           <div
           className="flex flex-col gap-1"
           >
                <div className="">
                    <h1
                    className="product-card-heading text-[20px] text-center font-bold"
                    >
                        {productData.title}
                    </h1>
                </div>
                <p
                className="product-card-description text-[17px]"
                >{productData.description}</p>
                <div
                className="flex justify-between items-center"
                >
                    <p
                    className="text-[25px] font-bold"
                    >{productData.price}$</p>
                    <p
                    className="text-[20px] bg-green-500 px-2 py-1 rounded-xl"
                    >40% off</p>
                </div>
           </div>
           <div>
                <button
                className="bg-black text-white py-2 px-5 hover:rounded-xl transition-all duration-300"
                >
                    Add to Cart
                </button>
           </div>
        </li>
    )
}