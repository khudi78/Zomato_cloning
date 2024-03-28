import React, { useState } from "react";
import data from "../../BigData/Home/data";
import { FaChevronDown } from "react-icons/fa";

function Explore() {
  const [multiple, setMultiple] = useState([]);

  // const handleClick = () => {
  //   setSelect(!select);
  // };

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }
  return (
    <div className="text-black mb-24">
      <h1 className="text-4xl mb-8 font-semibold">Explore options near me</h1>
      <div className="flex flex-col gap-y-5">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() =>handleMultiSelection(item.id)}
            className="flex flex-col cursor-pointer  border text-slate-600 border-neutral-300  rounded-lg pl-8 p-4 text-lg"
          >
            <div className="flex flex-row justify-between">
            {item.title}
            <FaChevronDown className="mt-2 mr-5" />
            </div>
            
            { multiple.indexOf(item.id) !== -1 && (
            <div className="text-slate-500 mt-6 text-lg" dangerouslySetInnerHTML={{ __html: item.description }}></div>)
             }

          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
