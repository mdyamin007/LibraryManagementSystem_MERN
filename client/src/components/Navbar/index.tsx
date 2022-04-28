import React from "react";
import NavMenus from "./NavMenus";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";

function Navbar() {
  return (
    <nav className="z-50 bg-black w-full fixed top-0 left-0 flex justify-between items-center flex-row py-5 px-10">
      <div className="w-2/12">
        <h1 className="text-white text-xl font-bold">BookStore</h1>
      </div>
      <div className="w-10/12 flex justify-end items-center">
        <NavMenus />
        <SearchBar />
        <ProfileIcon />
      </div>
    </nav>
  );
}

export default Navbar;
