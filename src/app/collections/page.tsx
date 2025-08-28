import React from 'react'
import Image from 'next/image'

const Collection = () => {
  return (
    <div className='bg-[#836F25] w-full min-h-screen flex justify-center items-center pt-25 flex-col'>
      <div className='max-w-5xl flex justify-center items-center gap-10 flex-col max-h-[100vh] mt-15'>
        <h1 className='text-5xl text-black font-bold' style={{ fontFamily: 'samarkan, sans-serif'}}>Women's Special</h1>
        <div className='bg-black border-2 border-[#D9DC75] rounded-4xl flex justify-evenly items-center flex-col px-20 py-10 gap-5 h-full'>
          <h2 className='text-[#BEB634] text-3xl text-bold tracking-wide text-center'>"Elegance in Every Drop – Crafted Just for Her"</h2>
          <p className='text-white leading-5 text-center'>Introducing our exclusive women’s collection – Rose Bulgaria and Fantasiya, two fragrances that embody grace, charm, and femininity.</p>
          <div className='flex items-center justify-center w-full gap-10'>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-3 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={200} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Rose Bulgaria</h2>
              <p className='text-white text-center'>A timeless blend of rich Bulgarian roses, exuding sophistication and romance.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-3 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={300} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Fantasiya</h2>
              <p className='text-white text-center'>A mesmerizing fusion of sweet florals and warm musk, perfect for enchanting moments.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-5xl flex justify-center items-center gap-10 flex-col max-h-[100vh] mt-15'>
        <h1 className='text-5xl text-black font-bold' style={{ fontFamily: 'samarkan, sans-serif'}}>Men's Special</h1>
        <div className='bg-black border-2 border-[#D9DC75] rounded-4xl flex justify-evenly items-center flex-col px-20 py-10 gap-5 h-full'>
          <h2 className='text-[#BEB634] text-3xl text-bold tracking-wide text-center'>"Unleash Your Power – Crafted Just for Him"</h2>
          <p className='text-white leading-5 text-center'>Step into a world of unmatched sophistication with our exclusive men’s collection – Blue Dischanael and Greed Aventus, two scents that define strength, charisma, and confidence.</p>
          <div className='flex items-center justify-center w-full gap-10'>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-3 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={200} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Blue Dischanael</h2>
              <p className='text-white text-center'>A fresh and invigorating blend of oceanic notes, perfect for the modern man who commands attention.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-3 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={300} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Greed Aventus</h2>
              <p className='text-white text-center'>A bold fusion of woody and fruity accords, designed for those who aspire to lead and conquer.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-5xl flex justify-center items-center gap-10 flex-col max-h-[100vh] mt-15'>
        <h1 className='text-5xl text-black font-bold' style={{ fontFamily: 'samarkan, sans-serif'}}>Couple's Special</h1>
        <div className='bg-black border-2 border-[#D9DC75] rounded-4xl flex justify-evenly items-center flex-col px-20 py-10 gap-5 h-full'>
          <h2 className='text-[#BEB634] text-3xl text-bold tracking-wide text-center'>"Couple Special Combo – A Fragrance Duo for Lovebirds"</h2>
          <div className='flex items-center justify-center w-full gap-10'>
            <p className='text-white text-lg text-center w-1/2 leading-12'>"Introducing the Couple Special Combo, a perfect blend designed for you and your partner. This exclusive set features two iconic fragrances – Fantasiya and Blue Dischanael – crafted to complement each other and celebrate your unique bond.
              Whether it’s a gift for your loved one or a treat for yourselves, this combo is the perfect way to express your connection.
              Don’t just buy a fragrance; buy a story of love."</p>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-2 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={300} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Couple Combo</h2>
              <p className='text-white text-center'>Experience the magic of a scent that symbolizes love, togetherness, and unforgettable moments.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-5xl flex justify-center items-center gap-10 flex-col max-h-[100vh] mt-15'>
        <h1 className='text-5xl text-black font-bold' style={{ fontFamily: 'samarkan, sans-serif'}}>Gifting Box</h1>
        <div className='bg-black border-2 border-[#D9DC75] rounded-4xl flex justify-evenly items-center flex-col px-20 py-10 gap-5 h-full'>
          <h2 className='text-[#BEB634] text-3xl text-bold tracking-wide text-center'>"Gifting Special Combo – Personalize Luxury Like Never Before"</h2>
          <div className='flex items-center justify-center w-full gap-10'>
            <div className='bg-[#836F25] flex justify-around items-center rounded-4xl p-6 gap-2 flex-col w-1/2'>
              <Image src='/IMG_3778.JPG' alt='Product image' height={300} width={300} className='rounded-4xl cursor-pointer' />
              <h2 className='text-black font-bold text-2xl text-center'>Special Gifting Set</h2>
              <p className='text-white text-center'>This combo is perfect for birthdays, anniversaries, or any special occasion, offering a thoughtful and unforgettable gifting experience.</p>
              <button className='bg-black text-white py-4 w-full px-12 rounded-4xl cursor-pointer hover:font-bold hover:text-[#836F25] duration-200 ease-in-out'>Shop Now</button>
            </div>
            <p className='text-white text-lg text-center w-1/2 leading-12'>"Introducing the Gifting Special Combo, a one-of-a-kind fragrance set tailored to your preferences.
              Choose any 5 fragrances from our premium collection of 7, and pair them with a luxurious box of your choice – Leather, with a premium printed name customization, or Wooden, with a beautifully engraved name for a timeless appeal. Create a gift that’s as unique as your loved ones, all at a fixed price, no matter how you customize it."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection