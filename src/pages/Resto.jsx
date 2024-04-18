import React from "react";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
//import { withRouter } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import resto from "../BigData/Delivery/Restaurants";

function Resto() {
    // const location = useLocation();
    // const restaurantData = location.state;
  
    // console.log("location state", restaurantData);

    // console.log("Location object after navigating:", window.location);
    
    // console.log("Location:", location);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    console.log("Location:", location);

     const element = resto.find(object => object.id === id);
     console.log("element : ",element)

  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModalOpen, setNextModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openNextModal = () => {
    setNextModalOpen(true);
  };

  const closeNextModal = () => {
    setNextModalOpen(false);
  };
  return (
    <div className="mt-[-76px]">

     {/* 1st section */}
      <div className="flex flex-col  ml-[200px] w-[1100px] ">
        {/* 1st section */}
        <div className="flex flex-row justify-between mb-8 mt-20">
          <div className="flex">
            <NavLink to="/">
              <div className="italic text-black font-extrabold text-5xl">
                zomato
              </div>
            </NavLink>
            <div>
              <div className="flex border border-1 mt-1  ml-5 shadow-lg mx-[150px] w-[600px] h-[50px] rounded-xl bg-white p-2 py-3">
                <div className="flex gap-1 w-[200px]">
                  <FaMapMarkerAlt className="mt-[5px] text-red-500" />
                  <h1 className=" text-base text-slate-500">
                    Mizoram,house,vidya...
                  </h1>
                  <IoMdArrowDropdown className="text-black mt-1 " />
                </div>
                <div className="text-slate-500 px-1 ml-2 mt-[-3px]">|</div>
                <div className="flex">
                  <IoSearchOutline className="text-black mt-[6px] ml-2" />
                  <input
                    type="search"
                    className="focus:outline-none text-slate-500 text-base w-[340px] rounded-r-xl mt-[-10px]  h-[46px] bg-white px-3 "
                    placeholder="Search for restaurant , cuisine , or a dish"
                    name=""
                    id=""
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="flex mt-2 font-light text-lg gap-10 text-slate-600 ">
            <div
              onClick={() => openModal()}
              className="cursor-pointer hover:text-slate-950"
            >
              Log In
            </div>
            <Login isOpen={isModalOpen} onClose={closeModal} />
            <div
              onClick={() => openNextModal()}
              className="cursor-pointer hover:text-slate-950"
            >
              Sign Up
            </div>
            <Signup isOpen={isNextModalOpen} onClose={closeNextModal} />
          </div>
        </div>

        {/* 2nd section */}
        <div className=" font-thin text-sm mb-[5px] ">
          Home / India / Kochi / Kalamassery / Biryani Restaurants 
        </div>
      </div>

       <div className="h-[1px] bg-gray-200 mb-[17px]   w-[1536px]"></div>
     

     
       buffalo   


      {/* 2nd section */}
      <div className="flex flex-col  ml-[200px] w-[1100px] ">
           hello
           {element.info.locality.name}
          

      </div>
    </div>
  );
}

export default Resto;
