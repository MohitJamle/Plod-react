import React from "react";
import TopHeader from "../components/UI/TopHeader";
import Navbar from "../components/Navbar";
import Heading from "../components/UI/Heading";
import ServiceDetail from "../components/ServiceDetail";
import Experience from "../components/about/Experience";
import CounterArea from "../components/about/CounterArea";
import Support from "../components/Support";
import Clints from "../components/Clints";
import Question from "../components/about/Question";
import GetStarted from "../components/GetStarted";
import Footer from "../components/serviceUi/Footer";
import BacktoTop from "../components/shortCSS/BacktoTop";

const About1 = () => {
  return (
    <div className="About">
      <TopHeader />
      <Navbar />
      <Heading subject={"About Us"} />
      <ServiceDetail />
      <div className="container">
        <Experience />
      </div>
      <CounterArea />
      <Support />
      <Clints />
      <Question />
      <GetStarted />
      <BacktoTop />
      <Footer />
    </div>
  );
};

export default About1;
