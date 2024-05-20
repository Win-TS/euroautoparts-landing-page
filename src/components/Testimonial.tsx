import { RiDoubleQuotesL } from "react-icons/ri";
import lazadaReview from '../assets/lazada-review.jpeg';
import shopeeReview from '../assets/shopee-review.jpeg';
import TestimonialSlider from "../animations/TestimonialSlider";
import PhotoSlider from "../animations/PhotoSlider";
import Reveal from "../animations/Reveal";

export default function Testimonial() {
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
                        <div className="flex flex-col gap-3 w-72">
                            <img src={lazadaReview} className="w-72" />
                            <img src={shopeeReview} className="w-72" />
                        </div>
                    </div>
                    <TestimonialSlider />
                    <div className="hidden md:flex flex-col w-full md:w-1/3 justify-center -top-3 relative py-4 basis-1/3 items-center">
                        <div>
                        <div className="w-64 h-32">
                            <RiDoubleQuotesL className="text-red-400 opacity-75 text-8xl relative" />
                            <div className="relative -top-12 left-[3.75rem] ">
                                <h1 className="text-2xl font-notothai font-bold">ขอบคุณทุกความไว้วางใจ</h1>
                                <h1 className="text-2xl font-notothai font-bold">จากลูกค้าและอู่ทุกท่าน</h1>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-72 ml-5">
                            <img src={lazadaReview} className="w-72" />
                            <img src={shopeeReview} className="w-72" />
                        </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <PhotoSlider />
            </Reveal>
        </div>
    )
}