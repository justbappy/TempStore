import { NavLink } from 'react-router-dom'
import { BrandName } from '../UI/BrandName'
import { FooterData } from '../UI/FooterData'

export const Footer = () => {

    const footerData = [
        {
            header: "Discover",
            links: ["Buy & Sell", "Merchant", "Giving Back", "Help & Support"]
        },
        {
            header: "About",
            links: ["Staff", "Team", "Careers", "Blog"]
        },
        {
            header: "Resources",
            links: ["Security", "Global", "Charts", "Privacy"]
        },
        {
            header: "Social",
            links: ["Facebook", "Twitter", "Instagram", "Googleplus"]
        },
    ]

    return (
    <footer
    className='sm:flex bg-black text-white py-10 sm:px-20 px-4'
    >
        <div className='flex flex-col gap-6 mb-6 sm:my-0'>
            <BrandName name={"TempStore"}/>
            <p
            className='text-[18px] sm:w-[50%]'
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quos veritatis excepturi esse ullam exercitationem fugit eveniet, fuga voluptate ducimus expedita.
            </p>
            <NavLink
            className={"text-yellow-500 text-[18px] underline"}
            to={"/about"}
            >
                Read More
            </NavLink>

            <p>copyright - contact @mr.justbappy@gmail.com or follow justbappy github before using this project</p>
        </div>
        <div>
            <ul
            className='sm:flex grid grid-cols-2 gap-10'
            >
                {
                    footerData.map((curData,index) => {
                        return <FooterData key={index} data={curData}/>
                    })
                }
            </ul>
        </div>
    </footer>
    )
}