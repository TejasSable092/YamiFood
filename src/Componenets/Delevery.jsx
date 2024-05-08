import React from 'react'

const Delevery = () => {
  return (
      <>
        <div className=' w-full py-16 px-4'>
            {/* sub heading  */}
            <h3 className=' text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App</h3>
            {/* Phoen Img */}
            <div className=' grid grid-cols-2 w-[70%] mx-auto my-10'>
                <img className=' w-[350px]' src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/Netflixapp/Fc_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" />
            {/* Food Text */}
            <div className=' flex justify-center flex-col  pl-10  '>
                <p className=' font-bold text-[green] sm:text-2xl md:text-3xl lg:text-4xl '>Get The App</p>
                <h2 
                className=' sm:text-2xl md:text-3xl lg:text-4xl '>The Fastest Food Delivery In India</h2>
                <button className='bg-black text-white w-[100px] rounded-md my-3 py-[12px] text-[12px] font-semibold hover:text-[#e1b12c]'>Get Started</button>
            </div>
            </div>
        </div>
      </>

      
  )
}

export default Delevery
