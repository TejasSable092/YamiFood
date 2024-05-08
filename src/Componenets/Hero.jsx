import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const Hero = () => {
  const imgData = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/Netflixapp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/Netflixapp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/Netflixapp/ric_a4ewxo.jpg",
    },
  ];
  const [slider, setSlider]=useState(0);
   
  const handelpulse=()=>{
    setSlider(slider== imgData.length-1?0:slider+1);
  }
  const handelminus=()=>{
    setSlider(slider==0?imgData.length-1:slider-1);
  }

  useEffect(()=>{
  const slideclear=  setInterval(()=>{
        handelpulse();
    },2000)
    return()=>clearInterval(slideclear) 
  },[slider])

  return (
    <>
    <div>
        {/* imgages */}
        <div className=" w-[90%] h-[80vh] mt-[100px] mx-auto ">
      {
          imgData.map((item, i)=>(
         <div key={i} className={`${slider ===i? "blcok":"hidden"}`}>
         <img src={item.url} className=" w-full h-[80vh] rounded-[5px] object-cover sm:brightness-[0.5] " />
       </div>
          ))
      }
      </div>
   
       {/* leftright btn */}
       <div className="flex absolute top-[70%] justify-center text-[#f5f6fa] text-[13px] flex-wrap md:text-[17px] text-center w-full  font-semibold " >
        <p>welcome to Yami<span className="text-[#e1b12c]">Food</span> The world of Test & Fresh Food</p>
       </div>

       <div className="flex justify-between w-full px-12 absolute top-[70%] text-[#f5f6fa] ">
          <FaChevronLeft size={25} className=" cursor-pointer hover:text-[#e1b12c]" onClick={handelpulse} />
       <FaChevronRight size={25} className=" cursor-pointer hover:text-[#e1b12c]" onClick={handelminus} />
       </div>

    </div>
    </>
  );
};

export default Hero;
