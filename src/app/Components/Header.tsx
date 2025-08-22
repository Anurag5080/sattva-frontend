import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Header = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "Collections", path: "/collection" },
        { name: "About Us", path: "/aboutus" },
        { name: "FAQ's", path: "/faqs" },
    ];



    return (
        <div className='bg-black w-full flex justify-center items-center flex-col py-2'>
            <div className='h-1/2 w-2/3 flex justify-between items-center py-3'>
                <Image src="/search.png" alt='Search white logo' width={20} height={30} className='cursor-pointer' />
                <p className='text-[#BEB634] text-4xl cursor-pointer font-bold font-stretch-expanded'>
                    Sattva
                </p>
                <div className='flex gap-5'>
                    <Image src="/cart.png" alt='Cart white logo' width={20} height={30} className='cursor-pointer' />
                    <Image src="/user.png" alt='User white logo' width={20} height={30} className='cursor-pointer' />
                </div>
            </div>
            <div className='h-1/2 w-2/3 py-2'>
                <ul className="text-white flex flex-row justify-between items-center text-lg">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className="hover:text-[#BEB634] duration-100 ease-in-out"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header