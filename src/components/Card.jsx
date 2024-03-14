import React from "react";
import { FaStar } from "react-icons/fa";

function Card(data) {
  const truncatedText = data.info.name.slice(0, 24);
  return (
    <div className="w-[350px] border-2 border-white hover:border-slate-200 hover:rounded-2xl hover:shadow-lg">
      <div className="p-2 ">
        <div>
          <img
            src={data.info.image.url}
            alt=""
            className="h-[300px] w-[340px] rounded-2xl mb-4"
          />
        </div>

        <div className="flex justify-between text-xl ">
          <div>{truncatedText}...</div>
          <div className=" flex text-sm gap-1 bg-lime-700 text-white rounded-md w-13 h-6 px-1">
            {data.info.rating.rating_text}
          <FaStar className="mt-1"/>
          </div>
        </div>

        <div className="flex text-[17px] font-light justify-end">
          <div></div>
          <div>{data.info.cfo.text}</div>
        </div>

        <div className="flex justify-end text-sm">{data.order.deliveryTime}</div>

        <div className="h-[1px] bg-slate-300 mt-2"></div>
      </div>
    </div>
  );
}

export default Card;
