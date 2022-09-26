import React, { useEffect } from "react";
import styles from "../styles/Support.module.css";

const Support = () => {
  useEffect(() => {
    document.getElementById("Support").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".supportAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 12;
        const y = (e.pageY * 1) / 15;

        layer.style.transition = "all 0.6s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  useEffect(() => {
    document.getElementById("Support").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".supportAnimation2").forEach((layer) => {
        const x = (e.pageX * 1) / 40;
        const y = (e.pageY * 1) / 50;

        layer.style.transition = "all 0.6s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.support} id="Support">
      <div className={styles.supportContainer}>
        <div className={styles.support_content}>
          <div className={styles.logo}>
            <img src="/Images/favicon.png" alt="img" />
          </div>

          <h2>Lightning-Fast Tech Support, Guaranteed</h2>
          <p>
            As a midsize software development company, we combine the best of
            both worlds. We have the focus and speed of the small IT outsourcing
            companies along with the scalability and expertise of the big ones.
          </p>
          <span>Regan Rosen, CEO at Flod Agency</span>
        </div>
        <div className={styles.shapes}>
          <img
            className="supportAnimation"
            src="/Images/support/shape-1.webp"
            style={{ position: "absolute", top: "-88%", left: "-3%" }}
            alt=""
          />{" "}
          <img
            className="supportAnimation"
            src="/Images/support/shape-4.png"
            style={{ position: "absolute", top: "45%", left: "30%" }}
            alt=""
          />
          <img
            src="/Images/shape-3.png"
            className="moveAny"
            style={{ position: "absolute", top: "31%", right: "21%" }}
            alt=""
          />
          <div
            className="supportAnimation"
            style={{ position: "absolute", top: "-45%", right: "21%" }}
          >
            <img src="/Images/shape-4.png" className="rotateInfi" alt="" />
          </div>
          <img
            src="/Images/support/shape-3.png"
            className="supportAnimation"
            style={{ position: "absolute", top: "28%", right: "6%" }}
            alt=""
          />
          <img
            src="/Images/support/shape-2.png"
            className="supportAnimation2"
            style={{ position: "absolute", bottom: "11%", right: "8%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
