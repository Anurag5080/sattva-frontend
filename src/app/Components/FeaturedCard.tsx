import Image from 'next/image'
import React from 'react'
import Buttong from './Buttong'

const FeaturedCard = () => {
    return (
        <div className='flex flex-col w-[20%] h-[100%] justify-center items-center mx-5 mt-10'>
            <div className='bg-black rounded-4xl p-6 w-[100%] h-[65%] flex justify-between items-center flex-col'>
                <Image src='/IMG_3778.JPG' alt='Product image' width={250} height={400} className='h-2/3 rounded-4xl cursor-pointer' />
                <h5 className='text-[#836F25] font-bold text-2xl'>Blue Dischanel</h5>
                <div className='flex justify-center items-center gap-2'>
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                </div>
                <p className='text-white'>World’s best refreshing fragrance</p>
            </div>
            <Buttong />
        </div>
    )
}

export default FeaturedCard