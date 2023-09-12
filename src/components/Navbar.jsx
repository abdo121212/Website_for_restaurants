import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
export default function Navbar() {
  const [Nav, setNav] = useState(false);
  return (
    <>
      <div className=" max-w-[1640px]  mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="cursor-pointer hover:text-orange-500 duration-300 duration-200">
            <AiOutlineMenu size={30} onClick={() => setNav(!Nav)} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-5 ">
              Best <span className="font-bold">Eats</span>
            </h1>
          </div>
          <div className=" hidden lg:flex bg-gray-200 rounded-full p-1  justify-center items-center">
            <p className="text-white bg-black rounded-full p-2 hover:text-orange-500 duration-300 duration-200">Delivery</p>
            <p className=" p-2">Pickup</p>
          </div>
        </div>
        <div className=" bg-gray-300  rounded-full  flex items-center px-2 w-[200px] lg:w-[500px] sm:w-[400px]">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            className="bg-transparent w-full p-2 focus:outline-none "
            placeholder="Search Foods"
          />
        </div>

        <div className=" ">
          <button className="bg-black text-white  hidden md:flex items-center py-2  p-2 px-3  rounded-full ">
            <BsFillCartFill size={20} className=" mr-1 hover:text-orange-500 duration-300 duration-200" /> cart
          </button>
        </div>
        <div
          className={
            Nav ? "w-full h-screen bg-black/80 top-0 left-0 z-10 fixed" : ""
          }
        ></div>

        <div
          className={
            Nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!Nav)}
            className="absolute right-4 top-4 cursor-pointer hover:text-orange-500 duration-300 "
            size={20}
          />
          <h3 className="p-4 text-2xl">
            Best <span className="font-bold ">Eats</span>
          </h3>
          <nav>
            <ul className=" flex flex-col p-4 text-gray-800 ">
              <li className="text-xl py-4 flex">
                <TbTruckDelivery className="mx-4  hover:text-orange-500 duration-300" size={30} /> Oreder
              </li>

              <li className="text-xl py-4 flex">
                <MdFavorite className="mx-4  hover:text-orange-500 duration-300" size={30} /> Favarites
              </li>

              <li className="text-xl py-4 flex">
                <FaWallet className="mx-4 hover:text-orange-500 duration-300" size={30} /> Wallet
              </li>

              <li className="text-xl py-4 flex">
                <MdHelp className="mx-4  hover:text-orange-500 duration-300" size={30} /> Help
              </li>

              <li className="text-xl py-4 flex">
                <AiFillTag className="mx-4 hover:text-orange-500 duration-300"duration-200 size={30} /> Promotions
              </li>

              <li className="text-xl py-4 flex">
                <BsFillSaveFill className="mx-4 hover:text-orange-500 duration-300"duration-200 size={30} /> Best Ones
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends className="mx-4 hover:text-red-400" size={30} /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
