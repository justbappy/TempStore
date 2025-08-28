import { NavLink } from "react-router-dom"

export const Hero = () => {
    return (
        <div 
        className="md:flex items-center gap-6 py-6 bg-[#f5f5f5]"
        >
            <div
            className="md:w-[25%] md:p-0 sm:p-10"
            >
                <img 
                src="hero-1.png" 
                alt="hero-image"
                />
            </div>
            <div
            className="flex items-center flex-col text-center md:w-[50%] md:m-0 m-6"
            >
                <h1
                className="text-[35px] xl:text-[50px] sm:text-[35px] font-gaseok md:w-[100%] w-[60%]"
                >EXPLORE. LIKE IT. BUY IT</h1>
                <button
                className="bg-black py-2 px-6 text-white text-[18px] hover:rounded-xl hover:transition-all duration-300"
                >
                    <NavLink>
                        Shop Now
                    </NavLink>
                </button>
            </div>
            <div
            className="md:w-[25%] md:p-0 sm:p-10"
            >
                <img 
                src="hero-2.png" 
                alt="hero-image"
                />
            </div>

        </div>
    )
}