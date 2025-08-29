import { getUsers } from "./api/ApiWork";


export const fetchCustomerReviews = async () => {
    try{
        const res = await getUsers();
        // return console.log(res);
        const data = res.data.users;
        return data;
    }catch(error){  
        console.log(error);
    }
}