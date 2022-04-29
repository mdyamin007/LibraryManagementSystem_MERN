import React from "react";
import BorrowedBook from "./BorrowedBook";

const BorrowedBooks = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto">
        <BorrowedBook />
        <BorrowedBook />
        <BorrowedBook />
        <BorrowedBook />
      </div>
    </div>
  );
};

export default BorrowedBooks;
