import { FormLayout } from "../components/layout/FormLayout";
import { LayoutHero } from "../components/UI/LayoutHero";


const Contact = () => {

    document.title = "TEMPSTORE - Contact Us"

    return (
    <section className="px-4 sm:px-0">
        <div className="flex xl:flex-row flex-col xl:justify-between sm:items-center sm:max-w-[80%] m-auto py-6 xl:gap-10 gap-5">
            <LayoutHero img={"contact-us-hero.jpg"} width={80}/>
            <FormLayout/>
        </div>
    </section>
    )
}

export default Contact;