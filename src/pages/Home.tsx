import BestSellingProducts from "../components/BestSellingProducts";
import CallToAction from "../components/CallToAction";
import Channels from "../components/Channels";
import Hero from "../components/Hero";
import ProductTypes from "../components/ProductTypes";
import Testimonial from "../components/Testimonial";

export default function Home() {
    return (
        <div>
            <Hero />
            <BestSellingProducts />
            <Channels />
            <ProductTypes />
            <Testimonial />
            <CallToAction />
        </div>
    )
}
