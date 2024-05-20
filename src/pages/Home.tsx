import BestSellingProducts from "../components/BestSellingProducts";
import CallToAction from "../components/CallToAction";
import Channels from "../components/Channels";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div>
            <Hero />
            <BestSellingProducts />
            <Channels />
            <CallToAction />
        </div>
    )
}
