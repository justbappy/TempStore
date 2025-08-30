import { AboutHero } from "../components/layout/AboutHero";
import { CustomerReviews } from "../components/layout/CustomerReviews";
import { TagHero } from "../components/layout/TagHero";

const About = () => {

    document.title = "TEMPSTORE - About"

    return (
    <section>
        <AboutHero/>
        <TagHero
        tagHeading={"GET FREE DELIVERY"}
        tagDescription={"Get free delivery at your first order or upto 2500rs order"}
        />
        <TagHero
        tagHeading={"START SHOPPING NOW"}
        tagDescription={"Explore our most buyed and top products"}
        cta={"Shop Now"}
        />
        <div className="py-4 px-10">
            <h1
            className="text-[30px] font-bold text-center"
            >Customer Reviews</h1>
            <CustomerReviews/>
        </div>
    </section>
    )
}

export default About;