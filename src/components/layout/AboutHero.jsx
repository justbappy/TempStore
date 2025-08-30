import { BrandName } from "../UI/BrandName"
import { LayoutHero } from "../UI/LayoutHero"


export const AboutHero = () => {
    return (
        <div
        className="sm:flex sm:items-center sm:justify-between sm:gap-10 sm:px-10 px-4 py-4"
        >
            <div
            className="sm:w-[50%]"
            >
                <BrandName name={"TempStore"}/>
                <p className="text-justify text-[18px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, enim officiis ut repellat officia odit delectus aliquam amet harum eligendi laborum, totam eveniet qui aperiam autem! Perspiciatis aliquam sequi voluptates perferendis, voluptatum quidem earum sapiente ad assumenda culpa facere unde aperiam porro iusto temporibus qui dicta voluptatem, tempore ex nobis dignissimos error. 
                </p>
            </div>
            <LayoutHero img={"about-hero.png"} width={50}/>
        </div>
    )
}