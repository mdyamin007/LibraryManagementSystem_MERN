import React from "react";
import FormAddAuthor from "../components/AdminPanel/FormAddAuthor/FormAddAuthor";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddBook = () => {
  return (
    <>
      <Navbar />
      <AdminHero />
      <FormAddAuthor />
      <Footer />
    </>
  );
};

export default AddBook;
