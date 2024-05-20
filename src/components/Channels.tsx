import LineLogo from '../assets/line_logo.png';
import FacebookLogo from '../assets/facebook_logo.png';
import ShopeeLogo from '../assets/shopee_logo.png';
import LazadaLogo from '../assets/lazada_logo.png';
import Reveal from '../animations/Reveal';

export default function Channels() {
    return (
        <div className='bg-slate-200'>
            <Reveal>
                <div className="hidden md:grid grid-cols-5 gap-3 px-5 py-5 justify-items-center">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-2xl font-bold text-center font-notothai">ช่องทางการสั่งซื้อ</h1>
                        <h1 className="text-2xl font-bold text-center font-notothai">Channels</h1>
                    </div>
                    <div className="p-3 flex justify-center items-center w-48">
                        <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <img src={LineLogo} alt="Line" />
                        </a>
                    </div>
                    <div className="p-3 flex justify-center items-center w-48">
                        <a href="https://www.facebook.com/EuroAutoPartsTH/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <img src={FacebookLogo} alt="Facebook" />
                        </a>
                    </div>
                    <div className="p-3 flex justify-center items-center w-48">
                        <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <img src={ShopeeLogo} alt="Shopee" />
                        </a>
                    </div>
                    <div className="p-3 flex justify-center items-center w-48">
                        <a href="https://www.lazada.co.th/shop/euroautoparts" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                            <img src={LazadaLogo} alt="Lazada" />
                        </a>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className='block md:hidden w-full bg-slate-200 pb-2'>
                    <h1 className="text-2xl font-bold text-center font-notothai pt-5">ช่องทางการสั่งซื้อ</h1>
                    <h1 className="text-2xl font-bold text-center font-notothai">Channels</h1>
                    <div className="grid grid-cols-4 gap-1 px-2">
                        <div className="p-3 flex justify-center items-center w-auto">
                            <a href="https://line.me/R/ti/p/@902vqfcp?oat_content=url" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={LineLogo} alt="Line" />
                            </a>
                        </div>
                        <div className="p-3 flex justify-center items-center">
                            <a href="https://www.facebook.com/EuroAutoPartsTH/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={FacebookLogo} alt="Facebook" />
                            </a>
                        </div>
                        <div className="p-3 flex justify-center items-center">
                            <a href="https://shopee.co.th/euroautopartsth" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={ShopeeLogo} alt="Shopee" />
                            </a>
                        </div>
                        <div className="p-3 flex justify-center items-center">
                            <a href="https://www.lazada.co.th/shop/euroautoparts" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                                <img src={LazadaLogo} alt="Lazada" />
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
