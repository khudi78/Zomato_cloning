import React from 'react'
import Collection from '../components/Home/Collection'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import resto from '../BigData/Delivery/Restaurants'
function Nightlife() {
  return (
    <div className='mt-[-52px]'>
    <Navbar/>

    <div className="ml-[200px] w-[1100px] ">
    {/* 1st section */}
    <div className='text-3xl  w-[100vw] ml-[-200px] mt-[-20px]  bg-slate-100'>
         <div className='ml-[200px] w-[1100px] py-10'>
         <Collection/>
         </div>
        
     </div>

     {/* 2nd section */}


     {/* 3rd section */}
     <div className="mt-16 text-3xl">
       <h1 className="mb-10">Nightlife Restaurants in Vidya Nagar Colony</h1>
       <div className="flex justify-between flex-wrap gap-y-10  ">
         {resto.map((data) => (
           <div>
             <Card key={data.id} {...data} />
           </div>
         ))}
       </div>
     </div>
     </div>
  </div>
  )
}

export default Nightlife