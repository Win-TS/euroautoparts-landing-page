import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Reveal from "../components/animations/Reveal";

export default function CallToAction() {
    const [data, setData] = useState({
        name: "",
        contact: "",
        phone: "",
        province: "",
    });

    const dropdownOptions = [
        { value: 'กรุงเทพฯ', label: 'กรุงเทพฯ' },
        { value: 'นนทบุรี', label: 'นนทบุรี' },
        { value: 'ปริมณฑล', label: 'ปริมณฑล' },
        { value: 'จังหวัดอื่นๆ', label: 'จังหวัดอื่นๆ' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newLead = {
            name: data.name,
            contact: data.contact,
            phone: data.phone,
            province: data.province,
        };
        Swal.fire({
            title: "<span class='font-notothai font-semibold'>กำลังส่งข้อมูล...</span>",
            html: "<span class='font-notothai'>โปรดรอสักครู่</span>",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        axios({
            method: "POST",
            baseURL: process.env.VITE_API_URL,
            url: "/sheets/lead",
            data: newLead
        })
            .then(() => {
                Swal.close();
                Swal.fire({
                    title: "<span class='font-notothai font-semibold'>ขอบคุณสำหรับความสนใจ!</span>",
                    html: "<span class='font-notothai'>ทางร้านจะตอบกลับโดยเร็วที่สุดครับ</span>",
                    icon: "success"
                });
                setData({
                    name: "",
                    contact: "",
                    phone: "",
                    province: "",
                });
            }).catch((error) => {
                Swal.close();
                console.log(error);
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "<span class='font-notothai font-semibold'>ข้อมูลไม่ถูกต้อง!</span>",
                        html: "<span class='font-notothai'>โปรดตรวจสอบข้อมูลและลองใหม่อีกครั้งครับ</span>",
                        icon: "error"
                    });
                } else {
                    Swal.fire({
                        title: "<span class='font-notothai font-semibold'>เกิดข้อผิดพลาด!</span>",
                        html: "<span class='font-notothai'>โปรดลองกรอกใหม่ หรือติดต่อทางร้านโดยตรงได้เลยครับ</span>",
                        icon: "error"
                    });
                }
            });
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gray-200 justify-evenly">

                <Reveal className="content-center">
                    <div className="flex flex-col justify-center py-10 px-5 md:px-24 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl font-bold font-notothai">สอบถามสินค้า แอดไลน์</h1>
                            <h1 className="text-2xl font-bold font-notothai">@euroautoparts หรือคลิก</h1>
                        </div>
                        <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="pt-4 mx-auto md:mx-0">
                            <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-green-line rounded hover:bg-white group py-2 px-3 w-72 border-solid border-2 border-green-line">
                                <span className="absolute inset-0 bg-green-line transition duration-500 ease-in-out group-hover:bg-white"></span>
                                <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-green-line font-lineseedsans">
                                    Add LINE Click: <span className="font-bold">@euroautoparts</span>
                                </span>
                            </button>
                        </a>
                    </div>
                </Reveal>

                <hr className="md:hidden border-t border-black mx-7" />
                <div className="hidden md:block border-l border-black my-5"></div>

                <Reveal>
                    <div className="flex flex-col justify-center py-10 px-5 md:px-28 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl font-bold font-notothai">อู่สนใจรับสินค้าราคาพิเศษ</h1>
                            <h1 className="text-2xl font-bold font-notothai">หรือเป็นตัวแทนจำหน่าย</h1>
                        </div>
                        <form className="pt-4 mx-auto md:mx-0" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                placeholder="ชื่ออู่/ร้าน"
                                className="block w-64 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 font-notothai"
                            />
                            <input
                                type="text"
                                name="contact"
                                value={data.contact}
                                onChange={handleChange}
                                placeholder="อีเมล/LINE"
                                className="block w-64 mt-4 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 font-notothai"
                            />
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                                placeholder="เบอร์โทรศัพท์"
                                className="block w-64 mt-4 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 font-notothai"
                            />
                            <ProvinceDropdown
                                name="province"
                                value={data.province}
                                onChange={handleDropdownChange}
                                options={dropdownOptions}
                                placeholder="จังหวัด"
                            />
                            <button
                                type="submit"
                                className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-sky-400 rounded hover:indigo-600 group py-2 px-3 w-64 mt-4">
                                <span className="absolute inset-0 bg-sky-400 transition duration-500 ease-in-out group-hover:bg-indigo-400"></span>
                                <span className="relative w-full text-center font-notothai">ส่ง</span>
                            </button>
                        </form>

                    </div>
                </Reveal>
            </div>
        </div>
    );
}

interface ProvinceDropdownProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string, label: string }[];
    placeholder: string;
}

function ProvinceDropdown({ name, value, onChange, options, placeholder }: ProvinceDropdownProps) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="block w-64 mt-4 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 font-notothai"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}