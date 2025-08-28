import { getTopProducts } from "./api/ApiWork";

export const fetchGetProducts = async () => {    
    try{
        const res = await getTopProducts();
        // return console.log(res);
        const data = res.data.products;
        return data;
    }catch(error){
        console.log(error);
    }    
};