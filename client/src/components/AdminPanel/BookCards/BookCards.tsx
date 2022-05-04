import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import SearchBar3 from "../SearchBar/SearchBar2";
import api from "../../../api";
import { AxiosResponse } from "axios";

interface IBook {
  _id: string;
  title: string;
  author: string[];
}

const BookCards = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const res: AxiosResponse<IBook[]> = await api.get("api/v1/books");
      const data: IBook[] = res.data;
      setBooks(data);
    };
    getBooks(); //getting all book info from the backend
  }, []);

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
        {books.map((book: IBook) => (
          <SingleBook key={book._id} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
};

export default BookCards;
