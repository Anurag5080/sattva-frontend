import Image from 'next/image'
import React from 'react'

const Shop = () => {
  return (
    <div className='bg-[#836F25] w-full min-h-screen flex items-center justify-center flex-col gap-10'>
      <div className='min-w-5xl flex justify-between items-center mt-40 px-10'>
        <button className='bg-black text-white py-3 px-8 max-w-2xl rounded-4xl cursor-pointer min-w-[2vw] hover:text-[#836F25] duration-200 ease-in-out'>
          All Categories
        </button>
        <button className='bg-black text-white py-3 px-8 max-w-2xl rounded-4xl cursor-pointer min-w-[2vw] hover:text-[#836F25] duration-200 ease-in-out'>
          For  Women
        </button>
        <button className='bg-black text-white py-3 px-8 max-w-2xl rounded-4xl cursor-pointer min-w-[2vw] hover:text-[#836F25] duration-200 ease-in-out'>
          For  Men
        </button>
      </div>
      <div className='max-w-5xl bg-black rounded-4xl border-2 border-[#BEB634] py-10 px-20 flex flex-col gap-6'>
        <h1 className='text-[#BEB634] text-3xl font-bold' style={{ fontFamily: 'samarkan, sans-serif'}}>Our Products.</h1>
        <p className='text-white'>Discover the finest collection of authentic and handcrafted attars, sourced directly from Kannauj, the fragrance capital of India.</p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>White Oodh</h1>
            <h1 className='text-white '>MRP 649.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Mitti Attar</h1>
            <h1 className='text-white '>MRP 599.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Greed Aventus</h1>
            <h1 className='text-white '>MRP 599.</h1>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Rose Bulgaria</h1>
            <h1 className='text-white '>MRP 649.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Blue Dischanael</h1>
            <h1 className='text-white '>MRP 649.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Oodh Behrien</h1>
            <h1 className='text-white '>MRP 599.</h1>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Fantasiya Attar</h1>
            <h1 className='text-white '>MRP 599.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Couple Combo</h1>
            <h1 className='text-white '>MRP 699.</h1>
          </div>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Gifting Combo</h1>
            <h1 className='text-white '>MRP 1199.</h1>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <Image src='/IMG_3778.JPG' alt='Product image' width={200} height={200} className='cursor-pointer'/>
            <div className='flex items-center w-full'>
              <button className='bg-white text-black font-bold px-3 py-4 w-1/2 cursor-pointer hover:text-white hover:bg-black duration-200 ease-in-out'>Add to Cart</button>
              <button className='bg-[#836F25] text-white font-bold px-3 py-4 w-1/2 cursor-pointer hover:bg-[#BEB634] hover:text-black duration-200 ease-in-out'>Buy Now</button>
            </div>
            <h1 className='text-xl text-[#BEB634] font-bold mt-4'>Special Gifting Combo</h1>
            <h1 className='text-white'>MRP 1799.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop