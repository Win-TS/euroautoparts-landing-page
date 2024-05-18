import { useState } from "react"
import { Spin as Hamburger } from 'hamburger-react'
import { Transition } from '@headlessui/react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import logo from '../assets/euroautoparts-logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <Router>
            <nav className='py-3 px-5 z-50 bg-white fixed w-full'>
                <div className='flex items-center justify-between'>
                    <img src={logo} width={200} className='z-50' />
                    <div className='md:hidden z-50'>
                        <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={25} />
                    </div>
                    <ul className='hidden md:flex space-x-10'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'font-notothai font-bold' : 'font-notothai'}>หน้าหลัก/Home</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) => isActive ? 'font-notothai font-bold' : 'font-notothai'}>สินค้า/Products</NavLink></li>
                        <li><NavLink to="/faq" className={({ isActive }) => isActive ? 'font-notothai font-bold' : 'font-notothai'}>คำถามที่พบบ่อย/FAQ</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'font-notothai font-bold' : 'font-notothai'}>ติดต่อเรา/Contact</NavLink></li>
                    </ul>
                </div>
                <Transition
                    show={isMenuOpen}
                    enter="transition ease-out duration-500 transform"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transition ease-in duration-500 transform"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-full opacity-0"
                >
                    <ul className="md:hidden fixed top-0 left-0 w-full bg-gray-400 pt-8 flex flex-col py-2" style={{ top: '77.32px', height: 'calc(100vh - 64px)' }}>
                        <li className='py-4 text-center text-xl font-notothai'><NavLink to="/" className={({ isActive }) => isActive ? 'font-bold' : ''}>หน้าหลัก/Home</NavLink></li>
                        <li className='py-4 text-center text-xl font-notothai'><NavLink to="/products" className={({ isActive }) => isActive ? 'font-bold' : ''}>สินค้า/Products</NavLink></li>
                        <li className='py-4 text-center text-xl font-notothai'><NavLink to="/faq" className={({ isActive }) => isActive ? 'font-bold' : ''}>คำถามที่พบบ่อย/FAQ</NavLink></li>
                        <li className='py-4 text-center text-xl font-notothai'><NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold' : ''}>ติดต่อเรา/Contact</NavLink></li>
                    </ul>
                </Transition>
            </nav>
        </Router>
    )
}
