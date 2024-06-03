interface TestimonialSliderProps {
    images: { path: string }[];
}

export default function TestimonialSlider({ images }: TestimonialSliderProps) {
    return (
        <div className="relative content-center w-full md:w-2/3 overflow-hidden md:basis-2/3 px-3">
            <div className="flex gap-x-4 snap-x overflow-x-hidden hover:overflow-x-auto w-full scroll-pl-10">
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 snap-center">
                        <img src={image.path} className="rounded-lg h-52 md:h-72 min-w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}