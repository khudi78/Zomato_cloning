import React from "react";
import collections from "../../BigData/Home/collection";
import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

function Collection() {
  return (
    <div>
      <div className="text-4xl mb-2 font-semibold">Collections</div>
      <div className="flex justify-between mb-8 text-lg font-light" >
        <div >
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Agra, based on trends
        </div>
        <NavLink to="/Collections">
         <div className="text-red-600 cursor-pointer flex">
          All collections in Agra
          <FaCaretRight className="mt-2"/></div>
        </NavLink>
        
      </div>

      <div className="flex justify-between">
        {collections.slice(0, 4).map((item) => (
          <div key={item.id} className="relative">
            <img src={item.image.url} alt="" className="rounded-lg brightness-75 h-[310px] w-[263px]"/>
            <div className="absolute top-60 pl-5 text-white">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="flex gap-2">{item.num_places} <FaCaretRight className=" mt-[6px]"/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
