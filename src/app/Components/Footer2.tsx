import Image from 'next/image'
import React from 'react'

const Footer2 = () => {
  return (
    <div className='bg-[#836F25] flex justify-center py-10 items-center gap-5 rounded-b-4xl'>
        <div className='bg-black border-4 border-[#BEB634] rounded-4xl flex gap-3 py-8 px-5 max-w-[25vw] min-h-[22vh]'>
            <div>
                <Image src='/free-delivery.png' alt='free delivery icon' height={70} width={70}/>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#836F25] text-xl font-semibold'>Free Delivery</h1>
                <p className='text-white'>Free Delivery on Orders above ₹499 across India. Order now to grab this opportunity before it ends.</p>
            </div>
        </div>
        <div className='bg-black border-4 border-[#BEB634] rounded-4xl flex gap-3 py-8 px-5 max-w-[25vw] min-h-[22vh]'>
            <div>
                <Image src='/award.png' alt='award logo' height={70} width={70}/>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#836F25] text-xl font-semibold'>Premium Quality Products</h1>
                <p className='text-white'>Our all products are untouched by Machines which preserves it’s natural fragrances.</p>
            </div>
        </div>
        <div className='bg-black border-4 border-[#BEB634] rounded-4xl flex gap-3 py-8 px-5 max-w-[25vw] min-h-[22vh]'>
            <div>
                <Image src='/lock (1).png' alt='Lock logo' height={50} width={50}/>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#836F25] text-xl font-semibold'>Secure Payment</h1>
                <p className='text-white'>Your payment information is processed through secure payment gateway.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer2