import Image from 'next/image'
import React from 'react'

const Hero1 = () => {
    return (
        <div className='bg-black text-white flex justify-center py-24'>
            <div className='w-2/3 flex items-center'>
                <div className='w-1/2 flex justify-center items-center flex-col gap-15'>
                    <h2 className='text-4xl text-[#BEB634] font-bold font-stretch-expanded'>Discover Your Inner-Self.</h2>
                    <p className='w-2/3 text-xl text-center'>"Experience the essence of purity with Kannauj's finest attars, crafted in the heart of the Itranagari itself."</p>
                    <button className='bg-[#836F25] py-3 px-6 rounded-full text-2xl cursor-pointer'>
                        Shop Now
                    </button>
                </div>
                <div className='w-1/2'>
                    <Image src="/fullset12.png" alt='product-image-1' width={400} height={600} className='rotate-[70deg]' />
                </div>
            </div>
        </div>
    )
}

export default Hero1