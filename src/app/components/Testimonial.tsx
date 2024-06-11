import { RiDoubleQuotesL } from "react-icons/ri";
import TestimonialSlider from "./animations/TestimonialSlider";
import PhotoSlider from "./animations/PhotoSlider";
import Reveal from "./animations/Reveal";

export default function Testimonial() {

    const TestimonialImages = ['/assets/testimonials/lazada-1.jpeg', '/assets/testimonials/shopee-1.jpeg', '/assets/testimonials/lazada-2.jpeg', '/assets/testimonials/shopee-2.jpeg', '/assets/testimonials/lazada-3.jpeg', '/assets/testimonials/lazada-4.jpeg', '/assets/testimonials/shopee-3.jpeg', '/assets/testimonials/fb-review-1.jpeg', '/assets/testimonials/lazada-5.jpeg', '/assets/testimonials/shopee-4.jpeg', '/assets/testimonials/lazada-6.jpeg', '/assets/testimonials/lazada-7.jpeg', '/assets/testimonials/shopee-5.jpeg', '/assets/testimonials/shopee-6.jpeg', '/assets/testimonials/fb-review-2.jpeg']
    const SliderImages = ['/assets/testimonials/image1.jpeg', '/assets/testimonials/image2.jpeg', '/assets/testimonials/image3.jpeg', '/assets/testimonials/image4.jpeg', '/assets/testimonials/image5.jpeg', '/assets/testimonials/image6.jpeg', '/assets/testimonials/image7.jpeg', '/assets/testimonials/image8.jpeg', '/assets/testimonials/image9.jpeg', '/assets/testimonials/image10.jpeg', '/assets/testimonials/image22.jpeg', '/assets/testimonials/image11.jpeg', '/assets/testimonials/image12.jpeg', '/assets/testimonials/image13.jpeg', '/assets/testimonials/image14.jpeg', '/assets/testimonials/image15.jpeg', '/assets/testimonials/image16.jpeg', '/assets/testimonials/image17.jpeg', '/assets/testimonials/image18.jpeg', '/assets/testimonials/image19.jpeg', '/assets/testimonials/image20.jpeg', '/assets/testimonials/image21.jpeg']
    
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
                                    <img src={'/assets/logo/lazada_logo.png'} className="h-20" />
                                </a>
                                <img src={'/assets/testimonials/lazada-review.jpeg'} className="w-64" />
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                    <img src={'/assets/logo/shopee_logo.png'} className="h-20" />
                                </a>
                                <img src={'/assets/testimonials/shopee-review.jpeg'} className="w-64" />
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
                                        <img src={'/assets/logo/lazada_logo.png'} className="h-20" />
                                    </a>
                                    <img src={'/assets/testimonials/lazada-review.jpeg'} className="w-64" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110" >
                                        <img src={'/assets/logo/shopee_logo.png'} className="h-20" />
                                    </a>
                                    <img src={'/assets/testimonials/shopee-review.jpeg'} className="w-64" />
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