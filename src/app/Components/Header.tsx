"use client"

import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type NavLink = { name: string; path: string };

const links: NavLink[] = [
    { name: "Home", path: "/homepage" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "About Us", path: "/about" },
    { name: "FAQ's", path: "/faq" },
];

const Header = () => {

    const pathname = usePathname();
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && lastScrollY > 120) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };  

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`bg-black w-full flex justify-center items-center flex-col py-2 fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${showNav ? "translate-y-0" : "-translate-y-full" }`}>
            <div className='h-1/2 w-2/3 flex justify-between items-center py-3'>
                <Image src="/search.png" alt='Search white logo' width={20} height={30} className='cursor-pointer' />
                <p className='text-[#BEB634] text-4xl cursor-pointer' style={{ fontFamily: 'samarkan, sans-serif' }}>
                    Sattva
                </p>
                <div className='flex gap-5'>
                    <Image src="/cart.png" alt='Cart white logo' width={20} height={30} className='cursor-pointer' />
                    <Image src="/user.png" alt='User white logo' width={20} height={30} className='cursor-pointer' />
                </div>
            </div>
            <div className='h-1/2 w-2/3 py-2'>
                <ul className="text-white flex flex-row justify-between items-center text-lg">
                    {links.map((link) => {

                        const isActive = pathname === link.path;
                        return (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`hover:text-[#BEB634] duration-100 ease-in-out transition-colors ${isActive ? "text-[#836F25]" : "text-gray-300"}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div >
    )
}

export default Header