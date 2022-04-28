import React from 'react'
import {FiSearch} from "react-icons/fi"


const SearchBar2 = () => {
  return (
    <div className={"bg-gray-300 inline-flex items-center justify-between rounded-lg px-2 py-1 w-1/2"}>
        <input type="text" className="px-2 text-gray-600 py-2 bg-transparent outline-none" placeholder="Search by username" />
        <FiSearch className="text-gray-600 h-6 w-6" />
    </div>
  )
}

export default SearchBar2