import React from 'react'
import NavMenu from "./NavMenu";

const NavMenus = () => {
  return (
    <div className="flex items-center">
        <NavMenu text={"Home"} />
        <NavMenu  text={"Categories"} />
        <NavMenu text={"About"} />
    </div>
  )
}

export default NavMenus