import React from 'react'
import Topicslider from './Data/Data'

const Ourfood = ({HandelAdd}) => {
  return (
    <>
       <div className='w-[90%] mx-auto'>
           <div>
               <h2 className='text-center font-bold text-4xl text-[#e1b12c]'>Our Food</h2>
           </div>
           
           <div className='grid grid-cols-1 sm:grid-cols-4 w-full mt-6'>
             {Topicslider.map((meal,i)=>{
                    return(
                        <div key={i}>
                      <div className='flex justify-center flex-col items-center '>
                           <div className='mt-4'>
                            <img src={meal.Images} className='w-[200px]  object-cover h-[200px] mix-blend-darken'/>
                           </div>

                           <div>
                                <p className='text-center font-semibold text-[#e1b12c]'>{meal.price}</p>

                                <div>
                                <button className='bg-black text-white w-[90px] rounded-md my-3 py-[8px] text-[12px] font-semibold hover:text-[#e1b12c]' onClick={HandelAdd}>Add to Cart</button>
                                </div>
                           </div>
                      </div>
                      </div>
                    )
                  })
             }
           </div>
            </div>
      

    </>
  )
}

export default Ourfood
