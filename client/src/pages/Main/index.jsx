import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";

function index() {
  return (
    <div>
      <Navigation />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default index;
