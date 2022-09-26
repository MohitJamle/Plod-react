import { ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import styles from "../styles/Experience.module.css";

const Experience = () => {
  const [bigScreen, setbigScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 992) {
      var element = document.getElementById("expImage");
      element.classList.remove("moveAnimationE");
      setbigScreen(false);
    }
    document
      .getElementById("Experience")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".moveAnimationE").forEach((layer) => {
        const x = (e.pageX * 1) / 77;
        const y = (e.pageY * 1) / 100;

        layer.style.transition = "all 0.2s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  useEffect(() => {
    document
      .getElementById("Experience")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".moveAnimation2").forEach((layer) => {
        const x = (e.pageX * 1) / 15;
        const y = (e.pageY * 1) / 20;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  useEffect(() => {
    document
      .getElementById("Experience")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".lightmouseAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 20;
        const y = (e.pageY * 1) / 35;

        layer.style.transition = "all 0.5s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.experienceBox}>
      <div className={"container"} id="Experience">
        <div className={styles.experience}>
          <div className={styles.experienceContainer}>
            <div className={styles.mainContainer}>
              <div className={styles.imgBox}>
                <img src="/Images/favicon.png" alt="" />
              </div>
              <h1>Over 12 Year Professional Experiences</h1>
              <p>
                Best Strategic planning dolor sit amet consectetur adipiscing
                elit. Scelerisque amet odio velit auctor. nam elit nulla eget
                sodales dui pulvinar. Best Strategic planning dolor sit sectetur
                morethe
              </p>
              <p>Scelerisque amet odio velit eu auctor. Aliquet nam elit.</p>
              <div className={styles.experienceContentBox}>
                <div className={styles.shapes}>
                  <div
                    className="mover lightmouseAnimation"
                    style={{
                      position: "absolute",
                      left: "-52px",
                      top: "10px",
                      zIndex: "-1",
                    }}
                  >
                    <img
                      src="/Images/shape-3.png"
                      className=" rotateInfi"
                      alt=""
                    />
                  </div>
                  <img
                    src="/Images/shape-4.png"
                    style={{
                      position: "absolute",
                      left: "-52px",
                      top: "100px",
                      zIndex: "-1",
                    }}
                    className="moveAny"
                    alt=""
                  />
                </div>
                <div className={styles.experienceContent}>
                  <img src="/Images/experience/img1.webp" alt="" />
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. risque amet odio velit eu auctor. Aliquet
                    nam elit nulla eget sodales dui pulvinar. Best eone
                    Strategic planning dolor.
                  </p>
                </div>
                <div className={styles.experienceContent}>
                  <img src="/Images/experience/img2.webp" alt="" />
                  <p>
                    Plod digital agency for your start planning dolor sit amet
                    consectetur adipiscing elit. Scelerisque amet odio velit eu
                    auctor. Aliquet nam elit nulla eget sodales dui pulvinar.
                    Best Strategic planning.
                  </p>
                </div>
                <div className={styles.experienceContent}>
                  <img src="/Images/experience/img3.webp" alt="" />
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. risque amet odio velit eu auctor. Aliquet
                    nam elit nulla eget sodales dui pulvinar. Best eone
                    Strategic planning dolor.
                  </p>
                </div>
              </div>
              <div className={styles.experienceContent}>
                <a href="/about" className={`Animated Animatedbutton `}>
                  Read More &nbsp;
                  <ArrowForward
                    fontSize="14px"
                    style={{ marginBottom: "-3px", fontWeight: "800" }}
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>

          <div id="expImage">
            <img
              src="/Images/experience/experience.webp"
              className={`${bigScreen ? "moveAnimationE" : ""} ${styles.experienceBannerImageMainImg
                }`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.shapes}>
        <img
          src="/Images/experience/shape-1.webp"
          className="lightmouseAnimation"
          img_position={10}
          style={{ position: "absolute", left: "44.8%", bottom: "15.5%" }}
          alt=""
        />
        <img
          src="/Images/experience/shape-2.webp"
          className="moveAnimation2"
          img_position={10}
          style={{ position: "absolute", left: "43.7%", bottom: "13%" }}
          alt=""
        />{" "}
        <div
          className="moveAnimation2"
          style={{ position: "absolute", left: "31.8%", bottom: "19%" }}
        >
          <img
            src="/Images/shape-4.png"
            className="rotateInfi"
            img_position={10}
            style={{ position: "absolute", left: "43.7%", bottom: "10%" }}
            alt=""
          />
        </div>
        <div
          className="mover moveAny"
          style={{ position: "absolute", left: "30%", bottom: "5%" }}
        >
          <img
            src="/Images/shape-3.png"
            className=" rotateInfi"
            style={{ position: "absolute", zIndex: "-1" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
