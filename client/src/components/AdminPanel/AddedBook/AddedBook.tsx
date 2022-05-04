import React from "react";

type Option = {
  value: string;
  label: string;
};

interface IBook {
  title: string;
  publishedYear: number | undefined;
  pages: number | undefined;
  rating: number | undefined;
  quantity: number | undefined;
  genres: readonly Option[];
  author: readonly Option[];
  image: string;
}

const AddedBook = ({
  title,
  publishedYear,
  pages,
  rating,
  quantity,
  genres,
  author,
  image,
}: IBook) => {
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="bg-gray-200 px-14 py-12 flex space-x-10 items-center w-1/2">
        <div className="w-1/4">
          <img src={image} className="h-32 w-32" alt="book logo" />
        </div>
        <div className="px-10 py-4 bg-red-100 w-3/4">
          <p>Title: {title}</p>
          <p>Author: {author.map((obj) => `${obj.label} `)}</p>
          <p>Genres: {genres.map((obj) => `${obj.label} `)}</p>
          <p>Published year: {publishedYear}</p>
          <p>Rating: {rating}</p>
          <p>Pages: {pages}</p>
          <p>In stock: {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default AddedBook;
