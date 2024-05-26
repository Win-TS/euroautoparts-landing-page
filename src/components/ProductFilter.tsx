import { useState } from "react";
import Dropdown from "./Dropdown";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

interface ProductFilterProps {
    filters: {
        type: string;
        brand: string;
        model: string;
    };
    onApplyFilters: (filter: {
        type: string;
        brand: string;
        model: string;
    }) => void;
    onClearFilters: () => void;
}

export default function ProductFilter({ filters, onApplyFilters, onClearFilters }: ProductFilterProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedType, setSelectedType] = useState(filters.type);
    const [selectedBrand, setSelectedBrand] = useState(filters.brand);
    const [selectedModel, setSelectedModel] = useState(filters.model);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
    };

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand);
    };

    const handleModelChange = (model: string) => {
        setSelectedModel(model);
    };

    const applyButton = () => {
        if (selectedType !== filters.type || selectedBrand !== filters.brand || selectedModel !== filters.model) {
            onApplyFilters({ type: selectedType, brand: selectedBrand, model: selectedModel });
        }
    };

    const filterVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                height: { duration: 0.2 },
                opacity: { delay: 0.2, duration: 0.2 },
            },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                opacity: { duration: 0.2 },
                height: { delay: 0.2, duration: 0.2 },
            },
        },
    };

    return (
        <>
            <div className="hidden md:block bg-gray-100 p-2">
                <div className={`flex justify-evenly items-center`}>
                    <h1 className="font-notothai font-semibold">กรองสินค้า</h1>
                    <Dropdown buttonText="ประเภทอะไหล่" contents={["อะไหล่ภายใน", "อะไหล่ภายนอก", "อะไหล่ช่วงล่าง"]} onSelect={handleTypeChange} />
                    <Dropdown buttonText="แบรนด์รถยนต์" contents={["BMW", "Benz", "MINI"]} onSelect={handleBrandChange} />
                    <Dropdown buttonText="รุ่นรถยนต์" contents={["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]} onSelect={handleModelChange} />
                    <button
                        className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-sky-400 rounded hover:indigo-600 group h-[2.625rem] w-32"
                        onClick={applyButton}
                    >
                        <span className="absolute inset-0 bg-sky-400 transition duration-500 ease-in-out group-hover:bg-indigo-400"></span>
                        <span className="relative w-full text-center font-notothai">กรอง</span>
                    </button>
                    <button
                        className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-red-400 rounded hover:indigo-600 group h-[2.625rem] w-32"
                        onClick={onClearFilters}    
                    >
                        <span className="absolute inset-0 bg-red-400 transition duration-500 ease-in-out group-hover:bg-red-500"></span>
                        <span className="relative w-full text-center font-notothai">ล้าง</span>
                    </button>
                </div>
            </div>

            <div className="block md:hidden bg-gray-100 p-2">
                <div className="py-2 flex justify-center gap-4 items-center cursor-pointer transition duration-300 ease-in-out bg-gray-100 hover:bg-gray-200" onClick={toggleFilter}>
                <h1 className="font-notothai font-semibold">กรองสินค้า</h1>
                    <motion.div
                        className="texl-lg md:text-xl font-notothai"
                        animate={{ rotate: isOpen ? -180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaAngleDown />
                    </motion.div>
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={filterVariants}
                            className="px-10"
                        >
                            <div className="flex flex-col justify-evenly items-center">
                                <Dropdown buttonText="ประเภทอะไหล่" contents={["อะไหล่ภายใน", "อะไหล่ภายนอก", "อะไหล่ช่วงล่าง"]} onSelect={handleTypeChange} />
                                <Dropdown buttonText="แบรนด์รถยนต์" contents={["BMW", "Benz", "MINI"]} onSelect={handleBrandChange} />
                                <Dropdown buttonText="รุ่นรถยนต์" contents={["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]} onSelect={handleModelChange} />
                                <button
                                    className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-sky-400 rounded hover:indigo-600 group h-[2.625rem] w-32 my-2"
                                    onClick={applyButton}
                                >
                                    <span className="absolute inset-0 bg-sky-400 transition duration-500 ease-in-out group-hover:bg-indigo-400"></span>
                                    <span className="relative w-full text-center font-notothai">กรอง</span>
                                </button>
                                <button
                                    className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-red-400 rounded hover:indigo-600 group h-[2.625rem] w-32 mb-2"
                                    onClick={onClearFilters}
                                >
                                    <span className="absolute inset-0 bg-red-400 transition duration-500 ease-in-out group-hover:bg-red-500"></span>
                                    <span className="relative w-full text-center font-notothai">ล้าง</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}