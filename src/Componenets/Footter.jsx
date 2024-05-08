import React from "react";

const Footter = () => {
  return (
    <>
      <div className=" w-full bg-black text-[#f5f6fa]">
        <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-2  md:grid-cols-4 py-10 pl-6">
          <div>
            <h2 className=" font-bold mt-10  mb-3 text-[20px] md: text[25px]">Yami<span className="text-[#e1b12c]">Food</span></h2>
            <p className="text-[15px] md:text-[17px] mb-2 text-[gray]">© 2024 Bundl Technologies Pvt. Ltd</p>
          </div>
          <div>
            <h2 className=" font-bold mb-3 text-[20px] md: text[25px]">
              Company
            </h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">About</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Careers</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Team</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Swiggy One</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Swiggy Instamart</p>
            <p className="md:text-[20px] mb-2 text-[gray]">Swiggy Genie</p>
          </div>
          <div>
            <h2 className=" font-bold mb-3 text-[20px] md: text[25px]">Contact us</h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Help & Support</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Partner with us</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Ride with us</p>
          </div>
          <div >
            <h2 className=" font-bold mb-3 text-[20px] md: text[25px]">We deliver to</h2>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Bangalore</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Gurgaon</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Hyderabad</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Delhi</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">Mumbai</p>
            <p className="text-[15px] md:text-[20px] mb-2 text-[gray]">pune</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footter;
