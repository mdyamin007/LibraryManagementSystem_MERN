import React from "react";
import SingleBook from "./SingleBook";
import SearchBar3 from "../SearchBar/SearchBar2";

const BookCards = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full mt-20 mb-10 flex items-center justify-center">
        <SearchBar3 />
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-green-600 px-2 py-3 rounded-md text-white text-base">
          Add new Book
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8 my-4">
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
        <SingleBook title={"Harry potter"} author={"J.K. Rowling"} />
      </div>
    </div>
  );
};

export default BookCards;
