import React, { useState } from "react";
import wine from "../images/wine.jpg";
import Explore from "../components/Home/Explore";
import Localities from "../components/Home/Localities";
import TypeCard from "../components/Home/TypeCard";
import Collection from "../components/Home/Collection";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import {useAuth} from '../AuthContext'
import RightNavbar from "../components/RightNavbar";


function Home() {
  

  const handleClick = (e) => {
    e.preventDefault();
    // Additional logic if needed
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="">
      <div className="relative h-screen text-white mb-[120px] ">
        <img
          src={wine}
          alt=""
          className=" top-0  w-[1536px] h-2/3 object-cover brightness-50 "
        />
        <div className="absolute text-xl font-light top-5 w-[1100px] ml-[200px] items-center ">
          <div className="flex justify-between">
            <div>Get the App</div>

            <div className="flex gap-10 text-white cursor-pointer">
              <div>Investor Relations</div>
              <div>Add Restaurant</div>
             
              <div><RightNavbar></RightNavbar> </div>
            </div>
          </div>

          <div className="mt-[100px] text-center">
            <div className="text-8xl font-bold italic">
              <h1>zomato</h1>
            </div>
            <div className="text-4xl mt-3 ">
              <p>Discover the best food & drinks in Agra</p>
            </div>
            <div className="flex mt-10 mx-[150px] w-[800px] h-[50px] rounded-xl bg-white p-2 py-3">
              <div className="flex gap-1 w-[200px]">
                <FaMapMarkerAlt className="mt-1 text-red-500" />
                <h1 className=" text-base text-slate-500">
                  Mizoram,house,vidya...
                </h1>
                <IoMdArrowDropdown className="text-black mt-1 " />
              </div>
              <div className="text-slate-500 px-1 ml-2 mt-[-3px]">|</div>
              <div className="flex">
                <IoSearchOutline className="text-black mt-[5px] ml-2" />
                <input
                  type="search"
                  className="focus:outline-none text-slate-500 text-base w-[540px] rounded-r-xl mt-[-9px]  h-[46px] bg-white px-3 "
                  placeholder="Search for restaurant , cuisine , or a dish"
                  name=""
                  id=""
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="mt-[60px] ml-[200px] w-[1100px] ">
          <TypeCard />
        </div>
      </div>

      <div className="ml-[200px] w-[1100px] mb-[100px]">
        <Collection onClick={handleClick}/>
      </div>

      <div className="ml-[200px] w-[1100px]">
        <Localities />
      </div>

      <div className="ml-[200px] w-[1100px]">
        <Explore />
      </div>
    </div>
  );
}

export default Home;
