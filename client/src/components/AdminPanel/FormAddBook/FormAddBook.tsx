import React, { useState } from "react";

const FormAddBook = () => {
  const placeholders = ["Title", "Publish Year", "Pages", "Rating", "Quantity"];

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
            <div className="w-1/2 flex items-center flex-start space-x-3 text-white text-base">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label htmlFor="vehicle1"> Sci-fi</label>
              <br />
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
              />
              <label htmlFor="vehicle2"> Horror</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle3"> History</label>
              <br />
              <br />
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
            <input
              type="text"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder="Author"
            />
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
