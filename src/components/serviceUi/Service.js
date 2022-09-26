import { ArrowForward } from "@mui/icons-material";
import React, { useEffect } from "react";
import styles from "../../styles/Service.module.css";

const Service = () => {
  useEffect(() => {
    document.getElementById("Service").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".moveAnimations").forEach((layer) => {
        const x = (e.pageX * 1) / 30;
        const y = (e.pageY * 1) / 60;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  useEffect(() => {
    document.getElementById("Service").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".moveAnimations2").forEach((layer) => {
        const x = (e.pageX * 1) / 30;
        const y = (e.pageY * 1) / 60;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) scaleX(-1) scaleY(-1) rotate(-30deg) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div
      className={styles.service}
      id="Service"
      style={{ overflow: "visible" }}
    >
      <div className={styles.service_content}>
        <div className={styles.service_grid}>
          {/*  */}

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item1}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"></path>
                  </g>
                </svg>{" "}
              </div>
            </div>
            <h3>
              <a href="/">Brand Identity Design</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Branding just like your personal identity makes you uniquely you
              your brand identity is the special sauce of your business that
              sets you apart from every other Tom Dick and Harry Inc.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item2}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <h3>
              <a href="/">Digital Marketing</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Plod offering you the best digital marketing services to just like
              your personal identity makes you uniquely you, your brand identity
              is the special sauce of your to our customer.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item3}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"></path>
                  </g>
                </svg>{" "}
              </div>
            </div>
            <h3>
              <a href="/">Design and Development</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Plod offering you the best digital marketing services to just like
              your personal identity makes you uniquely you, your brand identity
              is the special sauce of your to our customer.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item4}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19.938 8H21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1.062A8.001 8.001 0 0 1 12 23v-2a6 6 0 0 0 6-6V9A6 6 0 1 0 6 9v7H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1.062a8.001 8.001 0 0 1 15.876 0zM3 10v4h1v-4H3zm17 0v4h1v-4h-1zM7.76 15.785l1.06-1.696A5.972 5.972 0 0 0 12 15a5.972 5.972 0 0 0 3.18-.911l1.06 1.696A7.963 7.963 0 0 1 12 17a7.963 7.963 0 0 1-4.24-1.215z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <h3>
              <a href="/">IT Consulting Service</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Plod offering you the best digital marketing services to just like
              your personal identity makes you uniquely you, your brand identity
              is the special sauce of your to our customer.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item5}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M17 21H7A6 6 0 0 1 5.008 9.339a7 7 0 1 1 13.984 0A6 6 0 0 1 17 21zm0-12a5 5 0 1 0-9.994.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6.003 6.003 0 0 1 17 9z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <h3>
              <a href="/">Cloud Computing</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Plod offering you the best digital marketing services to just like
              your personal identity makes you uniquely you, your brand identity
              is the special sauce of your to our customer.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          <div
            className={`${styles.service_grid_item} `}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={`${styles.iconBox} ${styles.service_item6}`}>
              <div className={styles.icon}>
                <svg
                  className="w-64 h-64"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <h3>
              <a href="/">Domain and Hosting</a>
            </h3>
            <p style={{ textAlign: "center" }}>
              Plod offering you the best digital marketing services to just like
              your personal identity makes you uniquely you, your brand identity
              is the special sauce of your to our customer.
            </p>
            <a href="/" className={styles.service_btn}>
              Read More{" "}
              <ArrowForward
                fontSize="14px"
                style={{ marginBottom: "-3px", fontWeight: "800" }}
              />{" "}
            </a>
          </div>

          {/*  */}
        </div>
      </div>
      <div className={styles.shapes}>
        <img
          src="/Images/shape-4.png"
          className="moveAny"
          style={{
            position: "absolute",
            top: "24%",
            left: "40%",
            zIndex: "1",
          }}
          alt=""
        />{" "}
        <div
          className="shape2 moveAnimations"
          style={{
            position: "absolute",
            top: "20%",
            left: "45%",
            objectFit: "contain",
            zIndex: "1",
          }}
        >
          <img
            src="/Images/shape-3.png"
            className=" rotateInfi"
            style={{
              position: "absolute",
              objectFit: "contain",
              zIndex: "1",
            }}
            alt=""
          />
        </div>
        <img
          src="/Images/shape-2.png"
          className=" moveAnimations2"
          style={{
            position: "absolute",
            bottom: "56%",
            left: "-4%",
            objectFit: "contain",
            maxWidth: "50px",
            zIndex: "-1",
          }}
          alt=""
        />{" "}
        <img
          src="/Images/service/shape-4.webp"
          className=" moveAnimations"
          style={{
            position: "absolute",
            bottom: "38%",
            right: "0",
            zIndex: "1",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Service;

/* <img src="/Images/service/quill-pen.svg" alt="" />; */
