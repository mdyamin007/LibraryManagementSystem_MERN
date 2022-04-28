import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

interface BookInfo {
  Book: {
    title: string;
    author: string;
  };
}

const SingleBook = ({ title, author }: BookInfo["Book"]) => {
  return (
    <div className="z-0 relative bg-gray-400 flex flex-col items-center justify-center rounded-lg pt-8 pb-4">
      <div className="absolute top-2 right-2">
        <RiDeleteBin5Line className="h-8 w-8 text-red-300" />
      </div>
      <div>
        <img className="h-32 w-32 mb-2" src="img/book.png" alt="book" />
      </div>
      <div>
        <p className="text-black text-xl mt-2 text-center">{title}</p>
        <p className="text-black text-lg mt-2 text-center">{author}</p>
      </div>
    </div>
  );
};

export default SingleBook;
