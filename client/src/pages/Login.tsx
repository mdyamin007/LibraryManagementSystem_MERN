import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm/LoginForm";
import Navbar from "../components/Navbar";
import { useAppSelector } from "../hooks/reduxTypes";

function Login() {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
