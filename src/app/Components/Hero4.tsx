import React from 'react'

const Hero4 = () => {
    return (
        <div className='bg-[#836F25] w-full h-screen flex justify-around items-center flex-col pb-10'>
            <h2 className='text-5xl text-black font-bold font-stretch-expanded'>Why Choose sattva ??</h2>
            <div className='bg-black flex justify-center items-center border-2 border-[#CDCB42] rounded-[100px] h-1/2 w-3/4 px-20 gap-30'>
                <div className='flex flex-col gap-15'>
                    <div className='flex flex-col gap-4 items-center'>
                        <h5 className='text-[#836F25] text-2xl font-bold'>Natural Indegrdients</h5>
                        <p className='text-white text-center'>"Purely natural, traditionally crafted : Kannauj attars made with age-old techniques and the finest natural ingredients."</p>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <h5 className='text-[#836F25] text-2xl font-bold'>Personalization</h5>
                        <p className='text-white text-center'>"Make it unforgettable : Personalized attars with engraved names, perfect for weddings, couples, and cherished gifts."</p>
                    </div>
                </div>
                <div className='flex flex-col gap-15'>
                    <div className='flex flex-col gap-4 items-center'>
                        <h5 className='text-[#836F25] text-2xl font-bold'>Luxuorious Packaging</h5>
                        <p className='text-white text-center'>"Encased in elegance : Royal wooden-crafted boxes to complement the luxury of Kannauj’s finest attars."</p>
                    </div>
                    <div className='flex flex-col gap-4 items-center'>
                        <h5 className='text-[#836F25] text-2xl font-bold'>Long-Lasting Performance</h5>
                        <p className='text-white text-center'>“Experience the timeless essence of Kannauj attars, crafted for purity, authenticity, and enduring fragrance perfection.”</p>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl text-black font-bold font-stretch-expanded'>Get 15% OFF on your first Order !! Use Code : “WELCOME15” </h2>
            <button className='bg-black text-white text-3xl py-4 px-20 rounded-full cursor-pointer'>
                Shop Now
            </button>

        </div>
    )
}

export default Hero4