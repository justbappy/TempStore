import { ProductCover } from "../UI/ProductCard";
import { ProductsHeading } from "../UI/ProductsHeading";

export const HomeProducts = ({ productsData }) => {

    console.log(productsData);

    return (
    <section>
        <ProductsHeading heading={"Explore Top Products"}/>
        <ul
        className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 my-6 px-6"
        >
            {
                productsData.map((curProduct)=>{
                    return <ProductCover key={curProduct.id} productData={curProduct}/>
                })
            }
        </ul>
    </section>
    )
}