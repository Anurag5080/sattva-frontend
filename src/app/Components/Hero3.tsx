import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
    return (
        <div className='bg-black w-full h-screen relative flex justify-center items-center flex-col px-24'>
            <h2 className='text-4xl text-[#BEB634] font-bold font-stretch-expanded absolute top-20'>!! A tradition of Excellence !!</h2>
            <div className='flex justify-center items-center w-full'>
                <Image src='/fullset13.png' alt='Box image' width={600} height={1000} className='absolute bottom-0 left-0 rotate-180' />
                <div className='flex justify-center items-center flex-col gap-10 z-10 absolute w-[45%] h-2/4 right-70 top-70'>
                    <p className='text-white text-xl leading-loose tracking-widest text-center'>“At Our Store, we are dedicated to the art and science of attar production, drawing upon the rich history of Kannauj, a city renowned for its centuries-old tradition of fragrance crafting. Established in 2024 by Sattva Attar, our mission is to provide a luxurious selection of exquisite attars that not only captivate the senses but also honor the heritage of this ancient craft.”</p>
                    <button className='bg-[#836F25] text-white rounded-full px-20 py-4 text-xl cursor-pointer'>Discover More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero3