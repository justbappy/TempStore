import { NavLink } from "react-router-dom"

export const FooterData = ({ data }) => {
    return (
        <li className="flex flex-col gap-6 text-[18px]">
            <p className="font-bold">
                {
                    data.header
                }
            </p>
            <ul
            className="flex flex-col gap-2"
            >
                {
                    data.links.map((curLink, index) => {
                        return <NavLink to={curLink.replaceAll(" ", "").toLowerCase()} 
                        key={index}
                        className={"whitespace-nowrap hover:text-gray-500"}>
                            { curLink }
                        </NavLink>
                    })
                }
            </ul>
        </li>
    )
}