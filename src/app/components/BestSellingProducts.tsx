import Reveal from './animations/Reveal';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const img_base_url = "https://lh5.googleusercontent.com/d/";

const products = [
    {
        productName: "ชุดมือจับประตู BMW F10 สีเลือดนก",
        productPrice: 1550,
        productImage:
            `${img_base_url}178-TFZjxWKdzrOO-8yuPIkGgAKZtDqeN`,
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "ชุดช่วงล่าง BMW F10 หน้าหลัง 16 ชิ้น",
        productPrice: 26920,
        productImage:
            `${img_base_url}1TQ0ZDpqnYJDHVHPk5INym7TUlxeO0dw0`,
        type: "อะไหล่ช่วงล่าง",
        description: "ชุดช่วงล่าง",
    },
    {
        productName: "แผ่นปิดใต้รถชิ้นใต้เกียร์ BMW F10",
        productPrice: 1695,
        productImage:
            `${img_base_url}1rEkTFgzdZi89tiEbW1in-GP2_E3iWoeE`,
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ชุดมือจับประตู BMW X3 F25 สีดำ",
        productPrice: 1790,
        productImage:
            `${img_base_url}1bwJsEhE5ETVmygl1YbGqJXrRyAWnHKgm`,
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "แผ่นปิดใต้ท้องชิ้นซ้าย/ขวา Benz W212",
        productPrice: 1620,
        productImage:
            `${img_base_url}1Bo34YuxvjUUp66H_9k98HbCBNc8-K42b`,
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ซุ้มล้อหน้าชิ้นหน้าซ้าย/ขวา BMW F30/F32/F34",
        productPrice: 620,
        productImage:
            `${img_base_url}1zgtu7ClIku3d5BrhIsOkBy7qQVMCkt96`,
        type: "อะไหล่ภายนอก",
        description: "ซุ้มล้อ",
    },
    {
        productName: "ลูกหมากคันชัก BMW E90/E92/E93",
        productPrice: 920,
        productImage:
            `${img_base_url}1-MR43UhfEVBcN9qWFrvlNY2e05Wf3NAw`,
        type: "อะไหล่ช่วงล่าง",
        description: "ลูกหมาก",
    },
    {
        productName: "แผ่นปิดใต้เครื่องชิ้นหน้า Benz W211",
        productPrice: 1380,
        productImage:
            `${img_base_url}1V4idYzBtW71nycHy1Ad7UWnd4Kx4FhqK`,
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ปีกนกหน้าตัวล่าง Benz W204/W207",
        productPrice: 1950,
        productImage:
            `${img_base_url}1uBfCOorT0CmEKXOCmW_aSQjUV4GMHa8y`,
        type: "อะไหล่ช่วงล่าง",
        description: "ปีกนก",
    },
    {
        productName: "กรอบแอร์กลาง BMW F10",
        productPrice: 920,
        productImage:
            `${img_base_url}1OPi16A8hB0Bi9PK4A8QpamVgf-_Abudc`,
        type: "อะไหล่ภายใน",
        description: "กรอบแอร์",
    },
    {
        productName: "สวิทช์หมุนไฟหน้า BMW F10",
        productPrice: 790,
        productImage:
            `${img_base_url}1kaJ3Uu4k7Bp-NTJ1hrMpw_NCNNygOqkw`,
        type: "อะไหล่ภายใน",
        description: "ปุ่ม/สวิทช์",
    },
    {
        productName: "ชุดมือจับประตู BMW F30 สีดำ",
        productPrice: 1400,
        productImage:
            `${img_base_url}1var5XDh8d70zFs3AnO7ybwyIHYRFOJ41`,
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "แผ่นปิดกันฝุ่นห้องเครื่องซ้าย/ขวา BMW F10",
        productPrice: 1150,
        productImage:
            `${img_base_url}1vSZKCsAAxdisNr0QVQ3kG-QZogcudJpt`,
        type: "อะไหล่ภายนอก",
        description: "แผ่นห้องเครื่อง",
    },
    {
        productName: "ลูกหมากกันโคลง BMW F30/F32/F34",
        productPrice: 590,
        productImage:
            `${img_base_url}1EZzSmSeTWX7XRiDXm7-J1n9OafoRmR81`,
        type: "อะไหล่ช่วงล่าง",
        description: "ลูกหมาก",
    },
    {
        productName: "ซุ้มล้อหน้า MINI R56",
        productPrice: 1450,
        productImage:
            `${img_base_url}1EPEFNU4HY_zdFFxNfkm8s7SP5rWLkJ-2`,
        type: "อะไหล่ภายนอก",
        description: "ซุ้มล้อ",
    },
    {
        productName: "ขอบซุ้มล้อหน้า MINI R60",
        productPrice: 1450,
        productImage:
            `${img_base_url}1g478LYZEbRZfWMKEUrzU9Y1I4JGYXmT2`,
        type: "อะไหล่ภายนอก",
        description: "ขอบซุ้มล้อ",
    },
    {
        productName: "แผ่นปิดใต้รถชิ้นใต้เครื่อง BMW X1 E84",
        productPrice: 2150,
        productImage:
            `${img_base_url}1i2tBUb6qKJE2QjLsB9B119e97Gv9VUpc`,
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
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
        <div className="bg-zinc-400 p-5">
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
                    <div id="slider" className="overflow-x-auto flex space-x-5 scroll-pl-14 pl-14 scroll-smooth whitespace-nowrap">
                        {products.map((product, index) => (
                            <div key={index} className="hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
            <div className="flex justify-center items-center mb-2 pt-4 basis-1/2">
                <img src={productImage} alt={productName} className="w-48 h-48 object-contain" />
            </div>
            <div className="flex flex-col items-center space-y-1 pt-3 basis-1/2 justify-center">
                <h1 className="text-xl font-bold font-notothai text-center text-wrap">{productName}</h1>
                <h2 className="text-lg font-notothai text-center">{productPrice} บาท</h2>
                <p className="text-lg font-notothai text-center flex items-center justify-center pb-2">
                    <span className={`w-2.5 h-2.5 rounded-full mr-2 ${markerColor}`}></span>
                    {type} {description}
                </p>
            </div>
        </div>
    );
}
