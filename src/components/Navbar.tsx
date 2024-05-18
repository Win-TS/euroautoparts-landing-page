import { useState } from "react"
import { Spin as Hamburger } from 'hamburger-react'
import logo from '../assets/euroautoparts-logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='p-4'>
            <div className='flex items-center justify-between'>
                <img src={logo} width={200} />
                <div className='md:hidden'>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={25}/>
                </div>
                <ul className='hidden md:flex space-x-10'>
                    <li><a href='#' className=''>หน้าหลัก/Home</a></li>
                    <li><a href='#' className=''>สินค้า/Products</a></li>
                    <li><a href='#' className=''>คำถามที่พบบ่อย/FAQ</a></li>
                    <li><a href='#' className=''>ติดต่อเรา/Contact</a></li>
                </ul>
            </div>
            <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex-col py-2`}>
                <li className='py-1'><a href='#'>หน้าหลัก/Home</a></li>
                <li className='py-1'><a href='#'>สินค้า/Products</a></li>
                <li className='py-1'><a href='#'>คำถามที่พบบ่อย/FAQ</a></li>
                <li className='py-1'><a href='#'>ติดต่อเรา/Contact</a></li>
            </ul>
        </nav>
    )
}