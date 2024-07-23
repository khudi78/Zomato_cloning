import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import Login from '../components/Login';
import Signup from '../components/Signup';

function RightNavbar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModalOpen, setNextModalOpen] = useState(false);
  const { user, logout } = useAuth();

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
      {!user ? (
        <div className='flex gap-10'>
        <div>
        <div onClick={openModal}>Log In</div>
        <Login isOpen={isModalOpen} onClose={closeModal} />
        </div>
         <div>  <div onClick={openNextModal}>Sign Up</div>
         <Signup isOpen={isNextModalOpen} onClose={closeNextModal} /></div> 
        
        </div>
      ) : (
        <>
          <li>
            <span>{user.email}</span>
            <button onClick={logout}>Logout</button>
          </li>
        </>
      )}
    </div>
  );
}

export default RightNavbar;
