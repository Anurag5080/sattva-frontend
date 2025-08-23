import Image from 'next/image'
import React from 'react'
import FeedbackCard from './FeedbackCard'

const Hero5 = () => {
  return (
    <div className='bg-black w-full h-screen flex justify-around items-center flex-col pb-10 perspective-1000'>
        <h1 className='text-5xl text-[#BEB634] font-bold font-stretch-expanded' style={{ fontFamily: 'samarkan, sans-serif' }}>!! What our Customers are saying !!</h1>
        <div className='flex justify-between'>
            <div className='flex justify-between flex-col'>
                <FeedbackCard/>
                <FeedbackCard/>
            </div>
            <span className='bg-[#836F25] rounded-full h-[10vh] w-[13vw] absolute bottom-29 right-182 transform-gpu rotate-x-45 blur-lg opacity-35'></span>
            <Image src='/bottle_image.png' alt='Bottle image' height={500} width={250} className='rotate-[2deg] relative'/>
            <div className='flex justify-between flex-col'>
                <FeedbackCard/>
                <FeedbackCard/>
            </div>
        </div>
    </div>
  )
}

export default Hero5