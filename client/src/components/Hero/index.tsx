import React from 'react';


const Hero = () => {
  return (
    <div className=" mt-20">
        <div className="bg-gray-300 py-32 px-32">
        <div className="flex justify-between">
            <div className="pl-20 flex flex-col">
                <div className="mt-14">
                    <h1 style={{fontSize: "6rem"}} className=" text-black text-center font-title font-bold">Welcome to our Book Store</h1>
                </div>
                <div className="flex justify-center align-center items-center">
                    <button className="rounded-full hover:scale-125 text-xl bg-violet-700 px-6 py-4 hover:bg-violet-600 duration-400 transition-all ease-in-out text-white">Sign up/Sign in</button>
                </div>
            </div>
            <div className="">   
                <img style={{height: "328px", width: "433px"}} src="img/book.png" alt="book logo" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero