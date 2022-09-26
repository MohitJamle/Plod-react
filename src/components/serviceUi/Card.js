import React from "react";
import styles from "../UI/Card.module.css";
import Star from "../UI/Star";

const Card = ({ title, name, description, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.shapes}>
        <img
          src="/Images/cleints/shape-1.png"
          className="rotateSlow"
          style={{
            position: "absolute",
            zIndex: "9",
            top: "25%",
            left: "40%",
          }}
          alt=""
        />{" "}
        <img
          src="/Images/shape-4.png"
          className="rotateSlow"
          style={{
            position: "absolute",
            zIndex: "9",
            bottom: "19%",
            right: "22%",
          }}
          alt=""
        />{" "}
        <img
          src="/Images/shape-3.png"
          className="rotateSlow"
          style={{
            position: "absolute",
            zIndex: "9",
            bottom: "22%",
            right: "27%",
          }}
          alt=""
        />
      </div>
      <div
        className={styles.cardContent}
        style={{ backgroundColor: "#f4f8fc" }}
      >
        <img src={url} alt="" />
        <p>{description}</p>

        <div className={styles.name}>
          <h3>{name}</h3>
          <span>{title}</span>
        </div>

        <div className={styles.starRating}>
          <i>
            <Star />
          </i>
          <i>
            <Star />
          </i>
          <i>
            <Star />
          </i>
          <i>
            <Star />
          </i>
          <i>
            <Star />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Card;
