import React, { useEffect } from "react";
import styles from "../styles/GetStarted.module.css";

const GetStarted = () => {
  useEffect(() => {
    document
      .getElementById("GetStarted")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".getStartedAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 12;
        const y = (e.pageY * 1) / 13;

        layer.style.transition = "all 0.5s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.GetStarted} id="GetStarted">
      <div className="shapes">
        <div
          className="getStartedAnimation"
          style={{
            position: "absolute",
            top: "-600px",
            left: "45%",
          }}
        >
          <img
            src="/Images/shape-2.png"
            className="rotateInfi"
            style={{
              width: "39px",
              height: "20px",
            }}
            alt=""
          />
        </div>
        <div
          className="getStartedAnimation"
          style={{
            position: "absolute",
            top: "-450px",
            left: "21%",
          }}
        >
          <img
            src="/Images/shape-3.png"
            className="rotateInfi"
            style={{
              width: "28px",
            }}
            alt=""
          />
        </div>
        <div
          className="getStartedAnimation"
          style={{
            position: "absolute",
            top: "-450px",
            left: "25%",
          }}
        >
          <img
            src="/Images/shape-4.png"
            className="rotateInfi"
            style={{
              width: "35px",
            }}
            alt=""
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "-435px",
            left: "71%",
          }}
          className="getStartedAnimation"
        >
          <img
            src="/Images/experience/shape-1.webp"
            style={{ width: "70px" }}
            alt=""
          />
          <img
            src="/Images/experience/shape-2.webp"
            style={{
              width: "100px",
              position: "absolute",
              top: "160%",
              right: "40%",
            }}
            alt=""
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.getStarted}>
          <div className={styles.getStartedContent}>
            <h3> Let&apos;s Make Something Amazing Together </h3>

            <div className={styles.btn}>
              <a href="/" className="overview-btn-one">
                Get Started
              </a>
              <img src="/Images/bar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
