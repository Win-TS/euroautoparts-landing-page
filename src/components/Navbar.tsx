import { useState } from "react"
import { Spin as Hamburger } from 'hamburger-react'
import { Transition } from '@headlessui/react'
import logo from '../assets/euroautoparts-logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='py-3 px-4 z-50 bg-white'>
            <div className='flex items-center justify-between'>
                <img src={logo} width={200} className='z-50' />
                <div className='md:hidden z-50'>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={25} />
                </div>
                <ul className='hidden md:flex space-x-10'>
                    <li><a href='#' className=''>หน้าหลัก/Home</a></li>
                    <li><a href='#' className=''>สินค้า/Products</a></li>
                    <li><a href='#' className=''>คำถามที่พบบ่อย/FAQ</a></li>
                    <li><a href='#' className=''>ติดต่อเรา/Contact</a></li>
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
                <ul className="md:hidden fixed top-0 left-0 w-full bg-gray-500 bg-opacity-90 pt-8 flex flex-col py-2" style={{ top: '77.32px', height: 'calc(100vh - 64px)' }}>
                    <li className='py-4 text-center'><a href='#'>หน้าหลัก/Home</a></li>
                    <li className='py-4 text-center'><a href='#'>สินค้า/Products</a></li>
                    <li className='py-4 text-center'><a href='#'>คำถามที่พบบ่อย/FAQ</a></li>
                    <li className='py-4 text-center'><a href='#'>ติดต่อเรา/Contact</a></li>
                </ul>
            </Transition>
        </nav>
    )
}