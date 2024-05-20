import BestSellingProducts from "../components/BestSellingProducts";
import CallToAction from "../components/CallToAction";
import Channels from "../components/Channels";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

export default function Home() {
    return (
        <div>
            <Hero />
            <BestSellingProducts />
            <Channels />
            <Testimonial />
            <CallToAction />
        </div>
    )
}
