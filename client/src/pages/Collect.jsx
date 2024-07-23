import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Collection from "../components/Home/Collection";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Explore from "../components/Home/Explore"
import collections from "../BigData/Home/collection";
import { FaCaretRight } from "react-icons/fa";

function Collect() {
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setSelectedOption(1);
  }, [1]);
  return (
    <div>
      <div className="flex flex-col  ml-[200px] w-[1100px] ">
        {/* 1st section */}
        <div className="flex flex-row justify-between mb-2 mt-3 ">
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

          <div className="flex mt-2 font-light text-lg gap-10">
            <div onClick={() => openModal()}>Log In</div>
            <Login isOpen={isModalOpen} onClose={closeModal} />
            <div onClick={() => openNextModal()}>Sign Up</div>
            <Signup isOpen={isNextModalOpen} onClose={closeNextModal} />
          </div>
        </div>
        <div className="border border-b-1 border-b-neutral-300 border-white w-[100vw] ml-[-200px] mb-1"></div>
       

        {/* 2nd section */}
        <div className=" font-thin text-sm mb-5 ">
          Home / India / Kochi / Kalamassery / Biryani Restaurants
        </div>

        {/* 3rd section */}
        <div>
          <div className="text-3xl font-semibold">Collections-Agra</div>
          <div className=" text-lg font-thin">Create and browse lists of the finest restaurants</div>
          
        </div>

        {/* 4thsection */}
        <div className="flex flex-row gap-20 text-xl  mt-7">
          <NavLink to="">
            <div onClick={() => handleOptionClick(1)}>
              <div className="flex text-center gap-2 cursor-pointer ">
               
                <div
                  className={`mt-1 font-semibold  ${
                    selectedOption === 1 ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  Handpicked
                </div>
              </div>

              {selectedOption === 1 && (
                <div className="bg-red-500 h-[2px] mt-4 w-[]"></div>
              )}
            </div>
          </NavLink>

          <NavLink to="">
            <div onClick={() => handleOptionClick(2)}>
              <div className="flex text-center gap-2 cursor-pointer ">
                
                <div
                  className={`mt-1 font-semibold  ${
                    selectedOption === 2 ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  Saved Collections
                </div>
              </div>

              {selectedOption === 2 && (
                <div className="bg-red-500 h-[2px] mt-4 w-[]"></div>
              )}
            </div>
          </NavLink>

          
        </div>

        {(selectedOption === 2 ||
          selectedOption === 1) && (
          <div className="h-[1px] bg-gray-200 mb-[17px]   w-[1536px]"></div>
        )}

        {(selectedOption != 2 && selectedOption != 1 ) && (
          <div className="h-[1px] bg-gray-200 mb-5 mt-3  w-[1536px]"></div>
        )}

        {/* 5th section */}
        
        <div className="  mb-[100px]">
        <div className="flex flex-wrap justify-between gap-y-10">
        {collections.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.image.url} alt="" className="rounded-lg brightness-75 h-[310px] w-[263px]"/>
            <div className="absolute top-60 pl-5 text-white">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="flex gap-2">
                {item.num_places}
              <FaCaretRight className=" mt-[6px]"/></div>
            </div>
          </div>
        ))}
      </div>
        </div>


        {/* 6th section */}
        <div className="mb-[-100px]">
        <Explore />
      </div>
        
      </div>
    </div>
  );
}

export default Collect;
