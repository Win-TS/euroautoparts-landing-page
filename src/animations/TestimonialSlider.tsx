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

export default function TestimonialSlider() {
    const slides = [
        {
            url: Lazada1,
        },
        {
            url: Shopee1,
        },
        {
            url: Lazada2,
        },
        {
            url: Shopee2,
        },
        {
            url: Lazada3,
        },
        {
            url: Lazada4,
        },
        {
            url: Shopee3,
        },
        {
            url: Fb1,
        },
        {
            url: Lazada5,
        },
        {
            url: Shopee4,
        },
        {
            url: Lazada6,
        },
        {
            url: Lazada7,
        },
        {
            url: Shopee5,
        },
        {
            url: Shopee6,
        },
        {
            url: Fb2,
        },
    ];

    return (
        <div className="relative content-center w-full md:w-2/3 overflow-hidden md:basis-2/3 px-3">
            <div className="flex gap-x-4 snap-x overflow-x-hidden hover:overflow-x-auto w-full scroll-pl-10">
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 snap-center">
                        <img src={slide.url} className="rounded-lg h-52 md:h-72 min-w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}