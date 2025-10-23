import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import NewsEvents from "./NewsEvents";
import CardsSection from "./CardsSection";
import GetStarted from "./GetStarted";
import PricingSection from "./PricingSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <>
    <TopBar />
    <Navbar />
    <GetStarted />
    <CardsSection />
    <NewsEvents />
    <PricingSection />
    <NewsletterSection />
    <Footer />
    </>
  );
};

export default Landing;
