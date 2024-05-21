import { useState } from "react";
import Reveal from "../animations/Reveal";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ProductTypes() {
    return (
        <div className="bg-stone-300 p-3">
            <Reveal>
                <div className="py-2">
                    <h1 className="text-2xl font-notothai font-bold text-center">ประเภทสินค้า</h1>
                    <h1 className="text-2xl font-notothai font-bold text-center">Product Types</h1>
                </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-3 md:gap-5 3xl:gap-1">
                <Reveal className="place-self-center md:place-self-end 3xl:place-self-center">
                    <TypeCard type="แผ่นปิดใต้ท้องรถ" cars="BMW, Benz, MINI" description="test" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
                    <TypeCard type="พลาสติกซุ้มล้อ" cars="BMW, Benz, MINI" description="test" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-end 3xl:place-self-center">
                    <TypeCard type="ช่วงล่าง ประเภทปีกนก ลูกหมาก" cars="BMW, Benz, MINI" description="test" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
                    <TypeCard type="อะไหล่ภายใน" cars="BMW" description="test" />
                </Reveal>
            </div>
        </div>
    )
}

interface TypeCardProps {
    type: string;
    cars: string;
    description: string;
    className?: string;
}

function TypeCard({ type, cars, description, className }: TypeCardProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };
  
    return (
        <div className={className}>
          <div
            className="w-[22rem] md:w-96 3xl:w-[25rem] h-48 bg-amber-50 rounded-lg shadow-lg flex flex-col justify-center items-center relative cursor-pointer"
            onClick={toggleModal}
          >
            <h1 className="text-2xl font-notothai font-bold text-center">{type}</h1>
            <h1 className="text-2xl font-notothai font-bold text-center">{cars}</h1>
            <p className="text-md font-notothai text-right pr-3 absolute bottom-3 right-3">
              {"รายละเอียดเพิ่มเติมคลิก >>"}
            </p>
          </div>
    
          <div className={`fixed inset-0 z-10 overflow-hidden flex items-center justify-center transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={toggleModal}></div>
            {modalOpen && (
              <div className="bg-white rounded-lg shadow-xl w-4/5 z-50 relative flex flex-col h-2/3 md:h-1/2">
                <div className="bg-amber-200 text-black px-4 py-4 flex justify-between items-center rounded-t-lg">
                  <h2 className="text-2xl font-semibold font-notothai">{`${type} ${cars}`}</h2>
                  <button onClick={toggleModal} className="text-black">
                    <IoCloseCircleOutline className="text-3xl" />
                  </button>
                </div>
    
                <div className="p-4 overflow-auto">
                  <p className="text-lg font-notothai">{description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
  };