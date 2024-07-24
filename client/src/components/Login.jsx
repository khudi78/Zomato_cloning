import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Import the custom hook

function Login({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState(""); // Email
  const [otpValue, setOtpValue] = useState(""); // OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // OTP sent state
  const [buttonText, setButtonText] = useState("Send OTP"); // Button text

  const { login } = useAuth(); // Destructure the login function from context

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtpValue(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/send-otp', { email: inputValue });
      alert(res.data.message);
      setIsOtpSent(true);
      setButtonText("Verify OTP");
    } catch (err) {
      console.error('Error sending OTP:', err);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/auth/verify-otp', { email: inputValue, otp: otpValue });
      console.log('Response:', res.data);
      alert('Login successful');
      login({ email: inputValue }); // Pass user data to the context
      onClose(); // Close modal on successful login
    } catch (err) {
      console.error('Error verifying OTP:', err);
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleButtonClick = () => {
    if (buttonText === "Send OTP") {
      handleSendOtp();
    } else {
      handleVerifyOtp();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overlay text-black"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 py-5 rounded shadow-md z-50 w-[450px] h-[500px]">
            <div className="flex justify-between mb-10">
              <h1 className="text-3xl font-semibold text-slate-500">Log in</h1>
              <h2 className="mt-3 text-xl cursor-pointer" onClick={onClose}>
                <RxCross2 />
              </h2>
            </div>

            <div>
              <div
                className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${
                  inputValue ? "border-teal-500" : "border-stone-400"
                }`}
              >
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Email"
                    value={inputValue}
                    onChange={handleChange}
                    className={`bg-white px-2 focus:outline-none w-full`}
                  />
                </div>
              </div>

              {isOtpSent && (
                <div
                  className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${
                    otpValue ? "border-teal-500" : "border-stone-400"
                  }`}
                >
                  <div className=" ">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otpValue}
                      onChange={handleOtpChange}
                      className={`bg-white px-2 focus:outline-none w-full`}
                    />
                  </div>
                </div>
              )}

              <div
                className={`border-1 border-gray-200 p-1 py-2 h-12 mb-8 rounded-md text-center ${
                  (isOtpSent && otpValue.length > 0) || (!isOtpSent && inputValue.length > 0) ? "bg-red-500" : "bg-stone-300"
                } text-white font-medium`}
                onClick={handleButtonClick}
              >
                {buttonText}
              </div>
            </div>

            <div className="flex mb-5">
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
              <div className="mt-[-15px] mx-2">or</div>
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
            </div>

            <div>
              <div className="flex text-base font-medium mb-5 rounded-md px-24 cursor-pointer border border-stone-400 p-1 py-3 h-12">
                <MdEmail className="text-red-500 text-2xl mr-2" />
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
              <span className="text-red-600 cursor-pointer" onClick={() => openNextModal()}>
                Create account
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
