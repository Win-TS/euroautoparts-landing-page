//import heroImage from '../assets/e60-ใต้เครื่อง.jpg';
import Reveal from '../animations/Reveal';
import  Carousel  from '../animations/Caurosel';

export default function Hero() {
    return (
        <div className='bg-center w-screen h-80 md:h-96 flex flex-col md:flex-row bg-gradient-to-r from-gray-1 to-black-1 justify-center items-center'>
            <div className='px-4 md:px-32 flex flex-col justify-center md:w-1/2 md:text-left items-center md:items-start pb-2'>
                <Reveal>
                    <div className='w-full'>
                        <h1 className='text-5xl text-center md:text-left md:text-6xl font-bold py-2 text-neutral-200 font-impact tracking-wide'>EuroAutoParts</h1>
                        <h2 className='text-2xl text-center md:text-left md:text-4xl font-notothai text-red-600 font-bold'>อะไหล่รถยนต์ยุโรป</h2>
                        <h2 className='text-2xl text-center md:text-left md:text-4xl font-notothai text-red-600 font-bold'>BMW Benz MINI</h2>
                        <h3 className='text-xl text-center md:text-left md:text-2xl font-notothai text-yellow-300'>ภายใน ภายนอก ช่วงล่าง</h3>
                        <h3 className='text-xl text-center md:text-left md:text-2xl font-notothai text-yellow-300 pb-2'>ราคาย่อมเยาว์ คุณภาพดี</h3>
                        <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="pt-10">
                            <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-green-line rounded hover:bg-white group py-2 px-3 w-72 border-solid border-2 border-green-line">
                                <span className="absolute inset-0 bg-green-line transition duration-500 ease-in-out group-hover:bg-white"></span>
                                    <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-green-line font-lineseedsans">
                                    Add LINE Click: <span className="font-bold">@euroautoparts</span>
                                </span>
                            </button>
                        </a>
                    </div>
                </Reveal>
            </div>
            <div className='hidden md:flex md:w-1/2 w-full h-96 justify-center items-center'>
                <Carousel />
            </div>
        </div>
    );
}