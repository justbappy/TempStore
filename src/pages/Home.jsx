import { useLoaderData } from "react-router-dom";
import { Hero } from "../components/layout/Hero";
import { ProductsWrapper } from "../components/layout/ProductsWrapper";
import { ProductsHeading } from "../components/UI/ProductsHeading";

const Home = () => {

    document.title = "TEMPSTORE - Home"

    const productsData = useLoaderData();

    // console.log(productsData);

    return (
    <>
        <Hero/>
        <ProductsHeading heading={"Explore Top Products"}/>
        <ProductsWrapper productsData={productsData}/>
    </> 
    )
}

export default Home;