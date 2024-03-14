import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Signup({ isOpen, onClose }) {
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

  const [secinputValue, setSecInputValue] = useState("");
  const [seccolor, setSecColor] = useState(false);

  const handleSecChange = (e) => {
    setSecInputValue(e.target.value);
  };

  const handleSecClick = () => {
    setSecColor(!seccolor);
  };

  const [input, setInput] = useState(false);
  

  const Change = (e) => {
    setInput(!input);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overlay"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 py-5 rounded shadow-md z-50 w-[450px] h-[500px]">
            {/* Your modal content goes here */}
            <div className="flex justify-between mb-10  ">
              <h1 className="text-3xl font-semibold text-slate-500">Sign Up</h1>
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
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={inputValue}
                    onChange={handleChange}
                    className={`bg-white px-2 focus:outline-none `}
                  />
                </div>
              </div>
              <div
                className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${
                  seccolor ? " border-2 border-teal-500" : " border-stone-400"
                }`}
                onClick={handleSecClick}
              >
                <div className=" ">
                  <input
                    type="email"
                    placeholder="Email"
                    value={secinputValue}
                    onChange={handleSecChange}
                    className={`bg-white px-2 focus:outline-none `}
                  />
                </div>
              </div>
            </div>

            {/* 2nd section */}
            <div>
              <div className="flex gap-3 mb-3">
                <input type="checkbox" className="mt-[-5px] "  value={input}
                    onChange={Change}/>
                <div className="text-sm mt-2">
                  I agree to Zomato's{" "}
                  <span className=" text-red-600 cursor-pointer ">
                    Terms of Service ,Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className=" text-red-600 cursor-pointer ">
                    Content Policies
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={`border-1 border-gray-200 p-1 py-2 h-12 mb-6 rounded-md text-center ${
                    (inputValue.length>=2 && secinputValue.length>=2 &&input)? "bg-red-500" : " bg-stone-300"
                  }     text-white font-medium `}
                >
                  Create account
                </div>
              </div>
            </div>

            {/* 3rd section */}
            <div className="flex mb-4">
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
              <div className="mt-[-15px] mx-2">or</div>
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
            </div>

            {/* 4th section */}

            <div>
              <div className="flex px-24 text-base font-medium border border-stone-400 rounded-md text-center cursor-pointer p-1 py-3 h-12">
                <FcGoogle className="text-2xl mr-2" />
                Sign in with Google
              </div>
            </div>

            <div className="h-[1px] "></div>
            <div className="h-[1px] bg-slate-400 mb-2 mt-6"></div>
            <div>
              Already have an account?{" "}
              <span className=" text-red-600 cursor-pointer ">Log in</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
