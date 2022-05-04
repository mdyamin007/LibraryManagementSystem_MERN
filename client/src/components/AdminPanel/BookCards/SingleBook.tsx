import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AxiosResponse } from "axios";
import api from "../../../api";

interface BookInfo {
  Book: {
    title: string;
    author: string[];
  };
}

interface IAuthor {
  _id: string;
  firstName: string;
  lastName: string;
}

const SingleBook = ({ title, author }: BookInfo["Book"]) => {
  const [flag, setFlag] = useState(false);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    const getAuthorName = async () => {
      let authorInfo: IAuthor[] = [];
      author.map(async (obj) => {
        const res: AxiosResponse<IAuthor> = await api.get(
          `/api/v1/authors/${obj}`, //getting single author by id
        );
        const data: IAuthor = res.data;
        authorInfo.push(data);
      });
      setAuthors(authorInfo);
    };
    getAuthorName();
    setFlag(true);
  }, [author]);

  console.log(authors);
  return (
    <>
      {flag && (
        <div className="z-0 relative bg-gray-400 flex flex-col items-center justify-center rounded-lg pt-8 pb-4">
          <div className="absolute top-2 right-2">
            <RiDeleteBin5Line className="h-8 w-8 text-red-300" />
          </div>
          <div>
            <img className="h-32 w-32 mb-2" src="img/book.png" alt="book" />
          </div>
          <div>
            <p className="text-black text-xl mt-2 text-center">{title}</p>
            {authors && authors.map((val) => <p>{val.firstName}, </p>)}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBook;
