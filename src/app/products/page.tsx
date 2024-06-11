"use client"

import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import Reveal from "../components/animations/Reveal";
import PaginateProduct from "../components/PaginateProduct";
import ProductFilter from "../components/ProductFilter";
import useProductFetcher from "../../hooks/useProductFetcher";

export default function Page() {
    const [filters, setFilters] = useState({
        type: "",
        brand: "",
        model: ""
    });

    const applyFilters = (filter: { type: string; brand: string; model: string }) => {
        setFilters(filter);
    };

    const clearFilters = () => {
        setFilters({
            type: "",
            brand: "",
            model: ""
        });
    };

    const toPageTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const { data, totalPages, currentPage, setCurrentPage } = useProductFetcher(filters);

    return (
        <div>
            <div className="p-4 bg-gray-200">
                <Reveal>
                    <>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">สินค้า</h1>
                        <h1 className="text-2xl md:text-3xl text-center font-notothai font-bold">Products</h1>
                    </>
                </Reveal>
            </div>

            <ProductFilter filters={filters} onApplyFilters={applyFilters} onClearFilters={clearFilters} />

            <Reveal>
                <>
                    {(filters.type !== "" || filters.brand !== "" || filters.model !== "") ? (
                        <h2 className="text-lg font-notothai text-center text-gray-500 pt-3">{`ตัวกรองตอนนี้: ${filters.type} ${filters.brand} ${filters.model}`}</h2>
                    ) : (
                        <div></div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 p-3 justify-items-center">
                        {data.length === 0 ? (
                            <div className="col-span-full text-lg font-notothai text-center text-gray-500">ไม่พบข้อมูลตามตัวกรอง</div>
                        ) : (
                            data.map((item) => (
                                <ProductCard
                                    key={item[0]}
                                    name={item[5]}
                                    type={item[1]}
                                    brand={item[2]}
                                    car={item[3]}
                                    color={item[6]}
                                    price={item[7]}
                                    image={item[8]}
                                />
                            ))
                        )}
                    </div>
                </>
            </Reveal>

            <Reveal>
                <PaginateProduct totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </Reveal>
            <div className="flex justify-center items-center" onClick={toPageTop} >
                <FaCircleArrowUp className="w-8 h-8 text-blue-500 mt-5 border border-gray-300 rounded-full animate-bounce cursor-pointer" />
            </div>
        </div>
    )
}

interface ProductCardProps {
    name: string;
    type: string;
    brand: string;
    car: string;
    color: string
    price: string;
    image: string;
}

function ProductCard({ name, type, brand, car, color, price, image }: ProductCardProps) {
    const markerColor = type === "อะไหล่ภายนอก"
        ? "bg-red-500"
        : type === "อะไหล่ภายใน"
            ? "bg-blue-500"
            : type === "อะไหล่ช่วงล่าง"
                ? "bg-green-500"
                : "bg-gray-500";

    return (
        <div className="flex flex-col items-center bg-slate-200 rounded-lg py-2 w-80 gap-1">
            <img src={image} alt={name} className="w-52 h-72 object-contain my-2 flex-start" />
            <div className={`flex flex-col items-center justify-between `}>
                <h1 className={`text-xl font-notothai font-bold text-center ${!color && "py-3.5"}`}>
                    {name} {color && <><br /><span className="text-md font-notothai">{color}</span></>}
                </h1>
                <p className="text-md font-notothai font-semibold text-center">{brand + " " + car}</p>
                <p className="text-md font-notothai text-center flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${markerColor}`}></span>
                    {type}
                </p>
                <p className="text-md font-notothai">{price} บาท</p>
            </div>
        </div>
    )
}