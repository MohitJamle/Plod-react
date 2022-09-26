import React, { useState } from "react";
import Add from "./Add";
import styles from "./Question.module.css";

const Accordion = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={() => setShow(!show)}>
        <i>
          <Add isAdd={!show ? true : false} />
        </i>
        {title}
      </div>

      <div
        className={styles.accordion_content}
        style={{
          display: show ? "block" : "none",
          height: show ? "fit-content" : "0",
        }}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
