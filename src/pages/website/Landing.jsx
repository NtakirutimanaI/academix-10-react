import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import TopImg from "./TopImg";
import "./Landing.css";

const Landing = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <TopImg />
    </>
  );
};

export default Landing;
