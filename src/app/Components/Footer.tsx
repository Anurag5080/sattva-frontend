import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Footer = () => {
    return (
        <div className='bg-black w-full  text-white flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center flex-col gap-10 my-16'>
                <h1 className='text-center text-5xl font-bold text-[#BEB634]'>
                    “Stay Updated. Subscribe for Exclusive Deals!”
                </h1>

                <div className='relative'>
                    <div className="absolute top-4.5 right-7 flex items-center">
                        <Image
                            src="/email.png"
                            alt="Logo"
                            width={20}
                            height={20}
                            className="pointer-events-none"
                        />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="   Enter your email here."
                        className="rounded-full border-2 border-[#836F25] p-4 duration-150 focus:border-[#BEB634] text-lg w-[30vw] placeholder:text-gray-400 placeholder:italic focus:outline-none"
                    />
                </div>
            </div>
            <hr className="h-[3px] border-0 w-full bg-gradient-to-r from-[#362912] via-[#D9DC75] to-[#362912]" />
            <div className='flex justify-around w-full m-20 px-24'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl text-[#BEB634] font-semibold'>About</h1>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/aboutus'>About Us</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Our Story</Link>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl text-[#BEB634] font-semibold'>Shop</h1>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/collection'>Collections</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Featured Products</Link>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl text-[#BEB634] font-semibold'>Support</h1>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/faqs'>FAQ's</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Contact Us</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Shipping & Returns</Link>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl text-[#BEB634] font-semibold'>Socials</h1>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Twitter</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Instagram</Link>
                    <Link className='hover:text-[#BEB634] duration-100 ease-in-out' href='/'>Facebook</Link>
                </div>
            </div>
            <hr className="h-[3px] border-0 w-full bg-gradient-to-r from-[#362912] via-[#D9DC75] to-[#362912]" />
            <div className='my-16 text-xl'>&copy;2024, SattvaAttar.com All Rights are reserved.</div>
        </div>
    )
}

export default Footer