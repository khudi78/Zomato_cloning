import React from "react";
import items from "../../BigData/Home/type";
import { NavLink } from "react-router-dom";



function TypeCard() {
  return (
    <div>
      <div className="flex justify-between">
        {items.map((item) => (
          <NavLink to={`/${item.title}`}>
               <div key={item.id} className="relative hover:scale-110 hover:cursor-pointer hover:duration-500 ">
            <img
              src={item.img}
              alt=""
              className="h-[220px] w-[480px] rounded-xl border border-neutral-300"
            />
            <div className="absolute top-36 bg-white w-[480px] h-[78px] rounded-b-xl border border-l-1 border-r-1 border-b-1 border-neutral-300 pl-6 pt-2">
              <div className="text-lg font-semibold text-black ">
                {item.title}
              </div>
              <div className="text-md font-light text-black ">{item.subtitle}</div>
            </div>
          </div>
          </NavLink>
         
        ))}
      </div>

    </div>
  );
}

export default TypeCard;
