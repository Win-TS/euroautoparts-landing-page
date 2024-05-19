import logo from '../assets/euroautoparts-logo.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 border-t border-black justify-items-center'>
            <div className="grid items-center h-28 md:h-56">
                <div className="text-center content-center justify-center align-center">
                    <img src={logo} className="w-80"></img>
                    <p className="text-sm text-black font-notothai">© 2024 EuroAutoParts. All rights reserved</p>
                </div>
            </div>
            <div className="grid items-center h-40 md:h-56">
                <ul className="flex flex-col py-2">
                    {['/', '/products', '/faq', '/contact', '/privacypolicy'].map((path, index) => {
                        const labels = ['หน้าหลัก/Home', 'สินค้า/Products', 'คำถามที่พบบ่อย/FAQ', 'ติดต่อเรา/Contact', 'Privacy Policy'];
                        return (
                            <li key={index} className='py-2 text-center text-md font-notothai relative group'>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'font-bold' : ''}>
                                    <span className="relative">
                                        {labels[index]}
                                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-yellow-400 group-hover:w-3/6"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-600 group-hover:w-3/6"></span>
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}