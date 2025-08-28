import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com"
});

// get products
export const getTopProducts = () => {
    return api.get("/products?limit=10")
}