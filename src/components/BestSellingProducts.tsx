import Reveal from '../animations/Reveal';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const products = [
    {
        productName: "ชุดมือจับประตู BMW F10 สีเลือดนก",
        productPrice: 1610,
        productImage:
        "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/235876832_144295761221855_7642462335423803260_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JkLUJcwDiz0Q7kNvgHXncEW&_nc_ht=scontent.fbkk8-4.fna&oh=00_AYCzUDHaZEOM0ffiwZJOn5-VSsKnD7H_7duwH-cRO8eJTQ&oe=66639970",
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "ชุดช่วงล่าง BMW F10 หน้าหลัง 16 ชิ้น",
        productPrice: 26920,
        productImage:
        "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/291610598_359275403057222_884192158451384545_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7iJDHraz3joQ7kNvgFdnj6p&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYCmdsYNxkjHTnkoUpgi9DGik4L59384Kfs64eiM7l1H6w&oe=66639DF2",
        type: "อะไหล่ช่วงล่าง",
        description: "ชุดช่วงล่าง",
    },
    {
        productName: "แผ่นปิดใต้รถชิ้นใต้เกียร์ BMW F10",
        productPrice: 1890,
        productImage:
        "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/237365714_144296007888497_5871318312158929169_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eWxpydgK_-gQ7kNvgHiIykA&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYCcfooZkup2WblF31RWCOcyMSX0htK5ksldt2Tu_1XvtQ&oe=6663910E",
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ชุดมือจับประตู BMW X3 F25 สีดำ",
        productPrice: 1900,
        productImage:
        "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/297512397_382571660727596_4932585020432373393_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hMOltFy8KPYQ7kNvgHsTRp3&_nc_ht=scontent.fbkk8-4.fna&oh=00_AYAdI8Ea1nQ3SRzQfk-MjkAE7BUG9oNJsWbU2JzsR_35qQ&oe=66639FE5",
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "แผ่นปิดใต้ท้องชิ้นซ้าย/ขวา Benz W212",
        productPrice: 1790,
        productImage:
        "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/305458043_392713586369335_3808544375412916123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5JyqrF3MjmoQ7kNvgEqmUx9&_nc_ht=scontent.fbkk13-1.fna&oh=00_AYC41iU1R5HhXH2Vq2hTERUtUFdsSGlzHVLsFyaXv9SM5g&oe=66638A34",
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ซุ้มล้อหน้าชิ้นหน้าซ้าย/ขวา BMW F30/F32/F34",
        productPrice: 690,
        productImage:
        "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/236826408_144299024554862_8380723947510057587_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6xMz9ZgS1ygQ7kNvgHQLMUy&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYC2dKApVqHv80w35nBdKPwirgvsCVhooLzyAx1scM6UQA&oe=6663B6A4",
        type: "อะไหล่ภายนอก",
        description: "ซุ้มล้อ",
    },
    {
        productName: "ลูกหมากคันชัก BMW E90/E92/E93",
        productPrice: 1030,
        productImage:
        "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/280241463_321715130146583_4929508705960759115_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I2vB0umDcUUQ7kNvgGMhOli&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYDVXGzvwwHnWkYLz8Tfpm50zKwEU7GJKp6T-_uRyNG3Mg&oe=6663AAF8",
        type: "อะไหล่ช่วงล่าง",
        description: "ลูกหมาก",
    },
    {
        productName: "แผ่นปิดใต้เครื่องชิ้นหน้า Benz W211",
        productPrice: 1380,
        productImage:
        "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/304978825_392708369703190_5693490141714076168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lqm6IhrRN8AQ7kNvgFQqA0Z&_nc_ht=scontent.fbkk12-2.fna&oh=00_AYDkA9tjkIQT8SkuCG6TF6m4Xz_Wg1HwzYmfvs30Li06yw&oe=6663A9B1",
        type: "อะไหล่ภายนอก",
        description: "แผ่นปิดใต้ท้อง",
    },
    {
        productName: "ปีกนกตัวบน Benz W204/W207",
        productPrice: 2040,
        productImage:
        "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/323777599_1191649341494638_6793415093792700936_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nQmRT94UC3wQ7kNvgE7bqo3&_nc_ht=scontent.fbkk8-2.fna&oh=00_AYC6jJJgJ8wKOYVlj_ON9ONx5RQhwo_CSnUQ5e_v5znxDw&oe=6663A506",
        type: "อะไหล่ช่วงล่าง",
        description: "ปีกนก",
    },
    {
        productName: "กรอบแอร์กลาง BMW F10",
        productPrice: 990,
        productImage:
        "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/264450736_222471743404256_4749467604474874124_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uWpspvw6rxoQ7kNvgFPQZCU&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYB20KjMarEHsYA1R2FFsSnh3Gvdb8HGEbm1ePmWmrvQnA&oe=666389FE",
        type: "อะไหล่ภายใน",
        description: "กรอบแอร์",
    },
    {
        productName: "สวิทช์หมุนไฟหน้า BMW F10",
        productPrice: 850,
        productImage:
        "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/272888080_258079739843456_7490920796765505226_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yyVF8E9cWZYQ7kNvgGkWpHQ&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYA4FR_8zSRHLlTdcA6svJXszArw8yAz-JmHDby6RkJMMw&oe=6663A204",
        type: "อะไหล่ภายใน",
        description: "ปุ่ม/สวิทช์",
    },
    {
        productName: "ชุดมือจับประตู BMW F30 สีดำ",
        productPrice: 1500,
        productImage:
        "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/236275340_144298787888219_8243449792511754318_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=91HveYevSDcQ7kNvgHm31zD&_nc_ht=scontent.fbkk13-3.fna&oh=00_AYB1Ow74wN1ek_lM-IicNbHAPIZNXoCUo26SVV2EeexNlQ&oe=66639CA9",
        type: "อะไหล่ภายใน",
        description: "มือจับ",
    },
    {
        productName: "แผ่นปิดกันฝุ่นห้องเครื่องซ้าย/ขวา BMW F10",
        productPrice: 1280,
        productImage:
        "https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/247715495_192679823050115_6289139667429656324_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=etts09wifYkQ7kNvgF9pXxq&_nc_ht=scontent.fbkk13-1.fna&oh=00_AYB5_mC07m9GxhXypmM5W9dhsaYhtT9FlVrsRsXMF9rXog&oe=66638D8A",
        type: "อะไหล่ภายนอก",
        description: "แผ่นห้องเครื่อง",
    },
    {
        productName: "ลูกหมากกันโคลง BMW F30/F32/F34",
        productPrice: 590,
        productImage:
        "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/280251088_321714786813284_2945980415723726680_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iM9g_4UVsoUQ7kNvgHWWxRk&_nc_ht=scontent.fbkk8-4.fna&oh=00_AYCI5ntkdEbYmamwA1AODJcdvTR35PBW1Kgds2EscQ0Iww&oe=6663961A",
        type: "อะไหล่ช่วงล่าง",
        description: "ลูกหมาก",
    },
    {
        productName: "ซุ้มล้อหน้า MINI R56",
        productPrice: 1450,
        productImage:
        "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/287711883_346622650989164_8525119335510950240_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZbFZWZONJkcQ7kNvgHl3V73&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYAXUWn19msnHNjkrzj0ZBDiNoeR7_sdXBgfcT1dLpjr9Q&oe=6663AA20",
        type: "อะไหล่ภายนอก",
        description: "ซุ้มล้อ",
    },
    {
        productName: "ขอบซุ้มล้อหน้า/หลัง MINI R60",
        productPrice: 1450,
        productImage:
        "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/287962779_346622514322511_4430560273904322421_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A1p2wO3omGEQ7kNvgGR2_Q-&_nc_ht=scontent.fbkk12-4.fna&oh=00_AYARQojGmLfaZApIFPOLteEv1bxpZh_6f-oR4h8ZPhq-dA&oe=6663AB32",
        type: "อะไหล่ภายนอก",
        description: "ขอบซุ้มล้อ",
    },
    {
        productName: "แผ่นปิดใต้รถชิ้นใต้เครื่อง BMW X1 E84",
        productPrice: 2300,
        productImage:
        "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/287972305_346617217656374_8518420400243652562_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=45P8j1fjG2QQ7kNvgFCoiug&_nc_ht=scontent.fbkk12-3.fna&oh=00_AYDYu_Pc4gmDlZ9K9LGatVaeqElA0LZGzdxlcXxyf3Bgvw&oe=66638445",
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
