interface ProductCardProps {
    name: string;
    type: string;
    brand: string;
    car: string;
    color: string
    price: number;
    image: string;
}

export default function ProductCard({ name, type, brand, car, color, price, image }: ProductCardProps) {
    const markerColor = type === "อะไหล่ภายนอก"
        ? "bg-red-500"
        : type === "อะไหล่ภายใน"
            ? "bg-blue-500"
            : type === "อะไหล่ช่วงล่าง"
                ? "bg-green-500"
                : "bg-gray-500";

    return (
        <div className="flex flex-col items-center bg-slate-200 rounded-lg py-2 w-80 gap-1">
            <img src={image} alt={name} className="w-52 h-72 object-contain my-2 flex-start" />
            <div className={`flex flex-col items-center justify-between `}>
                <h1 className={`text-xl font-notothai font-bold text-center ${!color && "py-3.5"}`}>
                    {name} {color && <><br /><span className="text-md font-notothai">{color}</span></>}
                </h1>
                <p className="text-md font-notothai font-semibold text-center">{brand + " " + car}</p>
                <p className="text-md font-notothai text-center flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${markerColor}`}></span>
                    {type}
                </p>
                <p className="text-md font-notothai">{price} บาท</p>
            </div>
        </div>
    )
}
