import React, { useState } from "react";
import logo from "../assets/Logo_title 1.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import world from "../assets/world.png";
import bell from "../assets/bell.png";
import Down from "../assets/Down.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-[105px] w-full h-[85px] flex items-center bg-white px-6 md:px-10 gap-6 md:gap-16 z-50">
      <img src={logo} alt="logo" className="h-8 md:h-10" />
      <button
        className="md:hidden text-gray-600 text-2xl ml-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu />
      </button>
      <div className="hidden md:flex space-x-6 font-bold">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/engine">Recommendation Engine</a>
        <a href="/subscription">Subscription</a>
      </div>
      <div className="hidden md:flex space-x-4 md:space-x-6 items-center ml-8 ">
        <img src={search} alt="search" className="w-5 h-5" />
        <img src={cart} alt="cart" className="w-6 h-6" />
        <img src={bell} alt="bell" className="w-5 h-5" />
        <img src={world} alt="world" className="w-5 h-5" />
        <button className="flex items-center border-2 border-gray-500 rounded-full text-[12px] font-bold text-gray-600 gap-[7px] px-3 py-1 text-sm">
          <p>EUR</p>
          <img src={Down} alt="down" className="w-3 h-2 ml-1" />
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-[12px]">
          <img src={user} alt="user" className="w-[12px] h-[18px]" />
          <p className="font-semibold">Login</p>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4 md:hidden">
          <a href="/home">Home</a>
          <a href="/products">Products</a>
          <a href="/engine">Recommendation Engine</a>
          <a href="/subscription">Subscription</a>

          <div className="flex space-x-4 items-center">
            <img src={search} alt="search" className="w-5 h-5" />
            <img src={cart} alt="cart" className="w-6 h-6" />
            <img src={bell} alt="bell" className="w-5 h-5" />
            <img src={world} alt="world" className="w-5 h-5" />
          </div>
          <button className="flex items-center border-2 border-gray-500 rounded-full text-[12px] font-bold text-gray-600 gap-[7px] px-3 py-1 text-sm">
            <p>EUR</p>
            <img src={Down} alt="down" className="w-3 h-2 ml-1" />
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-[12px]">
            <img src={user} alt="user" className="w-[12px] h-[18px]" />
            <p className="font-semibold">Login</p>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
