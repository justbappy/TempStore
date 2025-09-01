import { Outlet, useNavigation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { OfferTag } from "../UI/OfferTag"
import { Loading } from "./Loading"
import { ToastContainer } from "react-toastify"

export const AppLayout = () => {

    const navigation = useNavigation();

    if(navigation.state === "loading"){
        return <Loading/>
    }
    
    const offer = "Grab 40% winter sales before it ends and get free delivery upto 2500rs order";

    return (
    <>
        <Header/>
        <OfferTag offer={offer}/>
        <ToastContainer
        position="bottom-right"
        autoClose={1000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="dark"
        />
        <Outlet/>
        <Footer/>
    </>
    )
}