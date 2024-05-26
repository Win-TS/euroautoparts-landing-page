import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function useProductFetcher() {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);

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
                const pageCountResponse = await axios.get(import.meta.env.VITE_API_URL + "/sheets/products/page-count", { params: { "limit": 16 } });
                setTotalPages(pageCountResponse.data.pageCount);
    
                const page = Math.min(currentPage + 1, pageCountResponse.data.pageCount);
                const productsResponse = await axios.get(import.meta.env.VITE_API_URL + "/sheets/products/page", { params: { "pageNo": page, "limit": 16 } });
                setData(productsResponse.data.products);
    
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
    }, [currentPage]);

    return { data, totalPages, currentPage, setCurrentPage };
}