import { useLoaderData } from "react-router-dom"
import { ProductDetails } from "../components/layout/ProductDetails"
import { useEffect, useState } from "react";
import { fetchGetProducts } from "../services/fetchGetProducts";
import { ProductsWrapper } from "../components/layout/ProductsWrapper";
import { ProductsHeading } from "../components/UI/ProductsHeading";

export const Product = () => {

    const productDetails = useLoaderData();
    // console.log(productDetails.data);
    const [moreData, setMoreData] = useState([]);

    async function fetchMoreData(){
        const results = await fetchGetProducts();
        setMoreData(results);
    }    

    useEffect(() => {
        fetchMoreData();
    },[])

    // console.log(moreData);

    return (
    <>
        <ProductDetails productDetails={productDetails.data}/>
        <ProductsHeading heading={"Explore More Products"}/>
        <ProductsWrapper productsData={moreData}/>
        
    </>
    )
}