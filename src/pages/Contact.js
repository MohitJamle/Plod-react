import React from "react";
import Navbar from "../components/Navbar";
import BacktoTop from "../components/shortCSS/BacktoTop";
import TopHeader from "../components/UI/TopHeader";
import styles from "../styles/contact/Contact.module.css";
import ContactForm from "../components/contactUi/ContactForm";
import Footer from "../components/Footer2";
import Address from "../components/contactUi/Address";
import Heading from "../components/UI/Heading";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className="contact_top_header">
        <TopHeader />
      </div>

      <div className="container">
        <Navbar />
      </div>

      <Heading subject="Contact" />

      <div className="container">
        <ContactForm />
      </div>

      <div id="map">
        <Address />
      </div>

      <BacktoTop />
      <Footer />
    </div>
  );
};

export default Contact;
