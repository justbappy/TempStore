import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com"
});

// get products
export const getTopProducts = () => {
    return api.get("/products")
}

// limit products
export const getLimitProducts = (limit, skip) => {
    return api.get(`/products?limit=${limit}&skip=${skip}`)
}

// get users
export const getUsers = () => {
    return api.get(`/users?limit=12`);
}