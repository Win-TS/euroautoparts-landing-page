import Lazada1 from '../../assets/testimonials/lazada-1.jpeg';
import Lazada2 from '../../assets/testimonials/lazada-2.jpeg';
import Lazada3 from '../../assets/testimonials/lazada-3.jpeg';
import Lazada4 from '../../assets/testimonials/lazada-4.jpeg';
import Lazada5 from '../../assets/testimonials/lazada-5.jpeg';
import Lazada6 from '../../assets/testimonials/lazada-6.jpeg';
import Lazada7 from '../../assets/testimonials/lazada-7.jpeg';
import Shopee1 from '../../assets/testimonials/shopee-1.jpeg';
import Shopee2 from '../../assets/testimonials/shopee-2.jpeg';
import Shopee3 from '../../assets/testimonials/shopee-3.jpeg';
import Shopee4 from '../../assets/testimonials/shopee-4.jpeg';
import Shopee5 from '../../assets/testimonials/shopee-5.jpeg';
import Shopee6 from '../../assets/testimonials/shopee-6.jpeg';
import Fb1 from '../../assets/testimonials/fb-review-1.jpeg';
import Fb2 from '../../assets/testimonials/fb-review-2.jpeg';
import Slider1 from '../../assets/testimonials/image1.jpeg';
import Slider2 from '../../assets/testimonials/image2.jpeg';
import Slider3 from '../../assets/testimonials/image3.jpeg';
import Slider4 from '../../assets/testimonials/image4.jpeg';
import Slider5 from '../../assets/testimonials/image5.jpeg';
import Slider6 from '../../assets/testimonials/image6.jpeg';
import Slider7 from '../../assets/testimonials/image7.jpeg';
import Slider8 from '../../assets/testimonials/image8.jpeg';
import Slider9 from '../../assets/testimonials/image9.jpeg';
import Slider10 from '../../assets/testimonials/image10.jpeg';
import Slider11 from '../../assets/testimonials/image11.jpeg';
import Slider12 from '../../assets/testimonials/image12.jpeg';
import Slider13 from '../../assets/testimonials/image13.jpeg';
import Slider14 from '../../assets/testimonials/image14.jpeg';
import Slider15 from '../../assets/testimonials/image15.jpeg';
import Slider16 from '../../assets/testimonials/image16.jpeg';
import Slider17 from '../../assets/testimonials/image17.jpeg';
import Slider18 from '../../assets/testimonials/image18.jpeg';
import Slider19 from '../../assets/testimonials/image19.jpeg';
import Slider20 from '../../assets/testimonials/image20.jpeg';
import Slider21 from '../../assets/testimonials/image21.jpeg';
import Slider22 from '../../assets/testimonials/image22.jpeg';

import { RiDoubleQuotesL } from "react-icons/ri";
import lazadaReview from '../../assets/testimonials/lazada-review.jpeg';
import shopeeReview from '../../assets/testimonials/shopee-review.jpeg';
import lazadaLogo from '../../assets/logo/lazada_logo.png';
import shopeeLogo from '../../assets/logo/shopee_logo.png';
import TestimonialSlider from "../components/animations/TestimonialSlider";
import PhotoSlider from "../components/animations/PhotoSlider";
import Reveal from "../components/animations/Reveal";

export default function Testimonial() {

    const TestimonialImages = [Lazada1.src, Shopee1.src, Lazada2.src, Shopee2.src, Lazada3.src, Lazada4.src, Shopee3.src, Fb1.src, Lazada5.src, Shopee4.src, Lazada6.src, Lazada7.src, Shopee5.src, Shopee6.src, Fb2.src];
    const SliderImages = [Slider1.src, Slider2.src, Slider3.src, Slider4.src, Slider5.src, Slider6.src, Slider7.src, Slider8.src, Slider9.src, Slider10.src, Slider22.src, Slider11.src, Slider12.src, Slider13.src, Slider14.src, Slider15.src, Slider16.src, Slider17.src, Slider18.src, Slider19.src, Slider20.src, Slider21.src];

    return (
        <div className="bg-gray-300">
            <Reveal>
                <div className="flex justify-between flex-col md:flex-row pb-6 md:pb-0">
                    <div className="flex md:hidden flex-col w-full md:w-1/3 justify-center items-center -top-3 relative py-4 pl-2">
                        <div className="w-64 h-32 mr-16">
                            <RiDoubleQuotesL className="text-red-400 opacity-75 text-8xl relative" />
                            <div className="relative -top-12 left-[3.75rem] ">
                                <h1 className="text-2xl font-notothai font-bold">ขอบคุณทุกความไว้วางใจ</h1>
                                <h1 className="text-2xl font-notothai font-bold">จากลูกค้าและอู่ทุกท่าน</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex items-center justify-center gap-2">
                                <a href="https://www.lazada.co.th/shop/euroautoparts" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                    <img src={lazadaLogo.src} className="h-20" />
                                </a>
                                <img src={lazadaReview.src} className="w-64" />
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                    <img src={shopeeLogo.src} className="h-20" />
                                </a>
                                <img src={shopeeReview.src} className="w-64" />
                            </div>
                        </div>
                    </div>
                    <TestimonialSlider images={TestimonialImages} />
                    <div className="hidden md:flex flex-col w-full md:w-1/3 justify-center -top-3 relative py-4 basis-1/3 items-center">
                        <div>
                            <div className="w-64 h-32">
                                <RiDoubleQuotesL className="text-red-400 opacity-75 text-8xl relative" />
                                <div className="relative -top-12 left-[3.75rem] ">
                                    <h1 className="text-2xl font-notothai font-bold">ขอบคุณทุกความไว้วางใจ</h1>
                                    <h1 className="text-2xl font-notothai font-bold">จากลูกค้าและอู่ทุกท่าน</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 items-center">
                                <div className="flex items-center justify-center gap-2">
                                    <a href="https://www.lazada.co.th/shop/euroautoparts" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                        <img src={lazadaLogo.src} className="h-20" />
                                    </a>
                                    <img src={lazadaReview.src} className="w-64" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                        <img src={shopeeLogo.src} className="h-20" />
                                    </a>
                                    <img src={shopeeReview.src} className="w-64" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <PhotoSlider images={SliderImages} />
            </Reveal>
        </div>
    )
}