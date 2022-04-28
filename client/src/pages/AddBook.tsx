import React from "react";
import FormAddBook from "../components/AdminPanel/FormAddBook/FormAddBook";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddBook = () => {
  return (
    <>
      <Navbar />
      <AdminHero />
      <FormAddBook />
      <Footer />
    </>
  );
};

export default AddBook;
