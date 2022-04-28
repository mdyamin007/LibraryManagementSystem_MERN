import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";

const CardUser = () => {
  return (
    <div className="relative bg-gray-400 flex flex-col items-center justify-center rounded-lg pt-8 pb-4">
      <div className="absolute top-2 right-2">
        <RiDeleteBin5Line className="h-8 w-8 text-red-300" />
      </div>
      <div>
        <CgProfile className="h-20 w-20 text-white" />
      </div>
      <div className="mt-2">
        <p>User Name:</p>
        <p>User ID:</p>
      </div>
    </div>
  );
};

export default CardUser;
