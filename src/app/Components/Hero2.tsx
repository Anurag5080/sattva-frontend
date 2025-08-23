import React from 'react'
import FeaturedCard from './FeaturedCard'

const Hero2 = () => {
    return (
        <div id='#featuredproducts' className='bg-[#836F25] w-full min-h-screen flex justify-evenly items-center flex-col rounded-4xl'>
            <h2 className='text-[#050303] font-bold text-5xl h-1/3 font-stretch-expanded' style={{ fontFamily: 'samarkan, sans-serif' }}>!! Our Featured Collections !!</h2>
            <div className='bg-[#836F25] max-w-5xl flex justify-center items-center gap-10 mt-10'>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    )
}

export default Hero2