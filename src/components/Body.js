import React from "react";
import Blog from "./Blog";
import Cases from "./Cases";
import Clints from "./Clints";
import Experience from "./Experience";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import Navbar from "./Navbar";
import Service from "./Service";
import ServiceDetail from "./ServiceDetail";
import BacktoTop from "./shortCSS/BacktoTop";
import Support from "./Support";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <ImageSlider />
      </div>
      <div className="container">
        <ServiceDetail />
      </div>
      <Experience />
      <div className="container">
        <Service />
      </div>
      <Support />
      <Cases />
      <Clints />
      <Blog />
      <GetStarted />
      <BacktoTop />
      <Footer />
    </div>
  );
};

export default Home;
