import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import BookInfo from "./pages/BookInfo";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/book_info" element={<BookInfo />} />
        <Route path="/add_book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
