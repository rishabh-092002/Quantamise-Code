import React from "react";
import logo from "../assets/Logo_title 1.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import world from "../assets/world.png";
import bell from "../assets/bell.png";
import Down from "../assets/Down.png";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-[105px] w-[1391px] h-[49px] flex items-center bg-white px-10 gap-[100px]">
      <img src={logo} alt="logo" />
      <div className="flex space-x-7 font-bold">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/engine">Recommendation Engine</a>
        <a href="/subscription">Subscription</a>
      </div>
      <div className="flex space-x-7 items-center ">
        <img src={search} alt="search" className="w-[18px] h-[18px]" />
        <img src={cart} alt="cart" className="w-[30px] h-[30px]" />
        <img src={bell} alt="bell" className="w-[24px] h-[24px]" />
        <img src={world} alt="world" className="w-[24px] h-[24px]" />
        <button className="flex items-center border-[2px] border-gray-500 rounded-full w-[76px] h-[39px] text-[12px] font-bold text-gray-600 gap-[7px] px-[16px] py-[8px]">
          <p>EUR</p>
          <img
            src={Down}
            alt="down"
            className="w-[11px] h-[10px] rounded-[1.2px] border-[1.5px]"
          />
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-[12px]">
          <img src={user} alt="user" className="w-[12px] h-[18px]" />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
