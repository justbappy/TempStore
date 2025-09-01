import { useEffect, useState } from "react";
import { ProductsWrapper } from "../components/layout/ProductsWrapper";
import { ProductsHeading } from "../components/UI/ProductsHeading";
import { getLimitProducts } from "../services/api/ApiWork";

const Products = () => {

    document.title = "TEMPSTORE - Products";

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    async function getLimitedProducts(){
        try{
            setLoading(true);
            const res = await getLimitProducts(20,20*count);
            if(res && res.data){
                setData((prev) => [...prev, ...res.data.products]);
                setLoading(false);
            }
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getLimitedProducts();
    },[count])

    if(loading){
        return <h1 
        className="h-dvh flex justify-center items-center text-[30px]"
        >
            Loading....
        </h1>
    }

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
            className="bg-black text-white py-2 px-6 text-[18px] transition-all duration-200 hover:rounded-xl"            
            onClick={()=>setCount(count+1)}
            >
                Load More
            </button>
        </div>
    </section>
    )
}

export default Products;