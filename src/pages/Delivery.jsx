import React from "react";
import Navbar from "../components/Navbar";
import inspiration from "../BigData/Delivery/Inspiration";
import brand from "../BigData/Delivery/Brand";
import resto from "../BigData/Delivery/Restaurants";
import Card from "../components/Card";

function Delivery() {
  return (
    <div className="mt-[-52px]">
      <Navbar />

      <div className="ml-[200px] w-[1100px] ">
        {/* 1st section */}
        <div className="text-3xl  w-[100vw] ml-[-200px] bg-slate-100">
          <div className="ml-[200px] w-[1100px] py-10">
            <h1 className="mb-10 ">Inspiration for your first order</h1>
            <div className="flex justify-between text-center w-[1100px]">
              {inspiration.map((data) => (
                <div key={data.id}>
                  <div className="">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-36 h-36"
                    />
                  </div>
                  <div className="text-xl mt-3">{data.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="mt-10 text-3xl">
          <h1 className="mb-10">Top brands for you</h1>
          <div className="flex justify-between ">
            {brand.slice(0, 6).map((data) => (
              <div key={data.id} className="w-[300px] text-center">
                <div className="">
                  <img
                    src={data.info.image.url}
                    alt=""
                    className="rounded-full mx-auto w-36 h-36 shadow-xl"
                  />
                </div>
                <div className="text-lg font-semibold mt-5 ml-5">
                  {data.info.name}
                </div>
                <div className="font-light text-base mt-1 ">
                  {data.order.deliveryTime}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3rd div */}
        <div className="mt-16 text-3xl">
          <h1 className="mb-10">Order food online in Vidya Nagar Colony</h1>
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
  );
}

export default Delivery;
