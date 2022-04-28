import React from 'react'
import { Link } from 'react-router-dom'

const ContentAdmin = () => {
  return (
    <div className="container mx-auto my-32">
        <div className="flex space-x-16 items-center justify-center  w-full">
            <Link to="/book_info" className="hover:transition hover:scale-105 duration-400 ease-in-out rounded-md shadow-lg w-1/4 h-72 bg-blue-600 px-10 py-6 cursor-pointer inline-flex items-center justify-center text-center"><h1 className="text-6xl  text-white font-semibold" >
           Book Information</h1>
            </Link>
            <Link to="/user_info" className="hover:transition hover:scale-105 duration-400 ease-in-out rounded-md shadow-lg w-1/4 h-72 bg-blue-600 px-10 py-6 cursor-pointer inline-flex items-center justify-center text-center"><h1 className="text-6xl  text-white font-semibold" >
           User Information</h1>
            </Link>
        </div>
    </div>
  )
}

export default ContentAdmin