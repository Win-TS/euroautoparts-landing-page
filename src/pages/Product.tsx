import Reveal from "../animations/Reveal";

export default function Product() {
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
        </div>
    )
}