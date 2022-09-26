import React, { useEffect } from "react";
import styles from "../styles/Header.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  useEffect(() => {
    document.getElementById("header").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".moveAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 45;
        const y = (e.pageY * 1) / 55;

        layer.style.transition = "all 0.3s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div id="header">
      <div className={styles.banner}>
        <div className={styles.bannerDiv}>
          <div className={styles.shape1}>
            <img src="/Images/shape-1.webp" width={125} height={125} alt="" />
          </div>
          <div className={styles.plodTape}>
            {" "}
            <span className={styles.plodTapeImage}>
              <img src="/Images/favicon.png" width={20} height={20} alt="" />
            </span>{" "}
            &nbsp; # Plod Best Startup Company.
          </div>
          <h1>We Are Here, To Help Your Startup Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio at ut
            tincidunt porttitor molestie aliquet quam cursus. Rhoncus donec
            libero et volutpat erat posuere sagittis cursus posuere.
          </p>
          <a href="/about" className={`Animated ${styles.Animatedbutton} `}>
            Read More &nbsp;
            <ArrowForwardIcon
              fontSize="14px"
              style={{ marginBottom: "-3px", fontWeight: "800" }}
            />{" "}
          </a>
          <div className={styles.shape2}>
            <img src="/Images/shape-2.png" width={65} height={35} alt="" />
          </div>
          <div className={styles.shape3}>
            <img src="/Images/shape-3.png" width={8} height={15} alt="" />
          </div>
          <div className={`${styles.shape4} ${styles.moveAny}`}>
            <img src="/Images/shape-4.png" alt="" />
          </div>
        </div>

        <div className={styles.bannerImageBox}>
          <img
            src="/Images/main-pic.webp"
            img_position="5"
            alt=""
            className={`${window.innerWidth > 992 ? "moveAnimation" : ""} ${styles.bannerImage
              }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
