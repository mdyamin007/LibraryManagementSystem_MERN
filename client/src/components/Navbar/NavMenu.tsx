import React from "react";

interface NavMenuProp {
  text: string;
}

const NavMenu = (prop: NavMenuProp) => {
  return <div className="text-white text-base mx-3 text-lg">{prop.text}</div>;
};

export default NavMenu;
