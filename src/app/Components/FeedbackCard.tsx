import React from 'react'
import Image from 'next/image'

const FeedbackCard = () => {
  return (
    <div className='bg-gradient-to-b from-[#D9DC75] to-[#362912] p-6 max-w-sm flex items-center justify-center flex-col gap-4 rounded-4xl cursor-pointer'>
      <h1 className='text-black font-bold text-xl'>Neha sharma</h1>
      <div className='flex justify-center items-center gap-2'>
        <Image src='/star (1).png' alt='star image' width={15} height={15} />
        <Image src='/star (1).png' alt='star image' width={15} height={15} />
        <Image src='/star (1).png' alt='star image' width={15} height={15} />
        <Image src='/star (1).png' alt='star image' width={15} height={15} />
        <Image src='/star (1).png' alt='star image' width={15} height={15} />
      </div>
      <p className='text-white text-center'>"Blue Dischanael is an absolute stunner! It’s refreshing yet sophisticated, and I feel confident every time I wear it!"</p>
    </div>
  )
}

export default FeedbackCard