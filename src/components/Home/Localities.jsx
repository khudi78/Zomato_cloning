import React, { useState } from "react";
import localities from "../../BigData/Home/loacalities";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Localities() {
  const [showmore, setShowMore] = useState(false);

  const onShowHandle=()=>{
    console.log(showmore)
    setShowMore(!showmore)
  }

  return (
    <div className="text-black mb-20">
      <h1 className="text-4xl mb-8 font-semibold">
        Popular loacalities in and around <span>Agra</span>
      </h1>
      <div className="flex flex-wrap gap-x-10 gap-y-7 ">
        {
          showmore ?
          (
            localities
            .map((items) => (
                <NavLink to="/Dining">
                  <div
                    key={items.id}
                    className="flex flex-row pt-3 pl-5 pr-5 justify-between h-[79px] w-[340px] border rounded-lg shadow-md hover:shadow-lg hover:text-black cursor-pointer"
                  >
                    <div>
                      <div className="text-xl">{items.name}</div>
                      <div className="font-light">{items.count} places</div>
                    </div>
                    <FaChevronRight className="mt-5" />
                  </div>
                </NavLink>
              ))
          )
          :
          (
            localities.slice(0,5)
              .map((items) => (
                <NavLink to="/Dining">
                  <div
                    key={items.id}
                    className="flex flex-row pt-3 pl-5 pr-5 justify-between h-[79px] w-[340px] border rounded-lg shadow-md hover:shadow-lg hover:text-black cursor-pointer"
                  >
                    <div>
                      <div className="text-xl">{items.name}</div>
                      <div className="font-light">{items.count} places</div>
                    </div>
                    <FaChevronRight className="mt-5" />
                  </div>
                </NavLink>
              ))
          )
        }
        

        <div
         
          className="flex flex-row pt-3 gap-3 pl-5 pr-5 h-[79px] w-[340px] border rounded-lg shadow-md hover:shadow-lg hover:text-black cursor-pointer"
          onClick={onShowHandle}
        >
          <div>
            <div className="text-xl ml-20 mt-3">
              {
              showmore?
              (
                <div className="flex gap-3">
                  <div>see less</div>
                  <FaChevronUp className="mt-[7px]"/>
                </div>
                
              ):
              (
                <div className="flex gap-3">
                  <div>see more</div>
                  <FaChevronDown className="mt-[7px]"/>
                </div>
                
                
              )
              }
              </div>
            
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Localities;
