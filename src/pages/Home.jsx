import React from "react";
import wine from "../images/wine.jpg";
import Explore from "../components/Home/Explore";
import Localities from "../components/Home/Localities";
import TypeCard from "../components/Home/TypeCard";
import Collection from "../components/Home/Collection";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Home() {
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

            <div className="flex gap-10 ">
              <div>Investor Relations</div>
              <div>Add Restaurant</div>
              <div>Log In</div>
              <div>Sign Up</div>
            </div>
          </div>

          <div className="mt-[100px] text-center">
            <div className="text-8xl font-bold italic">
              <h1>zomato</h1>
            </div>
            <div className="text-4xl mt-3 ">
              <p>Discover the best food & drinks in Agra</p>
            </div>
            <div className="mt-10">
              <input type="search" className="w-[650px] h-[46px] rounded-xl bg-white " name="" id="" />
              <div>
              <FaMapMarkerAlt />
              <IoSearchOutline />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-[60px] ml-[200px] w-[1100px] ">
          <TypeCard/>
      </div>
      </div> 


      <div className="ml-[200px] w-[1100px] mb-[100px]">
        <Collection/>
      </div>


       <div className="ml-[200px] w-[1100px]">
         <Localities/>
       </div>


      <div className="ml-[200px] w-[1100px]">
        <Explore/>
      </div>
    </div>
  );
}

export default Home;
