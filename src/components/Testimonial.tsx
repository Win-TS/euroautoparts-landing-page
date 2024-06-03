import Lazada1 from '../assets/testimonials/lazada-1.jpeg';
import Lazada2 from '../assets/testimonials/lazada-2.jpeg';
import Lazada3 from '../assets/testimonials/lazada-3.jpeg';
import Lazada4 from '../assets/testimonials/lazada-4.jpeg';
import Lazada5 from '../assets/testimonials/lazada-5.jpeg';
import Lazada6 from '../assets/testimonials/lazada-6.jpeg';
import Lazada7 from '../assets/testimonials/lazada-7.jpeg';
import Shopee1 from '../assets/testimonials/shopee-1.jpeg';
import Shopee2 from '../assets/testimonials/shopee-2.jpeg';
import Shopee3 from '../assets/testimonials/shopee-3.jpeg';
import Shopee4 from '../assets/testimonials/shopee-4.jpeg';
import Shopee5 from '../assets/testimonials/shopee-5.jpeg';
import Shopee6 from '../assets/testimonials/shopee-6.jpeg';
import Fb1 from '../assets/testimonials/fb-review-1.jpeg';
import Fb2 from '../assets/testimonials/fb-review-2.jpeg';
import Slider1 from '../assets/testimonials/image1.jpeg';
import Slider2 from '../assets/testimonials/image2.jpeg';
import Slider3 from '../assets/testimonials/image3.jpeg';
import Slider4 from '../assets/testimonials/image4.jpeg';
import Slider5 from '../assets/testimonials/image5.jpeg';
import Slider6 from '../assets/testimonials/image6.jpeg';
import Slider7 from '../assets/testimonials/image7.jpeg';
import Slider8 from '../assets/testimonials/image8.jpeg';

import { RiDoubleQuotesL } from "react-icons/ri";
import lazadaReview from '../assets/testimonials/lazada-review.jpeg';
import shopeeReview from '../assets/testimonials/shopee-review.jpeg';
import lazadaLogo from '../assets/logo/lazada_logo.png';
import shopeeLogo from '../assets/logo/shopee_logo.png';
import TestimonialSlider from "../animations/TestimonialSlider";
import PhotoSlider from "../animations/PhotoSlider";
import Reveal from "../animations/Reveal";

export default function Testimonial() {

    const TestimonialImages = [
        {
            path: Lazada1,
        },
        {
            path: Shopee1,
        },
        {
            path: Lazada2,
        },
        {
            path: Shopee2,
        },
        {
            path: Lazada3,
        },
        {
            path: Lazada4,
        },
        {
            path: Shopee3,
        },
        {
            path: Fb1,
        },
        {
            path: Lazada5,
        },
        {
            path: Shopee4,
        },
        {
            path: Lazada6,
        },
        {
            path: Lazada7,
        },
        {
            path: Shopee5,
        },
        {
            path: Shopee6,
        },
        {
            path: Fb2,
        },
    ];

    const SliderImages = [
        {
            path: Slider1,
        },
        {
            path: Slider2,
        },
        {
            path: Slider3,
        },
        {
            path: Slider4,
        },
        {
            path: Slider5,
        },
        {
            path: Slider6,
        },
        {
            path: Slider7,
        },
        {
            path: Slider8,
        }
    ]

    return (
        <div className="bg-slate-400">
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
                                    <img src={lazadaLogo} className="h-20" />
                                    <img src={lazadaReview} className="w-64" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src={shopeeLogo} className="h-20" />
                                    <img src={shopeeReview} className="w-64" />
                                </div>
                        </div>
                    </div>
                    <TestimonialSlider images={ TestimonialImages } />
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
                                    <img src={lazadaLogo} className="h-20" />
                                    <img src={lazadaReview} className="w-64" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src={shopeeLogo} className="h-20" />
                                    <img src={shopeeReview} className="w-64" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <PhotoSlider images={ SliderImages }/>
            </Reveal>
        </div>
    )
}