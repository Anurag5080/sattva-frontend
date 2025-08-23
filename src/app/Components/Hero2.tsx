import React from 'react'
import FeaturedCard from './FeaturedCard'

const Hero2 = () => {
    return (
        <div id='#featuredproducts' className='bg-[#836F25] w-full h-screen flex justify-center items-center flex-col rounded-4xl'>
            <h2 className='text-[#050303] text-5xl font-bold font-stretch-expanded'>!! Our Featured Collections !!</h2>
            <div className='bg-[#836F25] w-full h-3/4 flex justify-center items-center'>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    )
}

export default Hero2