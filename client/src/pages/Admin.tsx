import React from "react";
import ContentAdmin from "../components/AdminPanel/Content/ContentAdmin";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Admin = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <AdminHero />
      </section>
      <section>
        <ContentAdmin />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Admin;
