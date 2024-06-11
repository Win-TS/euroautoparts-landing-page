import { useState, useEffect } from "react";
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

interface ModelsData {
    [key: string]: string[];
}

const bmwModels: string[] = [
    "Series 1 F20",
    "Series 2 F22",
    "Series 3 E90",
    "Series 3 E92",
    "Series 3 E93",
    "Series 3 F30",
    "Series 3 GT F34",
    "Series 3 G20",
    "Series 4 F32",
    "Series 4 F33",
    "Series 5 E39",
    "Series 5 E60",
    "Series 5 F10",
    "Series 5 F11",
    "Series 5 G30",
    "Series 6 G32",
    "Series 7 E66",
    "Series 7 F02",
    "X1 E84",
    "X1 F48",
    "X3 E83",
    "X3 F25",
    "X3 G01",
    "X4 F26",
    "X5 E70",
    "X5 F15",
    "X6 E71",
    "X6 F16"
];

const benzModels: string[] = [
    "A-Class W176",
    "B-Class W246",
    "C-Class W203",
    "C-Class W204",
    "C-Class W205",
    "CLA W117",
    "CLS W218",
    "CLS W219",
    "E-Class W211",
    "E-Class W212",
    "E-Class W213",
    "E-Coupe W207",
    "E-Coupe W238",
    "GLA W156",
    "GLC W253",
    "GLK X204",
    "S-Class W220",
    "S-Class W221",
    "S-Class W222",
    "SL R230",
    "SLK R172"
];

const miniModels: string[] = [
    "Clubman F54",
    "Countryman F60",
    "Countryman R60",
    "F55",
    "F56",
    "R56"
];

const modelsData: ModelsData = {
    BMW: bmwModels,
    Benz: benzModels,
    MINI: miniModels,
    default: [...bmwModels, ...benzModels, ...miniModels]
};

export default function ProductFilter({ filters, onApplyFilters, onClearFilters }: ProductFilterProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedType, setSelectedType] = useState(filters.type);
    const [selectedBrand, setSelectedBrand] = useState(filters.brand);
    const [selectedModel, setSelectedModel] = useState(filters.model);
    const [availableModels, setAvailableModels] = useState<string[]>(modelsData.default);

    useEffect(() => {
        if (selectedBrand) {
            setAvailableModels(modelsData[selectedBrand] || modelsData.default);
        } else {
            setAvailableModels(modelsData.default);
        }
    }, [selectedBrand]);

    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    const handleTypeChange = (type: string) => {
        setSelectedType(type === "ประเภทอะไหล่" ? "" : type);
    };

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand === "แบรนด์รถยนต์" ? "" : brand);
    };

    const handleModelChange = (model: string) => {
        setSelectedModel(model === "รุ่นรถยนต์" ? "" : model);
    };

    const applyButton = () => {
        onApplyFilters({ type: selectedType, brand: selectedBrand, model: selectedModel });
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
                    <Dropdown buttonText="ประเภทอะไหล่" contents={["อะไหล่ภายใน", "อะไหล่ภายนอก", "อะไหล่ช่วงล่าง"]} selected={filters.type} onSelect={handleTypeChange} />
                    <Dropdown buttonText="แบรนด์รถยนต์" contents={["BMW", "Benz", "MINI"]} selected={filters.brand} onSelect={handleBrandChange} />
                    <Dropdown buttonText="รุ่นรถยนต์" contents={availableModels} selected={filters.model} onSelect={handleModelChange} />
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
                                <Dropdown buttonText="ประเภทอะไหล่" contents={["อะไหล่ภายใน", "อะไหล่ภายนอก", "อะไหล่ช่วงล่าง"]} selected={filters.type} onSelect={handleTypeChange} />
                                <Dropdown buttonText="แบรนด์รถยนต์" contents={["BMW", "Benz", "MINI"]} selected={filters.brand} onSelect={handleBrandChange} />
                                <Dropdown buttonText="รุ่นรถยนต์" contents={availableModels} selected={filters.model} onSelect={handleModelChange} />
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