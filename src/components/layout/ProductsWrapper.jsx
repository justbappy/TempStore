import { ProductCover } from "../UI/ProductCard";

export const ProductsWrapper = ({ productsData }) => {

    // console.log(productsData);

    return (
    <section>
        <ul
        className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6 my-6 px-6"
        >
            {
                productsData.map((curProduct, index)=>{
                    return <ProductCover key={index} productData={curProduct}/>
                })
            }
        </ul>
    </section>
    )
}