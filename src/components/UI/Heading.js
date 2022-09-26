import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Heading.module.css";

const Heading = ({ subject }) => {
  useEffect(() => {
    document.getElementById("Heading").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".HeadingmoveAnimations").forEach((layer) => {
        const x = (e.pageX * 1) / 15;
        const y = (e.pageY * 1) / 10;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <div id="Heading">
      <div className={styles.ContactHeading}>
        <div className="container">
          <div className={styles.contact_content}>
            <h1>{subject}</h1>
            <div className={styles.links}>
              <pre className={styles.opti}>
                <Link to="/">Home</Link>
              </pre>
              <span className={styles.opti}>
                <Link to="/Contact">{subject}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="shapes">
        <div className="HeadingmoveAnimations">
          <img
            src={"/Images/shape-3.png"}
            className="rotateInfi"
            alt=""
            style={{
              width: "20px",
              position: "absolute",
              bottom: "290px",
              left: "90px",
            }}
          />
        </div>
        <div className="HeadingmoveAnimations">
          <img
            src={"/Images/shape-4.png"}
            className="rotateInfi"
            alt=""
            style={{
              width: "35px",
              height: "18px",
              position: "absolute",
              bottom: "265px",
              left: "130px",
            }}
          />
        </div>
        <div className="HeadingmoveAnimations">
          <img
            src={"/Images/shape-4(2).png"}
            className="rotateInfi"
            alt=""
            style={{
              width: "55px",
              position: "absolute",
              bottom: "70px",
              left: "390px",
            }}
          />
        </div>
        <div className="HeadingmoveAnimations">
          <img
            src={"/Images/shape-7.png"}
            alt=""
            style={{
              position: "absolute",
              bottom: "70px",
              right: "120px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
