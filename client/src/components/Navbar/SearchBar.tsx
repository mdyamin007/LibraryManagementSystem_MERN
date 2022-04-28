import React from 'react'
import {FiSearch} from "react-icons/fi"


const SearchBar = () => {
  return (
    <div className={"bg-gray-600 inline-flex items-center justify-center rounded-full ml-14 mr-3 px-2 py-1"}>
        <input type="text" className="px-2 text-white py-2 bg-transparent outline-none" />
        <FiSearch className="text-gray-300 h-6 w-6" />
    </div>
  )
}

export default SearchBar