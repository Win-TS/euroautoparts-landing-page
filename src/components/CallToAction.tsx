import Reveal from "../animations/Reveal"

export default function CallToAction() {
    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gray-300 justify-evenly">

                <Reveal className="content-center">
                <div className="flex flex-col justify-center py-10 px-5 md:px-24 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold font-notothai">สอบถามสินค้า แอดไลน์</h1>
                        <h1 className="text-2xl font-bold font-notothai">@euroautoparts หรือคลิก</h1>
                    </div>
                    <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="pt-4 mx-auto md:mx-0">
                        <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-green-line rounded hover:bg-white group py-2 px-3 w-72 border-solid border-2 border-green-line">
                            <span className="absolute inset-0 bg-green-line transition duration-500 ease-in-out group-hover:bg-white"></span>
                            <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-green-line font-lineseedsans">
                                Add LINE Click: <span className="font-bold">@euroautoparts</span>
                            </span>
                        </button>
                    </a>
                </div>
                </Reveal>

                <hr className="md:hidden border-t border-black mx-7" />
                <div className="hidden md:block border-l border-black my-5"></div>

                <Reveal>
                <div className="flex flex-col justify-center py-10 px-5 md:px-28 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl font-bold font-notothai">อู่สนใจรับสินค้าราคาพิเศษ</h1>
                        <h1 className="text-2xl font-bold font-notothai">หรือเป็นตัวแทนจำหน่าย</h1>
                    </div>
                    <form className="pt-4 mx-auto md:mx-0">
                        <input type="text" placeholder="ชื่ออู่/ร้าน" className="block w-64 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                        <input type="text" placeholder="อีเมล/LINE" className="block w-64 mt-4 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                        <input type="text" placeholder="เบอร์โทรศัพท์" className="block w-64 mt-4 px-4 py-2 rounded border border-gray-300 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </form>
                    <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-sky-400 rounded hover:indigo-600 group py-2 px-3 w-64 mt-4">
                        <span className="absolute inset-0 bg-sky-400 transition duration-500 ease-in-out group-hover:bg-indigo-400"></span>
                        <span className="relative w-full text-center font-notothai">ส่ง</span>
                    </button>
                </div>
                </Reveal>
            </div> 
        </div>
    )
}
