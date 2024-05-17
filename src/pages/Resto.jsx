import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
//import { withRouter } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import resto from "../BigData/Delivery/Restaurants";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";

// Star component to represent full, half, or empty stars
const Star = ({ type }) => {
  let Icon = FaRegStar; // Default to empty star
  if (type === "full") {
    Icon = FaStar;
  } else if (type === "half") {
    Icon = FaStarHalfAlt;
  }
  return <Icon className="w-4 h-6 text-yellow-500" />;
};

// Star rating display based on a numeric rating
const StarRatingDisplay = ({ rating, maxRating = 5 }) => {
  // Generate stars based on the rating
  const stars = [];
  let fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half-star

  // Add full stars to the list
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} type="full" />);
  }

  // Add a half-star if applicable
  if (hasHalfStar) {
    stars.push(<Star key="half" type="half" />);
    fullStars++;
  }

  // Add empty stars to complete the rating
  while (stars.length < maxRating) {
    stars.push(<Star key={`empty-${fullStars}`} type="empty" />);
    fullStars++;
  }

  return <div className="flex space-x-1">{stars}</div>;
};

// Component to demonstrate how to display a rating on an item
const ItemWithRating = ({ itemRating }) => {
  return (
    <div className="flex flex-col items-start">
      <StarRatingDisplay rating={itemRating} />
    </div>
  );
};

