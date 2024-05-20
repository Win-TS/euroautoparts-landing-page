import Reveal from '../animations/Reveal';
import exImage from '../assets/e60-ใต้เครื่อง.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const products = [
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ภายนอก", description: "แผ่นปิดใต้ท้อง" },
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ภายนอก", description: "แผ่นปิดใต้ท้อง" },
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ภายนอก", description: "แผ่นปิดใต้ท้อง" },
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ภายนอก", description: "แผ่นปิดใต้ท้อง" },
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ภายนอก", description: "แผ่นปิดใต้ท้อง" },
    { productName: "ชุดมือจับประตู F10 สีเลือดนก", productPrice: 1610, productImage: exImage, type: "อะไหล่ภายใน", description: "มือจับ" },
    { productName: "ใต้เครื่อง E60", productPrice: 1450, productImage: exImage, type: "อะไหล่ช่วงล่าง", description: "ปีกนก" },
];

export default function BestSellingProducts() {

    const slideLeft = () => {
        const slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 275;
        }
    };
    
    const slideRight = () => {
        const slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 275;
        }
    };

    return (
        <div className="bg-gray-300 p-5 border border-y-gray-500">
            <Reveal>
                <div className="justify-center items-center pb-3">
                    <h1 className="text-2xl font-bold text-center font-notothai">สินค้าขายดี</h1>
                    <h1 className="text-2xl font-bold text-center font-notothai">Best Selling Products</h1>
                </div>
            </Reveal>
            <Reveal>
                <div className="flex justify-center items-center space-x-12 pb-2">
                    <h1 className="text-lg font-notothai text-center pb-2 font-bold">
                        <span className="inline-block w-2.5 h-2.5 rounded-full mr-2 bg-red-500 font-bold"></span>
                        อะไหล่ภายนอก
                    </h1>
                    <h1 className="text-lg font-notothai text-center pb-2 font-bold">
                        <span className="inline-block w-2.5 h-2.5 rounded-full mr-2 bg-blue-500 font-bold"></span>
                        อะไหล่ภายใน
                    </h1>
                    <h1 className="text-lg font-notothai text-center pb-2 font-bold">
                        <span className="inline-block w-2.5 h-2.5 rounded-full mr-2 bg-green-500 font-bold"></span>
                        อะไหล่ช่วงล่าง
                    </h1>
                </div>
            </Reveal>
            <Reveal>
                <div className="relative">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full cursor-pointer">
                        <BsChevronCompactLeft onClick={slideLeft} size={30} />
                    </div>
                    <div id="slider" className="overflow-x-hidden hover:overflow-x-auto flex space-x-5 scroll-pl-14 pl-14 scroll-smooth whitespace-nowrap ">
                        {products.map((product, index) => (
                            <div key={index} className="snap-start hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full cursor-pointer">
                        <BsChevronCompactRight onClick={slideRight} size={30} />
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

interface ProductProps {
    productName: string;
    productPrice: number;
    productImage: string;
    type: string;
    description: string;
}

function ProductCard({ productName, productPrice, productImage, type, description }: ProductProps) {
    const markerColor = type === "อะไหล่ภายนอก"
        ? "bg-red-500"
        : type === "อะไหล่ภายใน"
        ? "bg-blue-500"
        : type === "อะไหล่ช่วงล่าง"
        ? "bg-green-500"
        : "bg-gray-500";

    return (
        <div className="bg-white rounded-lg shadow-lg p-5 w-64 h-96 flex flex-col justify-between">
            <div className="flex justify-center items-center mb-2 pt-4">
                <img src={productImage} alt={productName} className="w-48 h-48 object-contain" />
            </div>
            <div className="flex flex-col items-center space-y-3">
                <h1 className="text-xl font-bold font-notothai text-center">{productName}</h1>
                <h2 className="text-lg font-notothai text-center">{productPrice} บาท</h2>
                <p className="text-lg font-notothai text-center flex items-center justify-center pb-2">
                    <span className={`w-2.5 h-2.5 rounded-full mr-2 ${markerColor}`}></span>
                    {type} {description}
                </p>
            </div>
        </div>
    );
}
