import { useState } from "react";
import Reveal from "../animations/Reveal";
import PaginateProduct from "../components/PaginateProduct";
import ProductFilter from "../components/ProductFilter";
import useProductFetcher from "../hooks/useProductFetcher";

export default function Product() {
    const [filters, setFilters] = useState({
        type: "",
        brand: "",
        model: ""
    });

    const { data, totalPages, currentPage, setCurrentPage } = useProductFetcher(filters);

    

    const applyFilters = (filter: { type: string; brand: string; model: string }) => {
        setFilters(filter);
        console.log(filter);
    };

    const clearFilters = () => {
        setFilters({
            type: "",
            brand: "",
            model: ""
        });
        console.log(filters);
    };

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
            <Reveal>
                <PaginateProduct totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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