import React from 'react'
import data from '../../BigData/Home/data'
import { FaChevronDown } from "react-icons/fa";

function Explore() {
  return (
    <div className='text-black mb-24'>
      <h1 className='text-4xl mb-8 font-semibold'>Explore options near me</h1>
      <div className='flex flex-col gap-y-5'>
         {
            data.map((item)=>
            <div key={item.id} className='flex flex-row cursor-pointer justify-between border text-slate-600 border-neutral-300 h-[60px] rounded-lg pl-8 p-4 text-lg'>
              {item.title}
                <FaChevronDown  className='mt-2 mr-5'/>
                </div>
            )
         }
      </div>
    </div>
  )
}

export default Explore;
