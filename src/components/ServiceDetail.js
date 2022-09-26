import React, { useEffect } from "react";
import styles from "../styles/ServiceDetail.module.css";
import { ArrowForward } from "@mui/icons-material";

const ServiceDetail = () => {
  useEffect(() => {
    document
      .getElementById("ServiceDetail")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".mouseAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 16;
        const y = (e.pageY * 1) / 30;

        layer.style.transition = "all 0.25s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.ServiceDetail} id="ServiceDetail">
      <div className={styles.ServiceDetailBox}>
        <div className={styles.ServiceDetailBoxItem}>
          <div className={styles.imgBox}>
            <a href="/">
              <img src="/Images/features/features-1.webp" alt="" />
            </a>
          </div>
          <h3>
            <a href="/">Strategic Planning</a>
          </h3>
          <p>
            Best Strategic planning dolor sit amet, consectetur adipiscing elit.
            Scelerisque amet odio velit, eu, auctor. Aliquet nam elit nulla eget
            sodales dui pulvinar.
          </p>
          <a
            href="/about"
            className={`${styles.featureButton} ${styles.button}  Animated Animatedbutton `}
          >
            Read More &nbsp;
            <ArrowForward
              fontSize="14px"
              style={{ marginBottom: "-3px", fontWeight: "800" }}
            />{" "}
          </a>{" "}
        </div>
        <div className={styles.ServiceDetailBoxItem}>
          <div className="Shapes">
            <img
              src="/Images/shape-5(2).png"
              className={`mouseAnimation ${styles.shape5}`}
              alt=""
            />
            <img
              src="/Images/shape-4(2).png"
              className={`mouseAnimation ${styles.shape4}`}
              alt=""
            />
            <img
              src="/Images/shape-4.png"
              className={`moveAny ${styles.shape41}`}
              alt=""
            />
            <img
              src="/Images/shape-3.png"
              className={` ${styles.moveFast} ${styles.shape41}`}
              alt=""
            />
          </div>
          <div className={styles.imgBox}>
            <a href="/">
              <img src="/Images/features/features-2.webp" alt="" />
            </a>
          </div>

          <h3>
            <a href="/">Research & Development</a>
          </h3>
          <p>
            Plod is totally desigital techonology based creative agency ipsum
            dolor sit amet, consectetur adipiscing elit. Scelerisque amet odio
            velit, eu, auctor.
          </p>
          <div className={styles.button}>
            <a
              href="/about"
              className={`${styles.featureButton} ${styles.button}  Animated Animatedbutton `}
            >
              Read More &nbsp;
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>{" "}
          </div>
        </div>
        <div className={styles.ServiceDetailBoxItem}>
          <div className={styles.imgBox}>
            <a href="/">
              <img src="/Images/features/features-3.webp" alt="" />
            </a>
          </div>
          <h3>
            <a href="/">Design & Implimentation</a>
          </h3>
          <p>
            Best Strategic planning dolor sit amet, consectetur adipiscing elit.
            Scelerisque amet odio velit, eu, auctor. Aliquet nam elit nulla eget
            sodales dui pulvinar.
          </p>
          <a
            href="/about"
            className={`${styles.featureButton} ${styles.button}  Animated Animatedbutton `}
          >
            Read More &nbsp;
            <ArrowForward
              fontSize="14px"
              style={{ marginBottom: "-3px", fontWeight: "800" }}
            />{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
