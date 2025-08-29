import { useEffect, useState } from "react";
import { ProductsWrapper } from "../components/layout/ProductsWrapper";
import { ProductsHeading } from "../components/UI/ProductsHeading";
import { getLimitProducts } from "../services/api/ApiWork";


const Products = () => {

    document.title = "TEMPSTORE - Products";

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    async function getLimitedProducts(){
        try{
            const res = await getLimitProducts(20,20*count);
            setData((prev) => [...prev, ...res.data.products]);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getLimitedProducts();
    },[count])

    // console.log(data);
    // console.log(count);

    return (
    <section>
        <ProductsHeading heading={"Explore our products"}/>
        <ProductsWrapper productsData={data} />
        <div
        className="flex justify-center mb-6"
        >
            <button
            className="bg-black text-white py-2 px-6 text-[18px]"
            onClick={()=>setCount(count+1)}
            >
                Load More
            </button>
        </div>
    </section>
    )
}

export default Products;