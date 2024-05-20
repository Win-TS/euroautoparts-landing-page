import { RiDoubleQuotesL } from "react-icons/ri";
import lazadaReview from '../assets/lazada-review.jpeg';
import shopeeReview from '../assets/shopee-review.jpeg';
import TestimonialSlider from "../animations/TestimonialSlider";

export default function Testimonial() {
    return (
        <div className="bg-slate-400">


        <div className="flex justify-between flex-col md:flex-row">
            <TestimonialSlider />
            <div className="flex flex-col w-full md:w-1/3 justify-center p-4 -top-3 relative">
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
    )
}