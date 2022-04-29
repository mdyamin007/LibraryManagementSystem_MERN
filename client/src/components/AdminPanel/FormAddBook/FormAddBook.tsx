import React, { useState } from "react";
import Select from "react-select";

const FormAddBook = () => {
  const placeholders = ["Title", "Publish Year", "Pages", "Rating", "Quantity"];
  const genreOptions = [
    { value: "horror", label: "Horror" },
    { value: "sci-fi", label: "Sci-fi" },
    { value: "history", label: "History" },
  ];

  return (
    <div className="w-full bg-green-300 py-20">
      <div className="container mx-auto">
        <form>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[0]}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[1]}
            />
            <div className="w-1/2 my-4">
              <p className="font-bold italic text-white">Genres:</p>
            </div>
            <div className="w-1/2 ">
              <Select
                options={genreOptions}
                isMulti={true}
                placeholder={"Genre"}
                className="w-full text-black mb-4"
              />
            </div>

            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[2]}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[3]}
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[4]}
            />
            <div className="w-1/2 mt-3">
              <Select
                placeholder={"Author"}
                isMulti={true}
                className="w-full"
              />
            </div>
            <input type="file" className="w-1/2 my-10" />
            <button
              type="submit"
              className="bg-green-600 px-2 py-3 text-white rounded-md"
            >
              Add new book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddBook;
