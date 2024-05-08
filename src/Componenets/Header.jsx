import React from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {Link } from "react-router-dom";

const Header = ({count}) => {

    const[sidenav, setSidenav]=useState(false)
  
    return (
        // main div
      <div className=" fixed  w-full z-50 bg-white top-0 left-0">
    <div className=" flex py-[15px] px-[25px] justify-between font-semibold bg- text-[18px] [#dcdde1] border-b drop-shadow relative">
        {/* div for logo */}
      <div className=" cursor-pointer">
        <Link to="/">
        <p>
          Yami<span className="text-[#dfad22] cursor-pointer">Food</span>
        </p>
        </Link>
      </div>
        {/* menue */}
      <div>
        <ul className="sm:flex gap-6 hidden">
           <Link to="/">
          <li className=" cursor-pointer hover:text-[#e1b12c]">All</li>
          </Link> 
          <Link to="/aboutus">
          <li className=" cursor-pointer hover:text-[#e1b12c]">About</li>
          </Link>
          <Link to="/ourfood">
          <li className=" cursor-pointer hover:text-[#e1b12c]">OurFood</li></Link>
          <Link to="/signIn">
          <li className=" cursor-pointer hover:text-[#e1b12c]">SignIn</li>
          </Link>
        </ul>
      </div>

      {/* responsive menue */}
      {
        sidenav?(
            <div className="bg-[#dcdde1] w-[250px] absolute top-0 right-0 flex justify-center items-center h-[100vh] z-50 ">
      <RxCross2 className=" absolute top-2 right-2 text-[25px] cursor-pointer hover:text-[#e1b12c] " onClick={()=>setSidenav(!sidenav)} />

        <ul className="flex gap-12 flex-col  ">

           <Link to="/">
          <li className=" cursor-pointer hover:text-[#e1b12c]"onClick={()=>setSidenav(!sidenav)}>All</li>
          </Link> 
          <Link to="/aboutus">
          <li className=" cursor-pointer hover:text-[#e1b12c]"onClick={()=>setSidenav(!sidenav)}>About</li>
          </Link>
          <Link to="/ourfood">
          <li className=" cursor-pointer hover:text-[#e1b12c]"onClick={()=>setSidenav(!sidenav)}>OurFood</li></Link>
          <Link to="/signIn">
          <li className=" cursor-pointer hover:text-[#e1b12c]"onClick={()=>setSidenav(!sidenav)}>SignIn</li>
          </Link>

        </ul>
      </div> 
        ) : (
         ""
        )}
      {/* cart logo */}
      <div className="flex items-center gap-[20px] text=[25px] hover:cursor-pointer">
        {/* humbarger */}
        <div>
        <span className="text-[25px]  block sm:hidden "> <RxHamburgerMenu onClick={()=>setSidenav(!sidenav)} /></span>
        </div>
        {/* cart */}
        <p className=" text-[25px] flex" >
          {count}
          <FaCartShopping />
          </p>
       
      </div>
    </div>
    </div>
  );
};

export default Header;



