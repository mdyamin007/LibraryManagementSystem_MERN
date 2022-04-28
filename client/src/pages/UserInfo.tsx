import React from "react";
import AdminHero from "../components/AdminPanel/Hero/AdminHero";
import Usercards from "../components/AdminPanel/UserCards/Usercards";
import Footer from "../components/Footer/index";
import Navbar from "../components/Navbar";

const UserInfo = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <AdminHero />
      </section>
      <section>
        <Usercards />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserInfo;
