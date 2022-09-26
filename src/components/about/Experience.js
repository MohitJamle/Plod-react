import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const [bigScreen, setbigScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 992) {
      var element = document.getElementById("expImage");
      element.classList.remove("moveAnimation");
      setbigScreen(false);
    }
    if (window.innerWidth < 992) {
      document
        .getElementById("Experience")
        .addEventListener("mousemove", parallax);

      function parallax(e) {
        document.querySelectorAll(".BigImgAnimation").forEach((layer) => {
          const x = (e.pageX * 1) / 60;
          const y = (e.pageY * 1) / 55;

          layer.style.transition = "all 0.2s linear";
          layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
        });
      }
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.container} id="Experience">
      <div className={styles.experience}>
        <div className={` ${styles.experienceBannerImage}`} id="expImage">
          <img
            src="/Images/about.webp"
            className={` ${bigScreen ? "BigImgAnimation" : ""} ${styles.experienceBannerImageMainImg
              }`}
            alt=""
          />
        </div>

        <div className={styles.experienceContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.imgBox}>
              <img src="/Images/favicon.png" alt="" />
            </div>
            <h1>
              Over 12 Year Professional <br /> Experiences
            </h1>
            <p>
              Best Strategic planning dolor sit amet consectetur adipiscing
              elit. Scelerisque amet odio velit auctor. nam elit nulla eget
              sodales dui pulvinar. Best Strategic planning dolor sit sectetur
              morethe
            </p>
            <p>Scelerisque amet odio velit eu auctor. Aliquet nam elit.</p>
            <div className={styles.experienceContentBox}>
              <div className={styles.experienceContent}>
                <img src="/Images/experience/img1.webp" alt="" />
                <h4 className={styles.expConHead}>Strategic Planning</h4>
                <p>
                  Best Strategic planning dolor sit amet consectetur adipiscing
                  elit. risque amet odio velit eu auctor. Best eone Strategic
                  planning dolor.
                </p>
              </div>
              <div className={styles.experienceContent}>
                <img src="/Images/experience/img2.webp" alt="" />
                <h4 className={styles.expConHead}>Achieve the Goal</h4>
                <p>
                  Plod digital agency for your start planning dolor sit amet
                  consectetur adipiscing elit. Scelerisque amet odio velit eu
                  auctor. Aliquet nam elit nulla eget sodales dui pulvinar.
                </p>
              </div>
              <div className={styles.experienceContent}>
                <img src="/Images/experience/img3.webp" alt="" />
                <h4 className={styles.expConHead}>Startup Applications</h4>
                <p>
                  Best Strategic planning dolor sit amet consectetur adipiscing
                  elit. risque amet odio velit eu auctor
                </p>
              </div>
            </div>
            <div className={styles.experienceContent}>
              <a
                href="/"
                className={`${styles.btn} Animated Animatedbutton`}
                style={{
                  backgroundColor: "#ff414b",
                  margin: "auto",
                  marginTop: "15px",
                }}
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
      </div>
    </div>
  );
};

export default Experience;
