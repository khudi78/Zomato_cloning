import React, { useMemo } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import resto from "../BigData/Delivery/Restaurants";
import Navbar from "../components/Navbar";

function Cart({ cartItems }) {
  
  const quantities = Object.values(cartItems);

  console.log("cartItem ",cartItems);
  const cartDetails = useMemo(() => {
    // Convert resto into a lookup map for faster access
    const restoMap = resto.reduce((map, item) => {
      item.menus.forEach((menu) => {
        menu.menu.items.forEach((menuItem) => {
          map[menuItem.item.id] = {
            ...menuItem.item,
            parentRestaurantId: item.id, // If you need the parent restaurant's id
            parentRestaurantName: item.name, // If you need the parent restaurant's name
          };
        });
      });
      return map;
    }, {});

    console.log("heyyyyyy",restoMap);
    // Map over cartItems and merge details from resto
    return Object.keys(cartItems).map((itemId) => {
      const cartItem = cartItems[itemId];
      const restoItem = restoMap[itemId];

      if (!restoItem) {
        // If no matching item in resto, return null or handle as needed
        return null;
      }

      return {
        id: itemId,
        name: restoItem.name,
        price: restoItem.price,
        quantity: cartItem,
        item_image_thumb_url: restoItem.item_image_thumb_url
      };
    }).filter(item => item !== null); // Filter out null items if any
  }, [cartItems, resto]);

  console.log("heooo",cartDetails);

  const totalBill = cartDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-[-75px]">
      <Navbar />
      <div className="flex flex-col  ml-[200px] w-[1100px] ">
      <h2 className="text-3xl font-bold mb-10">Cart</h2>
      {cartDetails.map((item) => (
        <div className="">
              <div className="flex gap-5 mb-8 mt-10" key={item.id}>
          <div>
            <img
              src={item.item_image_thumb_url}
              alt=""
              className="h-[140px] rounded-xl"
            />
          </div>
          <div className="text-base font-light pt-3 text-gray-500">
            <div className="text-xl font-normal text-black">{item.name}</div>
            <div className="flex text-gray-500">
              <LiaRupeeSignSolid className="text-base mt-[6px]" />
              <div>{item.price}</div>
            </div>
            <div>Quantity: {item.quantity}</div>
          </div>
        </div>
        <div className="w-[1100 px] h-[1px]  bg-slate-300"></div>

        </div>
    
       
        
      ))}
      <div className="text-2xl font-semibold mt-20">Total Bill: {totalBill}</div>
      </div>
      
    </div>
  );
}

export default Cart;
