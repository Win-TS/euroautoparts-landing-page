interface PhotoSliderProps {
    images: { path: string }[];
}

export default function PhotoSlider({ images }: PhotoSliderProps) {
    return (
            <div className="pb-5 px-3">
                <div className="flex gap-x-3 snap-x overflow-x-hidden hover:overflow-x-auto w-full scroll-pl-10">
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 snap-center">
                            <img src={image.path} className="rounded-lg h-52 md:h-72 min-w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
    );
}