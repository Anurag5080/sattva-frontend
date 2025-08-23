import Image from 'next/image'
import React from 'react'
import Buttong from './Buttong'

const FeaturedCard = () => {
    return (
        <div className='flex flex-col w-full max-h-4xl justify-center items-center'>
            <div className='bg-black rounded-4xl p-7 pb-10 w-full h-full flex items-center flex-col gap-6'>
                <div className='relative w-full h-2/3 flex justify-between items-center'>
                    <Image src='/IMG_3778.JPG' alt='Product image' height={500} width={500} className='h-2/3 rounded-4xl cursor-pointer' />
                </div>
                <h5 className='text-[#836F25] font-bold text-2xl'>Blue Dischanel</h5>
                <div className='flex justify-center items-center gap-2'>
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                    <Image src='/star (1).png' alt='star image' width={15} height={15} />
                </div>
                <p className='text-white text-center'>World’s best refreshing fragrance</p>
            </div>
            <Buttong />
        </div>
    )
}

export default FeaturedCard