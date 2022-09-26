import React from "react";
import styles from "./Question.module.css";
import data from "./data";
import Accordion from "./Accordion";

const Question = () => {
  return (
    <div className="pbpt">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Which peoples loves us a lot, please check out what about says about
            us
          </p>
        </div>

        <div className={styles.question_content}>
          <div className={styles.questionImg}>
            <div className={styles.image_cover}>
              <img src="/Images/about-1.webp" alt="" />
            </div>
          </div>

          <div className={styles.accordion_box}>
            <div className={styles.accordion_cover}>
              <div className={styles.accordion}>
                {data.map((item) => (
                  <>
                    <Accordion
                      title={item.title}
                      description={item.description}
                      key={item.id}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
