import { useLoaderData } from "react-router-dom";
import { Hero } from "../components/layout/Hero";
import { HomeProducts } from "../components/layout/HomeProducts";

const Home = () => {

    document.title = "TEMPSTORE - Home"

    const productsData = useLoaderData();

    console.log(productsData);

    return (
    <>
        <Hero/>
        <HomeProducts productsData={productsData}/>
    </> 
    )
}

export default Home;