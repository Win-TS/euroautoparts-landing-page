// import { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
import Reveal from "../animations/Reveal";

export default function Product() {
    const data = [
        [
            "1",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7225 874",
            "มือจับประตู หน้าขวา ",
            "สีดำ",
            "605",
            "https://via.placeholder.com/150"
        ],
        [
            "2",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7225 876",
            "มือจับประตู หน้าขวา",
            "สีเบจ",
            "605",
            "https://via.placeholder.com/150"
        ],
        [
            "3",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7261 934",
            "มือจับประตู หน้าขวา",
            "สีเลือดนก",
            "605",
            "https://via.placeholder.com/150"
        ],
        [
            "4",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7225 874-T7",
            "ชุดมือจับประตู พร้อมกรอบสวิทช์",
            "สีดำ",
            "1610",
            "https://via.placeholder.com/150"
        ],
        [
            "5",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7225 876-T7",
            "ชุดมือจับประตู พร้อมกรอบสวิทช์",
            "สีเบจ",
            "1610",
            "https://via.placeholder.com/150"
        ],
        [
            "6",
            "อะไหล่ภายใน",
            "F10/F11",
            "5141 7261 934-T7",
            "ชุดมือจับประตู พร้อมกรอบสวิทช์",
            "สีเลือดนก",
            "1610",
            "https://via.placeholder.com/150"
        ],
        [
            "7",
            "อะไหล่ภายใน",
            "F10/F02/F07/F11",
            "6131 9313 923-B",
            "ปุ่มสวิทช์แอร์ 12 ชิ้น",
            "",
            "750",
            "https://via.placeholder.com/150"
        ],
        [
            "8",
            "อะไหล่ภายใน",
            "F10/X3 F25/X4 F26/F07/F11",
            "6131 6822 518",
            "สวิทช์ Parking เบรคมือไฟฟ้า",
            "",
            "290",
            "https://via.placeholder.com/150"
        ],
        [
            "9",
            "อะไหล่ภายใน",
            "F10/X3 F25/X4 F26/F07/F12",
            "6131 6822 518-1",
            "สวิทช์ Auto Hold",
            "",
            "290",
            "https://via.placeholder.com/150"
        ],
        [
            "10",
            "อะไหล่ภายใน",
            "F30/F31/F80",
            "5141 7279 311-T4",
            "ชุดมือจับประตู สีดำ",
            "สีดำ",
            "1500",
            "https://via.placeholder.com/150"
        ],
        [
            "11",
            "อะไหล่ภายใน",
            "F30/F31/F80",
            "5141 7279 315-T4",
            "ชุดมือจับประตู สีเบจ",
            "สีเบจ",
            "1500",
            "https://via.placeholder.com/150"
        ],
        [
            "12",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F80",
            "5141 7279 311",
            "มือจับประตู หน้าซ้าย",
            "สีดำ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "13",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F81",
            "5141 7279 312",
            "มือจับประตู หน้าขวา",
            "สีดำ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "14",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F82",
            "5141 7281 465",
            "มือจับประตู หลังซ้าย",
            "สีดำ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "15",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F83",
            "5141 7281 466",
            "มือจับประตู หลังขวา",
            "สีดำ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "16",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F84",
            "5141 7279 315",
            "มือจับประตู  หน้าซ้าย ",
            "สีเบจ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "17",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F85",
            "5141 7279 316",
            "มือจับประตู หน้าขวา",
            "สีเบจ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "18",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F86",
            "5141 7281 469",
            "มือจับประตู หลังซ้าย",
            "สีเบจ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "19",
            "อะไหล่ภายใน",
            "F30/F32/F33/F34/F87",
            "5141 7281 470",
            "มือจับประตู หลังขวา",
            "สีเบจ",
            "435",
            "https://via.placeholder.com/150"
        ],
        [
            "20",
            "อะไหล่ภายใน",
            "F30/F20/F32/F33/F34",
            "6131 9252 912",
            "ปุ่ม Sport",
            "สีแดง",
            "600",
            "https://via.placeholder.com/150"
        ]
    ];

    //const [loading, setLoading] = useState(true);
    //const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         Swal.fire({
    //             title: "<span class='font-notothai font-semibold'>กำลังโหลดข้อมูล...</span>",
    //             html: "<span class='font-notothai'>โปรดรอสักครู่</span>",
    //             allowOutsideClick: false,
    //             didOpen: () => {
    //                 Swal.showLoading();
    //             }
    //         });
            
    //         try {
    //             const response = await axios.get(import.meta.env.VITE_API_URL + "/sheets/products");
    //             setData(response.data.products);
    //             Swal.close();
    //         } catch (error) {
    //             console.error(error);
    //             Swal.fire({
    //                 title: "<span class='font-notothai font-semibold'>เกิดข้อผิดพลาด!</span>",
    //                 html: "<span class='font-notothai'>ไม่สามารถโหลดข้อมูลได้ โปรดลองอีกครั้ง</span>",
    //                 icon: "error"
    //             });
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <div>
            <div className="p-4 bg-gray-200">
                <Reveal>
                    <>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">สินค้า</h1>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">Products</h1>
                    </>
                </Reveal>
                {/* {loading ? <p></p> : <div></div>} */}
            </div>
            <Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 p-4 justify-items-center">
                        {data.map((item) => (
                            <ProductCard
                                key={item[0]}
                                name={item[4]}
                                type={item[1]}
                                car={item[2]}
                                color={item[5]}
                                price={item[6]}
                                image={item[7]}
                            />
                        ))}
                </div>
            </Reveal>
        </div>
    )
}

interface ProductCardProps {
    name: string;
    type: string;
    car: string;
    color: string
    price: string;
    image: string;
}

function ProductCard({ name, type, car, color, price, image }: ProductCardProps) {
    const markerColor = type === "อะไหล่ภายนอก"
        ? "bg-red-500"
        : type === "อะไหล่ภายใน"
        ? "bg-blue-500"
        : type === "อะไหล่ช่วงล่าง"
        ? "bg-green-500"
        : "bg-gray-500";

    return (
        <div className="flex flex-col items-center bg-slate-200 rounded-lg py-2 w-72 gap-1">
            <img src={image} alt={name} className="w-48 h-72 object-cover rounded-lg my-2 flex-start" />
            <div className={`flex flex-col items-center justify-between `}>
                <h1 className={`text-xl font-notothai font-bold text-center ${!color && "py-3.5"}`}>
                    {name} {color && <><br /><span className="text-md font-notothai">{color}</span></>}
                </h1>
                <p className="text-md font-notothai font-semibold">{car}</p>
                <p className="text-md font-notothai text-center flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${markerColor}`}></span>
                    {type}
                </p>
                <p className="text-md font-notothai">{price} บาท</p>
            </div>
        </div>
    )
}