import React from 'react'
import TopicSlider from './Data/Data/'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Topicslider = ({HandelAdd}) => {
   var settings = {
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
     <>
     {/* main div */}
     <div className=' w-[90%] mx-auto '>
      {/* sun Heading Our Food */}
      <div>
         <h2 className='  text-[#fbc531] text-2xl font-bold py-4'>What's on Your Mind?</h2>
      </div>
      {/* div for map method */}
      <div className='py-18 pb-[100px]'>
      <Slider {...settings}>
        { TopicSlider.map((meal)=>{
              return(
               <div key={meal.id}>
                  <div className='flex justify-center rounded-t-xl'>
                     <img src={meal.Images} className='w-[200px] rounded-full object-cover h-[200px] mix-blend-darken' />
                  </div>
                  <div className='flex justify-center py-2 mx-4 flex-col items-center'>
                 <p className=' font-semibold text-[#e1b12c]'>{meal.price}</p>
                 <button className='bg-black text-white w-[90px] rounded-md my-3 py-[8px] text-[12px] font-semibold hover:text-[#e1b12c]' onClick={HandelAdd}>Add to Cart</button>
                  </div>
                </div>
              )})
            }  
            </Slider>
        </div>
     </div>
     </>
  );
}

export default Topicslider;
