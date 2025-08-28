import { NavLink } from "react-router-dom"

export const NavBar = ({ setOpenNav }) => {

    const navData = [
        "home",
        "products",
        "about",
        "contact"
    ]

    return (
        <ul
        className="md:flex gap-4"
        >
            {
                navData.map((curElem,index) => {
                   return <li key={index}                     >
                        <NavLink 
                        to={curElem=="home"?"/":curElem} 
                        className={({isActive}) => isActive?"nav-link active-link":"nav-link"}
                        onClick={() => setOpenNav(false)}
                        >
                            {curElem}
                        </NavLink>
                    </li>
                })
            }
        </ul>
    )
}

// `capitalize text-xl flex flex-col after:h-0.5 after:bg-black after:w-[0px] hover:after:w-[100%] after:transition-all after:transition-300`