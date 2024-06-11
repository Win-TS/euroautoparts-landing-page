"use client"

import { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import logo from '../../assets/logo/euroautoparts-logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='py-3 px-5 z-50 bg-white fixed w-full'>
            <div className='flex items-center justify-between'>
                <img src={logo.src} width={200} className='z-50' />
                <div className='md:hidden z-50'>
                    <Hamburger toggled={isMenuOpen} toggle={toggleMenu} size={25} />
                </div>
                <ul className='hidden md:flex space-x-10'>
                    {['/', '/products', '/faq', '/contact'].map((path, index) => {
                        const labels = ['หน้าหลัก/Home', 'สินค้า/Products', 'คำถามที่พบบ่อย/FAQ', 'ติดต่อเรา/Contact'];
                        const isActive = currentPath === path;

                        return (
                            <li key={index} className='relative group'>
                                <Link href={path} className={`font-notothai ${isActive ? 'font-bold' : ''}`}>
                                    <span className="relative">
                                        {labels[index]}
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-yellow-400 group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-600 group-hover:w-3/6"></span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
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
                    {['/', '/products', '/faq', '/contact'].map((path, index) => {
                        const labels = ['หน้าหลัก/Home', 'สินค้า/Products', 'คำถามที่พบบ่อย/FAQ', 'ติดต่อเรา/Contact'];
                        const isActive = currentPath === path;

                        return (
                            <li key={index} className='py-4 text-center text-xl font-notothai relative group' onClick={toggleMenu}>
                                <Link href={path} className={isActive ? 'font-bold' : ''}>
                                    <span className="relative">
                                        {labels[index]}
                                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-yellow-400 group-hover:w-3/6"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-600 group-hover:w-3/6"></span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Transition>
        </nav>
    );
}
