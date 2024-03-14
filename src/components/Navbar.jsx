import React from "react";
import { GiScooter } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { FaWineGlassAlt } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState(null);
  

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
              <input
                type="text"
                className="bg-white border border-1 w-[600px] h-[47px] rounded-lg  ml-5 shadow-lg"
              />
            </div>
          </div>

          <div className="flex mt-2 font-light text-lg gap-10">
            <div onClick={()=>openModal()}>Log In</div>
              <Login isOpen={isModalOpen} onClose={closeModal}/>
              <div onClick={()=>openNextModal()}>Sign Up</div>
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
            <div className="flex text-center gap-2 cursor-pointer ">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 1 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <CiForkAndKnife />
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
            <div className="flex text-center gap-2 cursor-pointer ">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 2 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <GiScooter />
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
            <div className="flex text-center gap-2 cursor-pointer ">
              <div
                className={`border-2  text-2xl p-2 rounded-full ${
                  selectedOption === 3 ? "bg-yellow-400" : "bg-gray-200"
                }`}
              >
                <FaWineGlassAlt />
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

      <div className="h-[1px] bg-gray-200 mb-5  w-[1536px]"></div>
    </div>
  );
}

export default Navbar;
