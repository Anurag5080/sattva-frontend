import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='min-h-screen w-full pt-30'>
            <div className='relative w-full min-h-[86vh] bg-black flex items-center justify-center'>
                <Image src='/bottlewithbox.jpg' alt='Bottle with box image' fill={true} style={{ objectFit: 'cover', objectPosition: 'center' } } />
                <div className='z-10 absolute text-white  h-full w-1/3 left-[52%] flex items-center justify-around flex-col p-10'>
                    <h1 className='text-[#BEB634] text-5xl font-bold text-center leading-15'>A Tradition Of <br/>!! Excellence !!</h1>
                    <p className='text-white text-lg text-center leading-8 tracking-wide'>“At Our Store, we are dedicated to the art and science of attar production, drawing upon the rich history of Kannauj, a city renowned for its centuries-old tradition of fragrance crafting. Established in 2024 by Sattva Attar, our mission is to provide a luxurious selection of exquisite attars that not only captivate the senses but also honor the heritage of this ancient craft.”</p>
                    <button className='bg-[#836F25] text-white rounded-full px-20 py-4 text-xl cursor-pointer'>Subscribe us for more.</button>
                </div>
            </div>
            <div className='w-full h-full bg-[#836F25] flex items-center py-20 flex-col gap-20'>
                <div id='#ourstory' className='bg-black h-[50vh] border-2 border-[#CDCB42] rounded-4xl flex max-w-5xl mx-auto'>
                    <div className='relative h-full w-1/2 rounded-4xl'>
                        <Image src='/IMG_3778.JPG' alt='Product image' fill={true} style={{ objectFit: 'cover', objectPosition: 'bottom' }} className='rounded-4xl'/>
                    </div>
                    <div className='flex justify-around items-center flex-col w-1/2 p-10'>
                        <h2 className='text-[#836F25] text-4xl font-bold'>Our Story</h2>
                        <p className='text-white leading-8 text-center'>For centuries, Kannauj, the Itranagari of India, has been the cradle of exquisite attar-making, a craft perfected since the Mughal era. We proudly carry forward this legacy by bringing authentic, traditionally distilled attars online. Every drop reflects the purity, untouched by machines, ensuring a fragrance steeped in heritage and history. Our mission is to make this ancient art accessible while honoring its roots.</p>
                    </div>
                </div>
                <div className='bg-black h-[50vh] border-2 border-[#CDCB42] rounded-4xl flex max-w-5xl mx-auto'>
                    <div className='flex justify-around items-center flex-col w-1/2 p-10'>
                        <h2 className='text-[#836F25] text-4xl font-bold'>Our Misson</h2>
                        <p className='text-white leading-8 text-center'>Attars of Kannauj symbolize India's unmatched ingenuity and tradition, dating back to the 7th century under the reign of Harshavardhana. Our mission is to celebrate this heritage by sharing these handcrafted fragrances across India. We aim to inspire pride in our ancestors' brilliance, allowing everyone to experience the timeless allure of attars and embrace the rich legacy they embody.</p>
                    </div>
                    <div className='relative h-full w-1/2 rounded-4xl'>
                        <Image src='/IMG_3778.JPG' alt='Product image' fill={true} style={{ objectFit: 'cover', objectPosition: 'bottom' }} className='rounded-4xl'/>
                    </div>
                </div>
                <div className='bg-black border-2 border-[#CDCB42] rounded-4xl h-full flex max-w-5xl mx-auto flex-col items-center'>
                    <div className='flex justify-around items-center flex-col w-1/2 p-10 gap-5'>
                        <h2 id='#contactus' className='text-[#836F25] text-4xl font-bold'>Contact us.</h2>
                        <p className='text-white leading-7 text-center'>Questions, comments and feedback? we’d love to hear from you. You can email, call or even come to meet us at our office location. </p>
                    </div>
                    <hr className="h-px border-0 w-full bg-gradient-to-r from-transparent via-[#D9DC75] to-transparent" />
                    <div className='flex items-center h-full justify-around'>
                        <div className='flex flex-col p-10 gap-5'>
                            <h3 className='text-[#CDCB42] text-3xl font-bold text-center'>Give us a call.</h3>
                            <p className='text-white text-center leading-5'>Want to speak to someone? Our Customer Service team are happy to help.</p>
                            <div className='flex items-center justify-center gap-5'>
                                <Image src='/call.png' alt='Call logo' height={20} width={20}/>
                                <p className='text-[#CDCB42] font-bold'>+91 8853646810</p>
                            </div>
                        </div>
                        <div className="w-px h-60 bg-gradient-to-b from-transparent via-[#D9DC75] to-transparent"></div>
                        <div className='flex flex-col p-10 gap-5'>
                            <h3 className='text-[#CDCB42] text-3xl font-bold text-center'>Send us an Email.</h3>
                            <p className='text-white text-center leading-5'>Drop us a note and we’ll get bact to you. Delays may occur in response to any measures. </p>
                            <div className='flex items-center justify-center gap-5'>
                                <Image src='/email.png' alt='Call logo' height={20} width={20}/>
                                <p className='text-[#CDCB42] font-bold'>sattvaattar@gmail.com</p>
                            </div>
                        </div>
                        <div className="w-px h-60 bg-gradient-to-b from-transparent via-[#D9DC75] to-transparent"></div>
                        <div className='flex flex-col p-10 gap-5'>
                            <h3 className='text-[#CDCB42] text-3xl font-bold text-center'>Let’s meet.</h3>
                            <p className='text-white text-center leading-5'>Got questions or ideas? We’d love to hear from you and help bring your vision to life.</p>
                            <div className='flex items-center justify-center gap-5'>
                                <Image src='/location.png' alt='Call logo' height={20} width={20}/>
                                <p className='text-[#CDCB42] font-bold'>12-Street, rishipur kannauj, Uttar Pradesh,India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About