"use client"

import { useState, useEffect } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';
import Reveal from '../components/animations/Reveal';
import PaginateProduct from '../components/PaginateProduct';
import ProductFilter from '../components/ProductFilter';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Swal from 'sweetalert2';

interface Filters {
    type: string;
    brand: string;
    model: string;
}

type Product = [
    string, // id
    string, // category
    string, // brand
    string, // model
    string, // partNumber
    string, // description
    string, // color
    number, // price
    string  // imageUrl
];

interface FetchedData {
    products: Product[];
    totalPages: number;
}

async function fetchProducts(filters: Filters, currentPage: number) {
    Swal.fire({
        title: "<span class='font-notothai font-semibold'>กำลังโหลดข้อมูล...</span>",
        html: "<span class='font-notothai'>โปรดรอสักครู่</span>",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    const response: FetchedData = {
        products: [],
        totalPages: 0
    }

    const productTypes: { [key: string]: string } = {
        "อะไหล่ภายใน": "interior",
        "อะไหล่ภายนอก": "exterior",
        "อะไหล่ช่วงล่าง": "suspension"
    };

    let apiEndpoint = "/sheets/products";

    if (filters.type && !filters.brand && !filters.model) {
        apiEndpoint = `/sheets/products/type/${productTypes[filters.type]}`;
    } else if (!filters.type && filters.brand && !filters.model) {
        apiEndpoint = `/sheets/products/brand/${filters.brand}`;
    } else if (!filters.type && !filters.brand && filters.model) {
        apiEndpoint = `/sheets/products/model/${filters.model.split(" ").pop()}`;
    } else if (!filters.type && filters.brand && filters.model) {
        apiEndpoint = `/sheets/products/model/${filters.model.split(" ").pop()}`;
    } else if (filters.type && filters.brand && !filters.model) {
        apiEndpoint = `/sheets/products/type&brand/${productTypes[filters.type]}/${filters.brand}`;
    } else if (filters.type && filters.model) {
        apiEndpoint = `/sheets/products/type&model/${productTypes[filters.type]}/${filters.model.split(" ").pop()}`;
    }

    try {
        const pageCountResponse = await axios.get(process.env.NEXT_PUBLIC_API_URL + apiEndpoint + "/page-count", { params: { "limit": 16 } });
        response.totalPages = pageCountResponse.data.pageCount;

        if (pageCountResponse.data.pageCount === 0) {
            response.products = [];
        } else {
            const page = Math.min(currentPage + 1, pageCountResponse.data.pageCount);
            const productsResponse = await axios.get(process.env.NEXT_PUBLIC_API_URL + apiEndpoint + "/page", { params: { "pageNo": page, "limit": 16 } });
            response.products = productsResponse.data.products;
        }
        Swal.close();
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: "<span class='font-notothai font-semibold'>เกิดข้อผิดพลาด!</span>",
            html: "<span class='font-notothai'>ไม่สามารถโหลดข้อมูลได้ โปรดลองอีกครั้ง</span>",
            icon: "error"
        });
    }

    return response;
}

export default function Page() {
    const [filters, setFilters] = useState({
        type: '',
        brand: '',
        model: ''
    });

    const [data, setData] = useState<Product[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const initialData: FetchedData = await fetchProducts(filters, currentPage);
            setData(initialData.products);
            setTotalPages(initialData.totalPages);
        };

        loadData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [filters, currentPage]);

    const applyFilters = async (filter: Filters) => {
        const clearedFilters = { type: '', brand: '', model: '' };
        setFilters(clearedFilters);
        setFilters(filter);
        setCurrentPage(0);
        const newData = await fetchProducts(filter, 0);
        setData(newData.products);
        setTotalPages(newData.totalPages);
    };

    const clearFilters = async () => {
        const clearedFilters = { type: '', brand: '', model: '' };
        setFilters(clearedFilters);
        setCurrentPage(0);
        const newData = await fetchProducts(clearedFilters, 0);
        setData(newData.products);
        setTotalPages(newData.totalPages);
    };

    const toPageTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <>
                    {(filters.type !== '' || filters.brand !== '' || filters.model !== '') ? (
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
            <div className="flex justify-center items-center" onClick={toPageTop}>
                <FaCircleArrowUp className="w-8 h-8 text-blue-500 mt-5 border border-gray-300 rounded-full animate-bounce cursor-pointer" />
            </div>
        </div>
    );
}