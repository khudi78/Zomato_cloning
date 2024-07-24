import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Delivery from './pages/Delivery';
import Dining from './pages/Dining';
import Nightlife from './pages/Nightlife';
import Collect from './pages/Collect';
import Resto from './pages/Resto';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState({});
  // const [menuItems,setmenuItems] = useState([]);
  const updateCart = (newCartItems) => {
    setCartItems(newCartItems);
  };

  // const MainMenu=(newMenuItems)=>{
  //     setmenuItems(newMenuItems); 
  // }

  return (
    <div className='text-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order Online" element={<Delivery />} />
        <Route path="/Dining" element={<Dining />} />
        <Route path="/Nightlife and Clubs" element={<Nightlife />} />
        <Route path="/Collections" element={<Collect />} />
        <Route path="/Restaurant" element={<Resto updateCart={updateCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
