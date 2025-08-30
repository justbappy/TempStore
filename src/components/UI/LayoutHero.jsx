

export const LayoutHero = ({ img, width }) => {
    return (
        <div
        className="flex justify-center sm:w-[50%]"
        >
            <img 
            src={img} 
            alt="" 
            className={`md:w-[${width}%] sm:w-[100%]`}
            />
        </div>
    )
}