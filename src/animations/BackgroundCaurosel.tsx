import { useState, useEffect } from "react";

interface CarouselProps {
  children?: JSX.Element;
  images: { path: string }[];
}

export default function BackgroundCarousel({ children, images }: CarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-full relative overflow-hidden">
      {images.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${slide.path})` }}
          className={`absolute w-full h-full bg-center bg-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      ))}
      {children && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25">
          {children}
        </div>
      )}
    </div>
  );
}