import { ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState();
  const [namefocus, setNamefocus] = useState(true);
  const [email, setEmail] = useState();
  const [emailfocus, setEmailfocus] = useState(true);
  const [phone, setPhone] = useState();
  const [phonefocus, setPhonefocus] = useState(true);
  const [subject, setSubject] = useState();
  const [subjectfocus, setSubjectfocus] = useState(true);
  const [message, setMessage] = useState();
  const [messagefocus, setMessagefocus] = useState(true);

  return (
    <div className={styles.ContactForm}>
      <div className={styles.contactForm_content}>
        <h3>Get in Touch</h3>
        <form className={styles.contact_form}>
          <div className={styles.half}>
            <input
              className={styles.contactForm_input}
              type="text"
              placeholder="Name*"
              onChange={(e) => {
                setName(e.target.value);
                if (name) {
                  if (name.trim().length > 0) {
                    setNamefocus(true);
                  }
                } else {
                  setNamefocus(false);
                }
              }}
              onBlur={() => {
                if (name) {
                  setNamefocus(true);
                } else {
                  setNamefocus(false);
                }
              }}
            />
            <span
              className={styles.errMessage}
              style={{ display: !namefocus ? "inline-block" : "none" }}
            >
              Please enter your name
            </span>
          </div>
          <div className={styles.half}>
            <input
              className={styles.contactForm_input}
              type="email"
              placeholder="Email*"
              onChange={(e) => {
                setEmail(e.target.value);
                if (email) {
                  if (email.trim().length > 0) {
                    setEmailfocus(true);
                  }
                } else {
                  setEmailfocus(false);
                }
              }}
              onBlur={() => {
                if (email) {
                  if (email.trim().length > 0) {
                    setEmailfocus(true);
                  }
                } else {
                  setEmailfocus(false);
                }
              }}
            />
            <span
              className={styles.errMessage}
              style={{ display: !emailfocus ? "inline-block" : "none" }}
            >
              Please enter your email
            </span>
          </div>
          <div className={styles.half}>
            <input
              className={styles.contactForm_input}
              type="tell"
              placeholder="Phone"
              onChange={(e) => {
                setPhone(e.target.value);
                if (phone) {
                  if (phone.trim().length > 0) {
                    setPhonefocus(true);
                  }
                } else {
                  setPhonefocus(false);
                }
              }}
              onBlur={() => {
                if (phone) {
                  if (phone.trim().length > 0) {
                    setPhonefocus(true);
                  }
                } else {
                  setPhonefocus(false);
                }
              }}
            />
            <span
              className={styles.errMessage}
              style={{ display: !phonefocus ? "inline-block" : "none" }}
            >
              Please enter your number
            </span>
          </div>
          <div className={styles.half}>
            <input
              className={styles.contactForm_input}
              type="text"
              placeholder="Subject"
              onChange={(e) => {
                setSubject(e.target.value);
                if (subject) {
                  if (subject.trim().length > 0) {
                    setSubjectfocus(true);
                  }
                } else {
                  setSubjectfocus(false);
                }
              }}
              onBlur={() => {
                if (subject) {
                  if (subject.trim().length > 0) {
                    setSubjectfocus(true);
                  }
                } else {
                  setSubjectfocus(false);
                }
              }}
            />
            <span
              className={styles.errMessage}
              style={{ display: !subjectfocus ? "inline-block" : "none" }}
            >
              Please enter your subject
            </span>
          </div>
          <div className={styles.full}>
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="5"
              className={styles.contactForm_input}
              onChange={(e) => {
                setMessage(e.target.value);
                if (message) {
                  if (message.trim().length > 0) {
                    setMessagefocus(true);
                  }
                } else {
                  setMessagefocus(false);
                }
              }}
              onBlur={() => {
                if (message) {
                  if (message.trim().length > 0) {
                    setMessagefocus(true);
                  }
                } else {
                  setMessagefocus(false);
                }
              }}
            />
            <span
              className={styles.errMessage}
              style={{ display: !messagefocus ? "inline-block" : "none" }}
            >
              Write your message
            </span>
          </div>
          <div
            className={styles.full}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="/about"
              className={`Animatedbutton Animated `}
              style={{
                pointerEvents: "all",
                cursor: "pointer",
              }}
            >
              Send Message &nbsp;
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />
            </a>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
