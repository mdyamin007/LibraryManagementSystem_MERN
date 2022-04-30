import React, { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import api from "../../../api";

interface IBook {
  title: string;
  publishedYear: number;
  genres: readonly Option[];
  pages: number;
  rating: number;
  quantity: number;
  image: string;
  authorId: string[];
}

type Option = {
  value: string;
  label: string;
};

const FormAddBook = () => {
  const [newBook, setNewBook] = useState<IBook>({
    title: "",
    publishedYear: 0,
    genres: [],
    pages: 0,
    rating: 0,
    quantity: 0,
    image: "",
    authorId: [],
  });

  useEffect(() => {
    const getAuthors = async () => {
      const res = await api.get("api/v1/authors");
      const data = res.data;
      console.log(data);
    };
    getAuthors();
  }, []);

  console.log(newBook);

  const placeholders = ["Title", "Publish Year", "Pages", "Rating", "Quantity"];
  const genreOptions: Option[] = [
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
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[1]}
              value={newBook.publishedYear}
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  publishedYear: parseInt(e.target.value),
                })
              }
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
                value={newBook.genres}
                onChange={(option: MultiValue<Option>) =>
                  setNewBook({ ...newBook, genres: option })
                }
              />
            </div>

            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[2]}
              value={newBook.pages}
              onChange={(e) =>
                setNewBook({ ...newBook, pages: parseInt(e.target.value) })
              }
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[3]}
              value={newBook.rating}
              onChange={(e) =>
                setNewBook({ ...newBook, rating: parseInt(e.target.value) })
              }
            />
            <input
              type="number"
              className="bg-gray-200 text-black text-lg my-4 px-6 py-4 rounded-md outline-none w-1/2"
              placeholder={placeholders[4]}
              value={newBook.quantity}
              onChange={(e) =>
                setNewBook({ ...newBook, quantity: parseInt(e.target.value) })
              }
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
