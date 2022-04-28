import React from "react";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Navbar from "../components/Navbar";
import BookCards from "../components/AdminPanel/BookCards/BookCards";
import Footer from "../components/Footer/index";

const BookInfo = () => {
  return (
    <>
      <Navbar />

      <AdminHero />

      <BookCards />

      <Footer />
    </>
  );
};

export default BookInfo;
