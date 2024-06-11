import Reveal from './animations/Reveal';
import HeroCarousel from './animations/HeroCaurosel';
import BackgroundCarousel from './animations/BackgroundCaurosel';

export default function Hero() {
    const images = ['/assets/heroCaurosel/hero1.jpeg', '/assets/heroCaurosel/hero2.jpeg', '/assets/heroCaurosel/hero3.jpeg', '/assets/heroCaurosel/hero4.jpeg', '/assets/heroCaurosel/hero5.jpeg', '/assets/heroCaurosel/hero6.jpeg', '/assets/heroCaurosel/hero7.jpeg', '/assets/heroCaurosel/hero8.jpeg', '/assets/heroCaurosel/hero9.jpeg', '/assets/heroCaurosel/hero10.jpeg'];

    return (
        <>
            <div className='bg-center w-screen h-96 hidden md:flex flex-row bg-gradient-to-r from-gray-1 to-black-1 justify-center items-center'>
                <div className='px-28 2xl:px-44 3xl:px-0 3xl:pl-96 flex flex-col justify-center w-1/2 text-left items-start pb-2'>
                    <Reveal>
                        <div className='w-full'>
                            <h1 className='text-left text-6xl font-bold py-2 text-neutral-200 font-impact tracking-wide'>EuroAutoParts</h1>
                            <h2 className='text-left text-4xl font-notothai text-red-600 font-bold'>อะไหล่รถยนต์ยุโรป</h2>
                            <h2 className='text-left text-4xl font-notothai text-red-600 font-bold'>BMW Benz MINI</h2>
                            <h3 className='text-left text-2xl font-notothai text-yellow-300'>ภายใน ภายนอก ช่วงล่าง</h3>
                            <h3 className='text-left text-2xl font-notothai text-yellow-300 pb-2'>ราคาย่อมเยาว์ คุณภาพดี</h3>
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
                <div className='flex w-1/2 h-96 justify-center items-center pr-2 3xl:pr-60'>
                    <Reveal>
                        <HeroCarousel images={images} />
                    </Reveal>
                </div>
            </div>

            <div className='bg-center w-screen h-80 flex md:hidden flex-col justify-center items-center'>
                <BackgroundCarousel images={images}>
                    <div className='px-4 flex flex-col justify-center items-center pb-2'>
                        <Reveal>
                            <div className='w-full text-center'>
                                <h1 className='text-5xl font-bold py-2 text-neutral-200 font-impact tracking-wide'>EuroAutoParts</h1>
                                <h2 className='text-3xl font-notothai font-bold text-red-600'>อะไหล่รถยนต์ยุโรป</h2>
                                <h2 className='text-3xl font-notothai font-bold text-red-600'>BMW Benz MINI</h2>
                                <h3 className='text-xl font-notothai text-yellow-300'>ภายใน ภายนอก ช่วงล่าง</h3>
                                <h3 className='text-xl font-notothai text-yellow-300 pb-2'>ราคาย่อมเยาว์ คุณภาพดี</h3>
                                <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="pt-10">
                                    <button className="relative inline-flex items-center justify-center overflow-hidden font-medium transition-all bg-green-line rounded hover:bg-white group py-2 px-3 w-64 border-solid border-2 border-green-line">
                                        <span className="absolute inset-0 bg-green-line transition duration-500 ease-in-out group-hover:bg-white"></span>
                                        <span className="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-green-line font-lineseedsans">
                                            Add LINE: <span className="font-bold">@euroautoparts</span>
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </BackgroundCarousel>
            </div>
        </>
    );
}