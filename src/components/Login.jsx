import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Login({ isOpen, onClose }) {
  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay is clicked (not the modal content)
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setColor(!color);
  };


  const [isNextModalOpen, setNextModalOpen] = useState(false);
 
  const openNextModal = () => {
    setNextModalOpen(true);
  };

  const closeNextModal = () => {
    setNextModalOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overlay text-black"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 py-5 rounded shadow-md z-50 w-[450px] h-[500px]">
            {/* Your modal content goes here */}
            <div className="flex justify-between mb-10  ">
              <h1 className="text-3xl font-semibold text-slate-500">Log in</h1>
              <h2 className="mt-3 text-xl cursor-pointer" onClick={onClose}>
                <RxCross2 />
              </h2>
            </div>

            {/* 1st section */}
            <div>
              <div
                className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${
                  color ? " border-2 border-teal-500" : " border-stone-400"
                }`}
                onClick={handleClick}
              >
                <div className="cursor-pointer ml-10 mr-4 ">+91</div>
                <div className="text-2xl mt-[-4px] font-thin ">|</div>
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Phone number"
                    value={inputValue}
                    onChange={handleChange}
                    className={`bg-white px-2 focus:outline-none `}
                  />
                </div>
              </div>
              <div
                className={`border-1 border-gray-200 p-1 py-2 h-12 mb-8 rounded-md text-center ${
                  inputValue.length === 10 ? "bg-red-500" : " bg-stone-300"
                }  text-white font-medium `}
              >
                Send OTP
              </div>
            </div>

            {/* 2nd section */}
            <div className="flex mb-5">
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
              <div className="mt-[-15px] mx-2">or</div>
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
            </div>

            {/* 3rd section */}

            <div>
              <div className="flex text-base font-medium mb-5 rounded-md px-24 cursor-pointer border border-stone-400 p-1 py-3 h-12">
                <MdEmail className=" text-red-500 text-2xl mr-2" />
                Continue with Email
              </div>
              <div className="flex px-24 text-base font-medium border border-stone-400 rounded-md text-center cursor-pointer p-1 py-3 h-12">
                <FcGoogle className="text-2xl mr-2" />
                Sign in with Google
              </div>
            </div>

            <div className="h-[1px] bg-slate-400 mb-2 mt-16 "></div>
            <div className="text-lg">
              New to Zomato?{" "}
              <span className=" text-red-600 cursor-pointer " onClick={()=>openNextModal()}>
                Create account
              </span>
              {/* <Signup isOpen={isNextModalOpen} onClose={closeNextModal}/> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
