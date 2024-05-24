import Reveal from "../animations/Reveal";
import { FaPhone, FaLine, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="p-6 bg-gray-200">
                <Reveal>
                    <>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">ติดต่อเรา</h1>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">Contact</h1>
                    </>
                </Reveal>
            </div>
            <div className="px-8 py-6">
                <Reveal>
                    <>
                        <div className="my-4">
                            <p className="text-lg font-semibold font-notothai flex items-center flex-wrap">
                                <FaPhone className="mr-2 text-blue-500" /> เบอร์โทรศัพท์/Phone
                                <span className="ml-2 text-gray-700">: <a href="tel:061-462-4535" className="hover:text-blue-500 underline">061-462-4535</a></span>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="text-lg font-semibold font-notothai flex items-center flex-wrap">
                                <FaLine className="mr-2 text-green-500" /> ไลน์/LINE
                                <span className="ml-2 text-gray-700">: <a href="https://line.me/R/ti/p/%40euroautoparts" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 underline">@euroautoparts</a></span>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="text-lg font-semibold font-notothai flex items-center flex-wrap">
                                <FaFacebook className="mr-2 text-blue-800" /> เฟซบุ๊ก/Facebook
                                <span className="ml-2 text-gray-700">: <a href="https://www.facebook.com/EuroAutoPartsTH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 underline">EuroAutoParts</a></span>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="text-lg font-semibold font-notothai flex items-center flex-wrap">
                                <FaEnvelope className="mr-2 text-red-500" /> อีเมล/Email
                                <span className="ml-2 text-gray-700">: <a href="mailto:euroautopartsth@gmail.com" className="hover:text-red-500 underline">euroautopartsth@gmail.com</a></span>
                            </p>
                        </div>
                        <div className="my-4">
                            <p className="text-lg font-semibold font-notothai flex items-center flex-wrap">
                                <FaLocationDot className="mr-2 text-amber-500" /> ที่ตั้งร้าน/Location
                                <span className="ml-2 text-gray-700">: สาธุประดิษฐ์ กทม./Sathupradit, Bangkok</span>
                            </p>
                        </div>
                    </>
                </Reveal>
            </div>
        </div>
    );
}
