import { useState } from "react";
import Reveal from "./animations/Reveal";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function ProductTypes() {
  return (
    <div className="bg-gray-400 p-3">
      <Reveal>
        <div className="py-2">
          <h1 className="text-2xl font-notothai font-bold text-center">
            ประเภทสินค้า
          </h1>
          <h1 className="text-2xl font-notothai font-bold text-center">
            Product Types
          </h1>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 gap-3 md:gap-5 3xl:gap-1 pb-2">
        <Reveal className="place-self-center md:place-self-end 3xl:place-self-center">
          <TypeCard
            type="แผ่นปิดใต้ท้องรถ"
            cars="BMW, Benz, MINI"
            description="ช่วยป้องกันการกระแทกของสิ่งต่างๆจากพื้นถนน, ช่วยระบายความร้อนภายใต้ตัวรถรวมถึงสามารถช่วยลดแรงเสียดทานของอากาศส่งผลให้ประหยัดน้ำมันมากขึ้น"
            background={"/assets/productTypes/undercoverBackground.jpeg"}
          />
        </Reveal>
        <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
          <TypeCard
            type="พลาสติกซุ้มล้อ"
            cars="BMW, Benz, MINI"
            description="ช่วยป้องกันสิ่งสกปรก เช่น เศษ หิน ดิน โคลน และ ของเหลว จากภายนอกไม่ให้เข้ามาติดกับช่วงล่างของรถยนต์ รวมถึงยังช่วยป้องกันความเสียหายจากเศษหินที่จะเกิดขึ้นกับรถยนต์ได้ด้วย"
            background={"/assets/productTypes/wheelhousingBackground.jpeg"}
          />
        </Reveal>
        <Reveal className="place-self-center md:place-self-end 3xl:place-self-center">
          <TypeCard
            type="ช่วงล่าง ประเภทปีกนก ลูกหมาก"
            cars="BMW, Benz, MINI"
            description="ปีกนกเป็นระบบรองรับแรงสะเทือนซึ่งปกติจะติดตั้งไว้ใกล้กับแกนล้อโดยจะใช้ลูกหมากเป็นตัวเชื่อมต่อและทำให้ปีกนกสามารถรับการเคลื่อนไหวของรถได้ เมื่อใช้ของเดิมไปในระยะเวลานานๆ ตัวช่วงล่างจะเสื่อสภาพและเริ่มมีเสียงและกระแทกขณะขับขี่ การเปลี่ยนปีกนกและลูกหมากจะทำให้รถยนต์มีเสียงจากช่วงล่างน้อยลงและรู้สึกขับได้สบายยิ่งขึ้น"
            background={"/assets/productTypes/suspensionBackground.jpeg"}
          />
        </Reveal>
        <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
          <TypeCard
            type="อะไหล่ภายใน"
            cars="BMW"
            description="มือจับประตู กรอบแอร์ และอุปกรณ์ภายในต่างๆของ BMW เมื่อใช้ไปสักระยะเวลาหนึ่งจะเริ่มเหนียวติดมือ หัก กรอบ หรือลอก สินค้าทางร้านเราขายอะไหล่ภายในที่เป็นวัสดุชนิดที่จะไม่เหนียว กรอบ หักในอนาคตแต่เกรดเทียบกับของแท้ได้เลย"
            background={"/assets/productTypes/interiorBackground.jpeg"}
          />
        </Reveal>
      </div>
    </div>
  );
}

interface TypeCardProps {
  type: string;
  cars: string;
  description: string;
  background: string;
}

function TypeCard({ type, cars, description, background }: TypeCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="rounded-lg">
      <div
        className="w-[22rem] md:w-96 3xl:w-[25rem] h-48 shadow-lg flex flex-col justify-center items-center rounded-lg relative cursor-pointer"
        onClick={toggleModal}
      >
        <div
          className="absolute inset-0 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-40"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <h1 className="text-2xl font-notothai font-bold text-center text-white relative">{type}</h1>
        <h1 className="text-2xl font-notothai font-bold text-center text-white relative">{cars}</h1>
        <p className="text-md font-notothai text-right pr-3 absolute bottom-3 right-3 text-white">
          {"รายละเอียดเพิ่มเติมคลิก >>"}
        </p>
      </div>

      <div className={`fixed inset-0 z-10 overflow-hidden flex items-center justify-center transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={toggleModal}></div>
        {modalOpen && (
          <div className="bg-white rounded-lg shadow-xl w-4/5 md:w-3/5 z-50 relative flex flex-col h-2/3 md:h-1/2">
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
}