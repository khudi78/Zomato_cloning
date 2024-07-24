import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { NavLink, useNavigate } from 'react-router-dom';

function RightNavbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModalOpen, setNextModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      {!user ? (
        <div className='flex gap-10 text-xl mt-[10px] '>
          <div>
            <div onClick={openModal}>Log In</div>
            <Login isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div>
            <div onClick={openNextModal}>Sign Up</div>
            <Signup isOpen={isNextModalOpen} onClose={closeNextModal} />
          </div>
        </div>
      ) : (
        <div className='flex gap-10 text-xl mt-[10px]  '>
          <NavLink to="/cart"><span className='hover:text-black  '>Cart</span></NavLink>
          <span onClick={handleLogout} className=' cursor-pointer hover:text-black'>LogOut</span>
        </div>
      )}
    </div>
  );
}

export default RightNavbar;
