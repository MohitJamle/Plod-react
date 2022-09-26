import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/UI/Heading";
import TopHeader from "../components/UI/TopHeader";
import Service from "../components/serviceUi/Service";
import Support from "../components/serviceUi/Support";
import Clints from "../components/serviceUi/Clints";
import GetStarted from "../components/serviceUi/GetStarted";
import Footer from "../components/serviceUi/Footer";
import Process from "../components/serviceUi/Process";
import BacktoTop from "../components/shortCSS/BacktoTop";

const Services1 = () => {
  return (
    <div className="ServicesPages" id="ServicePages">
      <TopHeader />
      <Navbar />
      <Heading subject={"Services One"} />
      <div className="container">
        <Service />
      </div>

      <Process />

      <Support />
      <Clints />
      <GetStarted />
      <BacktoTop />
      <Footer />
    </div>
  );
};

export default Services1;
