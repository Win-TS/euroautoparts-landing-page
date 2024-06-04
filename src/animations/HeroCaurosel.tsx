import { Carousel } from "flowbite-react";

interface CauroselProps {
  images: string[];
}

export default function HeroCarousel({ images }: CauroselProps) {
  return (
    <div className="w-[32rem] h-[28rem] py-16 px-4 relative group">
      <Carousel indicators={false}>
        {images.map((_image, index) => (
          <img key={index} src={images[index]} alt="..." />
        ))}
      </Carousel>
    </div>
  );
}
