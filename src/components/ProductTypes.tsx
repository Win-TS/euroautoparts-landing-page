import Reveal from "../animations/Reveal";

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
                    <TypeCard type="แผ่นปิดใต้ท้องรถ" cars="BMW, Benz, MINI" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
                    <TypeCard type="พลาสติกซุ้มล้อ" cars="BMW, Benz, MINI" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-end 3xl:place-self-center">
                    <TypeCard type="ช่วงล่าง ประเภทปีกนก ลูกหมาก" cars="BMW, Benz, MINI" />
                </Reveal>
                <Reveal className="place-self-center md:place-self-start 3xl:place-self-center">
                    <TypeCard type="อะไหล่ภายใน" cars="BMW" />
                </Reveal>
            </div>
        </div>
    )
}

interface TypeCardProps {
    type: string;
    cars: string;
    className?: string;
}

function TypeCard({ type, cars, className }: TypeCardProps) {
    return (
        <div className={className}>
            <div className="w-[22rem] md:w-96 3xl:w-[25rem] h-48 bg-amber-50 rounded-lg shadow-lg flex flex-col justify-center items-center relative">
                <h1 className="text-2xl font-notothai font-bold text-center">{type}</h1>
                <h1 className="text-2xl font-notothai font-bold text-center">{cars}</h1>
                <p className="text-md font-notothai text-right pr-3 absolute bottom-3 right-3">{"รายละเอียดเพิ่มเติม >>"}</p>
            </div>
        </div>
    )
}