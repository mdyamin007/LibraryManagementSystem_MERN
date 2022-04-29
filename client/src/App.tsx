import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import BookInfo from "./pages/BookInfo";
import AddBook from "./pages/AddBook";
import UserProfile from "./pages/UserProfile";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user_info" element={<UserInfo />} />
        <Route path="/book_info" element={<BookInfo />} />
        <Route path="/add_book" element={<AddBook />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
