import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface PaginateProductProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export default function PaginateProduct({ totalPages, currentPage, setCurrentPage }: PaginateProductProps) {
    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    }

    const showNextButton = currentPage !== totalPages - 1;
    const showPrevButton = currentPage !== 0;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div className="flex justify-center items-center">
            <ReactPaginate
                previousLabel={showPrevButton ? (
                    <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-color ease-in duration-200 rounded-md mr-2 md:mr-4">
                        <BsChevronLeft />
                    </span>
                ) : null}
                nextLabel={showNextButton ? (
                    <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-color ease-in duration-200 rounded-md ml-2 md:ml-4">
                        <BsChevronRight />
                    </span>
                ) : null}
                breakLabel={"..."}
                breakClassName={"block font-notothai w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"}
                onPageChange={handlePageClick}
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                containerClassName={"flex items-center space-x-2 md:space-x-3 justify-center my-3"}
                pageClassName="block font-notothai hover:bg-gray-300 transition-color ease-in duration-200 rounded-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                activeClassName="bg-blue-400 hover:bg-blue-500 transition-color ease-in duration-200 text-white"
            />
        </div>
    )
}
