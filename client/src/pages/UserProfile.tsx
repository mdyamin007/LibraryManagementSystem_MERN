import React from "react";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BorrowedBooks from "../components/UserPanel/BorrowedBooks";
import UserDetails from "../components/UserPanel/UserDetails";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <AdminHero />
      <UserDetails />
      <BorrowedBooks />
      <Footer />
    </>
  );
};

export default UserProfile;
