
export const TagHero = ({ tagHeading, tagDescription, cta }) => {
    return (
    <div
    className="flex flex-col items-center bg-black py-6 my-4 text-white"
    >
        <h1
        className="text-[24px]"
        >{tagHeading}</h1>
        <p
        className="text-[18px] text-center"
        >{tagDescription}</p>
        {
            cta && <button
            className="bg-white text-black py-2 px-4 text-[18px] my-4"
            >{cta}</button>
        }
    </div>
    )
}