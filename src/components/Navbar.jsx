import React from "react";
import { GiScooter } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { FaWineGlassAlt } from "react-icons/fa";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


function Navbar({select}) {
  const [selectedOption, setSelectedOption] = useState(null);
  
  useEffect(() => {
    setSelectedOption(select);
  }, [select]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

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
    <div>
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
            <div onClick={()=>openModal()} className="cursor-pointer hover:text-slate-950">Log In</div>
              <Login isOpen={isModalOpen} onClose={closeModal}/>
              <div onClick={()=>openNextModal()} className="cursor-pointer hover:text-slate-950">Sign Up</div>
              <Signup isOpen={isNextModalOpen} onClose={closeNextModal}/>
          </div>
        </div>

        {/* 2nd section */}
        <div className=" font-thin text-sm mb-5 ">
          Home / India / Kochi / Kalamassery / Biryani Restaurants
        </div>

        {/* 3rd section */}
        <div className="flex flex-row gap-20 text-xl  ">

          <NavLink to="/Dining">
          <div onClick={() => handleOptionClick(1)}>
            <div className="flex text-center gap-2 cursor-pointer hover:text-black">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 1 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <CiForkAndKnife className="hover:text-black"/>
              </div>
              <div
                className={`mt-1 font-semibold  ${
                  selectedOption === 1 ? "text-red-500" : "text-gray-500"
                }`}
              >
                Dining Out
              </div>
            </div>

            {selectedOption === 1 && (
              <div className="bg-red-500 h-[2px] mt-4 w-[]"></div>
            )}
          </div>
          </NavLink>
          
        <NavLink to="/Order Online">
        <div onClick={() => handleOptionClick(2)}>
            <div className="flex text-center gap-2 cursor-pointer hover:text-black">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 2 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <GiScooter className="hover:text-black"/>
              </div>
              <div
                className={`mt-1 font-semibold  ${
                  selectedOption === 2 ? "text-red-500" : "text-gray-500"
                }`}
              >
                Delivery
              </div>
            </div>

            {selectedOption === 2 && (
              <div className="bg-red-500 h-[2px] mt-4 w-[]"></div>
            )}
          </div>
        </NavLink>
          
    
        <NavLink to="/Nightlife and Clubs">
        <div onClick={() => handleOptionClick(3)}>
            <div className="flex text-center gap-2 cursor-pointer hover:text-black">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 3 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <FaWineGlassAlt className="hover:text-black"/>
              </div>
              <div
                className={`mt-1 font-semibold  ${
                  selectedOption === 3 ? "text-red-500" : "text-gray-500"
                }`}
              >
                Nightlife
              </div>
            </div>

            {selectedOption === 3 && (
              <div className="bg-red-500 h-[2px] mt-4 w-[]"></div>
            )}
          </div>
        </NavLink>
          
        </div>
      </div>

      {(selectedOption === 2 || selectedOption === 3 || selectedOption === 1) && (
              <div className="h-[1px] bg-gray-200 mb-[17px]   w-[1536px]"></div>
            )}

{selectedOption != 2 &&selectedOption != 1 && selectedOption != 3 && (
              <div className="h-[1px] bg-gray-200 mb-5 mt-3  w-[1536px]"></div>
            )}
      
    </div>
  );
}

export default Navbar;
