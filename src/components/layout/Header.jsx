import { NavLink } from "react-router-dom";
import { BrandName } from "../UI/BrandName"
import { NavBar } from "../UI/NavBar"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    if(openNav === true){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "visible";
    }

    // console.log(openNav);

    return (
    <header
    className="flex justify-between items-center py-4 px-6 bg-[#F5F5F5] sticky top-0 z-10"
    >
        <GiHamburgerMenu 
        className="md:hidden text-[30px]"
        onClick={()=>setOpenNav(true)}
        />
        <BrandName name={"TempStore"}/>
        {/* <Search/> */}
        <div
        className="md:flex gap-4 items-center mobile-nav"
        style={
            openNav?
            {
                left:"0px"
            }:
            {
                left:"-300px"
            }
        }
        >
            <IoMdClose
            className="sm:visible md:hidden absolute top-[10px] right-[20px] text-[20px] text-white"
            onClick={()=>setOpenNav(false)}
            />
            <NavBar setOpenNav={setOpenNav}/>
            <NavLink 
            to={"/cart"}
            className="flex gap-1 items-center cursor-pointer bg-black py-2 px-3 text-white hover:rounded-xl hover:transition-all duration-300"
            onClick={()=>setOpenNav(false)}
            >
                <AiOutlineShoppingCart 
                className="text-[30px]"
                />
                <span
                className="text-[18px]"
                >Your Cart</span>
            </NavLink>
        </div>
    </header>
    )
}