import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import Login from "./Login";
import axios from 'axios';

function Signup({ isOpen, onClose }) {
  const [inputValue, setInputValue] = useState(""); // Name
  const [secInputValue, setSecInputValue] = useState(""); // Email
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  const validateForm = () => {
    // Simple validation: Full Name and Email should not be empty and email should be valid
    setInputValid(inputValue.length > 2 && secInputValue.includes('@'));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    validateForm();
  };

  const handleSecChange = (e) => {
    setSecInputValue(e.target.value);
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send both name and email to the backend
      console.log(inputValue,secInputValue);
      const res = await axios.post('http://localhost:8000/api/auth/register', { name: inputValue, email: secInputValue });
      console.log(res.data);
      alert(res.data.message);
      // Handle successful registration, such as redirecting to login
      onClose(); // Close modal on successful registration
    } catch (err) {
      console.log('Error occurred:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
    
      console.error(err);
    } finally {
      setIsSubmitting(false);
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
              <h1 className="text-3xl font-semibold text-slate-500">Sign Up</h1>
              <h2 className="mt-3 text-xl cursor-pointer" onClick={onClose}>
                <RxCross2 />
              </h2>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              <div>
                <div
                  className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${inputValue ? "border-teal-500" : "border-stone-400"}`}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={inputValue}
                    onChange={handleChange}
                    className="bg-white px-2 focus:outline-none w-full"
                  />
                </div>
                <div
                  className={`flex border p-1 py-2 h-12 mb-3 rounded-md ${secInputValue ? "border-teal-500" : "border-stone-400"}`}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    value={secInputValue}
                    onChange={handleSecChange}
                    className="bg-white px-2 focus:outline-none w-full"
                  />
                </div>
              </div>

              {error && <p className="text-red-600 mb-2">{error}</p>}

              <div className="flex gap-3 mb-3">
                <input
                  type="checkbox"
                  className="mt-[-5px]"
                  checked={inputValid}
                  readOnly
                />
                <div className="text-sm mt-2">
                  I agree to Zomato's{" "}
                  <span className="text-red-600 cursor-pointer">
                    Terms of Service, Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="text-red-600 cursor-pointer">
                    Content Policies
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                className={`border-1 border-gray-200 p-1 py-2 h-12 mb-6 rounded-md text-center ${
                  inputValid ? "bg-red-500" : "bg-stone-300"
                } text-white font-medium`}
                disabled={!inputValid || isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Create Account'}
              </button>
            </form>

            <div className="flex mb-4">
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
              <div className="mt-[-15px] mx-2">or</div>
              <div className="h-[1px] bg-slate-400 w-[204px]"></div>
            </div>

            <div>
              <div className="flex px-24 text-base font-medium border border-stone-400 rounded-md text-center cursor-pointer p-1 py-3 h-12">
                <FcGoogle className="text-2xl mr-2" />
                Sign in with Google
              </div>
            </div>

            <div className="h-[1px] bg-slate-400 mb-2 mt-6"></div>
            <div className="text-lg">
              Already have an account?{" "}
              <span className="text-red-600 cursor-pointer" onClick={() => setModalOpen(true)}>Log in</span>
              <Login isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
