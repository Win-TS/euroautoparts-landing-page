import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface ProductFetcherProps {
    type: string;
    brand: string;
    model: string;
}

export default function useProductFetcher(filters: ProductFetcherProps) {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [apiEndpoint, setApiEndpoint] = useState("/sheets/products");

    useEffect(() => {
        interface ProductTypes {
            [key: string]: string;
        }

        const productTypes: ProductTypes = {
            "อะไหล่ภายใน": "interior", 
            "อะไหล่ภายนอก": "exterior",
            "อะไหล่ช่วงล่าง": "suspension"
        }

        let newApiEndpoint = "/sheets/products";

        if (filters.type !== "" && filters.brand === "" && filters.model === "") {
            newApiEndpoint = "/sheets/products/type" + "/" + productTypes[filters.type];
        } else if (filters.type === "" && filters.brand !== "" && filters.model === "") {
            newApiEndpoint = "/sheets/products/brand" + "/" + filters.brand;
        } else if (filters.type === "" && filters.brand === "" && filters.model !== "") {
            newApiEndpoint = "/sheets/products/model" + "/" + filters.model;
        } else if (filters.type !== "" && filters.brand !== "" && filters.model === "") {
            newApiEndpoint = "/sheets/products/type&brand" + "/" + productTypes[filters.type] + "/" + filters.brand;
        } else if (filters.type !== "" && filters.model !== "") {
            newApiEndpoint = "/sheets/products/type&model" + "/" + productTypes[filters.type] + "/" + filters.model;
        }

        if (newApiEndpoint !== apiEndpoint) {
            setApiEndpoint(newApiEndpoint);
            setCurrentPage(0); // Reset current page when filters change
        }
    }, [filters, apiEndpoint]);

    useEffect(() => {
        const fetchData = async () => {
            Swal.fire({
                title: "<span class='font-notothai font-semibold'>กำลังโหลดข้อมูล...</span>",
                html: "<span class='font-notothai'>โปรดรอสักครู่</span>",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
    
            try {
                const pageCountResponse = await axios.get(import.meta.env.VITE_API_URL + apiEndpoint + "/page-count", { params: { "limit": 16 } });
                setTotalPages(pageCountResponse.data.pageCount);
                
                if (pageCountResponse.data.pageCount === 0) {
                    setData([]);
                } else {
                    const page = Math.min(currentPage + 1, pageCountResponse.data.pageCount);
                    const productsResponse = await axios.get(import.meta.env.VITE_API_URL + apiEndpoint + "/page", { params: { "pageNo": page, "limit": 16 } });
                    setData(productsResponse.data.products);
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
        };
    
        fetchData();
    }, [currentPage, apiEndpoint]);

    return { data, totalPages, currentPage, setCurrentPage };
}
