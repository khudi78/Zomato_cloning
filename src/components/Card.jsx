import React from "react";
import { FaStar } from "react-icons/fa";
import Resto from "../pages/Resto";
//import { useHistory } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Card({ option, ...data }) {
  const truncatedText = data.info.name.slice(0, 24);
  console.log("id",data.id)

  return (
    <div className="w-[350px] border-2 border-white hover:border-slate-200 hover:rounded-2xl hover:shadow-lg" >
        {/* <NavLink
                 to={`/Restaurant?name=${data.name}&id=${data.id}`}
                >   */}
      <div className="p-2 hover:text-black" >
        <div>
          <img
            src={data.info.image.url}
            alt=""
            className="h-[300px] w-[340px] rounded-2xl mb-4"
          />
        </div>

        <div className="flex justify-between text-xl ">
          <div className="  ">{truncatedText}...</div>
          <div className=" flex text-sm gap-1 bg-lime-700 text-white rounded-md w-13 h-6 px-1">
            {data.info.rating.rating_text}
            <FaStar className="mt-1" />
          </div>
        </div>

        <div className="flex text-[17px] font-light justify-between">
          <div className="flex">
            {data.info.cuisine.reduce((accumulator, item) => {
              if (accumulator.length < 20) {
                const remainingLength = 20 - accumulator.length;
                const truncatedItemName = item.name.slice(0, remainingLength);
                return accumulator + truncatedItemName +",";
              } else {
                return accumulator;
              }
            }, "")}...
          </div>
          <div>{data.info.cfo.text}</div>
        </div>

        <div className="flex justify-between text-sm">
          <div className="text-slate-500">
          {(option === 1 || option=== 3) && data.info.locality.name}
          </div>
          <div>
          {option === 2 && data.order.deliveryTime}
          {(option === 1 || option=== 3) && data.distance}
          </div>
        
        </div>

        {/* <div className="h-[1px] bg-slate-300 mt-2"></div> */}
      </div>
      {/* </NavLink>   */}
    </div>
  );
}

export default Card;
