import React from 'react'
import localities from '../../BigData/Home/loacalities'
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Localities() {
  return (
    <div className='text-black mb-20'>
        <h1 className='text-4xl mb-8 font-semibold'>Popular loacalities in and around <span>Agra</span></h1>
       <div className='flex flex-wrap gap-x-10 gap-y-7 '>
        {
            localities.map((items)=>
            <NavLink to="/Dining">
                <div key={items.id} className='flex flex-row pt-3 pl-5 pr-5 justify-between h-[79px] w-[340px] border rounded-lg shadow-md hover:shadow-lg hover:text-black cursor-pointer'>
                <div>
                   <div className='text-xl'>{items.name}</div>
                   <div className='font-light'>{items.count} places</div>
                </div>
                <FaChevronRight  className='mt-5'/>

               
            </div>
            </NavLink>
            
            )
        }
       </div>
    </div>
  )
}

export default Localities