function Resto() {
  // const location = useLocation();
  // const restaurantData = location.state;

  // console.log("location state", restaurantData);

  // console.log("Location object after navigating:", window.location);

  // console.log("Location:", location);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  console.log("Location:", location);

  const element = resto.find((object) => object.id === id);
  console.log("element : ", element);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isNextModalOpen, setNextModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openNextModal = () => {
    setNextModalOpen(true);
  };

  const closeNextModal = () => {
    setNextModalOpen(false);

    const [selectedHeading, setSelectedHeading] = useState('Biryani');

    const handleHeadingClick = (heading) => {
      setSelectedHeading(heading);
    };
  };
  return (
    <div className="mt-[-76px]">
      {/* 1st section */}
      <div className="flex flex-col  ml-[200px] w-[1100px] ">
        {/* 1st section */}
        <div className="flex flex-row justify-between mb-8 mt-20">
          <div className="flex">
            <NavLink to="/">
              <div className="italic text-black font-extrabold text-5xl">
                zomato
              </div>
            </NavLink>
            <div>
              <div className="flex border border-1 mt-1  ml-5 shadow-lg mx-[150px] w-[600px] h-[50px] rounded-xl bg-white p-2 py-3">
                <div className="flex gap-1 w-[200px]">
                  <FaMapMarkerAlt className="mt-[5px] text-red-500" />
                  <h1 className=" text-base text-slate-500">
                    Mizoram,house,vidya...
                  </h1>
                  <IoMdArrowDropdown className="text-black mt-1 " />
                </div>
                <div className="text-slate-500 px-1 ml-2 mt-[-3px]">|</div>
                <div className="flex">
                  <IoSearchOutline className="text-black mt-[6px] ml-2" />
                  <input
                    type="search"
                    className="focus:outline-none text-slate-500 text-base w-[340px] rounded-r-xl mt-[-10px]  h-[46px] bg-white px-3 "
                    placeholder="Search for restaurant , cuisine , or a dish"
                    name=""
                    id=""
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="flex mt-2 font-light text-lg gap-10 text-slate-600 ">
            <div
              onClick={() => openModal()}
              className="cursor-pointer hover:text-slate-950"
            >
              Log In
            </div>
            <Login isOpen={isModalOpen} onClose={closeModal} />
            <div
              onClick={() => openNextModal()}
              className="cursor-pointer hover:text-slate-950"
            >
              Sign Up
            </div>
            <Signup isOpen={isNextModalOpen} onClose={closeNextModal} />
          </div>
        </div>

        {/* 2nd section */}
        <div className=" font-thin text-sm mb-[5px] ">
          Home / India / Kochi / Kalamassery / Biryani Restaurants
        </div>
      </div>

      <div className="h-[1px] bg-gray-200 mb-[17px]   w-[1536px]"></div>

      {/* 2nd section */}
      <div className="flex flex-col  ml-[200px] w-[1100px] sticky ">
        {/* 1st subsection  */}
        <div className="h-[400px] w-[1100px]">
          <img
            src={element.info.image.url}
            alt=""
            className="w-[1100px] h-[400px]"
          />
        </div>

        {/* 2nd subsection */}
        <div className="sticky top-0 bg-white">
          <div className="mt-5 ">
            <div className="flex ">
              <div className=" text-3xl font-semibold ">
                {element.info.name}
              </div>

              <div className="flex gap-5 ml-[500px]">
                <div className="flex ">
                  <div className=" flex text-lg gap-1 bg-lime-700 text-white rounded-md w-14 h-8 px-2 mt-2">
                    {element.info.ratingNew.ratings.DINING.rating}
                    <FaStar className="mt-[6px]" />
                  </div>
                  <div className="ml-2 mt-1">
                    <div className=" text-sm font-semibold">
                      {element.info.ratingNew.ratings.DINING.reviewCount}
                    </div>
                    <div className=" text-xs font-light">Dining ratings</div>
                    <div className="mt-[-12px]">-----------</div>
                  </div>
                </div>

                <div className="flex">
                  <div className=" flex text-lg gap-1 bg-lime-700 text-white rounded-md w-14 h-8 px-2 mt-2">
                    {element.info.ratingNew.ratings.DELIVERY.rating}
                    <FaStar className="mt-[6px]" />
                  </div>
                  <div className="ml-2 mt-1">
                    <div className=" text-sm font-semibold">
                      {element.info.ratingNew.ratings.DELIVERY.reviewCount}
                    </div>
                    <div className=" text-xs font-light">Delivery ratings</div>
                    <div className="mt-[-12px]">-------------</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd subsection */}
          <div className="flex text-base mb-1 mt-[-5px] font-light">
            {element.info.cuisine.map((data) => (
              <div>{data.name},</div>
            ))}
          </div>
          {/* 4th subsection */}
          <div className="text-base mb-1  font-light text-slate-500">
            {element.info.locality.name}
          </div>
          {/* 5th subsection */}
          <div className="flex text-base font-light">
            <div className=" text-orange-400">Open now : </div>
            <div> {element.info.timing.timing_desc}</div>{" "}
          </div>
          {/* 6th subsection */}
          <div className="mt-3 text-xl ml-2">Order Online</div>
          <div className="w-[1100px] h-[1px] mt-3 bg-gray-300"></div>
        </div>

        {/* Menus */}
        <div className="flex">
          <div className=" flex flex-col gap-y-3  mt-3 pl-5 w-[250px]">
            {element.children.map((data) => (
              <div className="text-xl " onClick={()=>handleHeadingClick(data.title)}>{data.title}</div>
            ))}
          </div>
          <div className="w-[1px]  bg-gray-300"></div>
          <div className="text-2xl mt-2 ml-5 ">
            
            <div className="mb-6">Order Online</div>
            {element.menus.map((data) => (
              <div >
                <div className="mb-4">{data.menu.name}</div>
                <div className="">
                  <div>
                    <div>
                      {data.menu.items.map((it) => (
                        <div className="flex gap-5 mb-8">
                          <div>
                            <img src={it.item.item_image_thumb_url} alt="" className="h-[140px] rounded-xl"/>
                          </div>
                          <div className=" text-base font-light pt-3 text-gray-500">
                          <div className=" text-xl font-normal text-black">{it.item.name}</div>
                          <div className="flex gap-3">
                             <div className="flex ">
                            <ItemWithRating
                              itemName="Sample Item"
                              itemRating={it.item.rating.value}
                              
                            />
                             </div>

                             <div>
                              {it.item.rating.total_rating_text}
                             </div>
                          </div>
                         
                          <div className="flex text-gray-500">
                          <LiaRupeeSignSolid  className="text-base mt-[6px]"/>
                           <div>{it.item.price}</div> </div>
                          <div>{it.item.desc.slice(0, 60)}...</div>
                          </div>
                          
                          
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-[750px] h-[1px] bg-slate-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resto;
