import React from "react";


const Aboutus = () => {
  return (
    <>
      <div>
        <div className=" ml-10 mt-[100px] ">
            <p className=" underline decoration-red-600 underline-offset-4 font-semibold">Driving the force of <span className="text-[#c0392b]">assortment
</span></p>
        <div className=" text-[15px] w-[90%]">
            <p>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
        </div>
        </div>
        <div className=" text-[30px] ml-6 font-semibold mt-5">
            <h2><span className=" underline underline-offset-4 text-uner decoration-red-600 ">Who</span> are we?</h2>
        </div>
          
          <div className=" sm:flex items-center ">
            <p className="text-[15px] mt-4 sm:w-[70%] sm:text-[9px] ml-5 mb-16">Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>

            <div className="flex justify-center">
                <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" className=" w-[300px] h-[200px] sm:w-[250px] sm:h-[150px] mb-8 mr-3"  />
            </div>
          </div>
      </div>
    </>
  );
};

export default Aboutus;
