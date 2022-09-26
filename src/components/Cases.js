import React, { useEffect } from "react";
import styles from "../styles/Cases.module.css";

const Cases = () => {
  useEffect(() => {
    document.getElementById("case").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".caseAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 12;
        const y = (e.pageY * 1) / 15;

        layer.style.transition = "all 0.5s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className="container2" id="case">
      <div className={styles.shapes}>
        <img
          src="/Images/footer/shape-1.webp"
          className="caseAnimation"
          style={{ position: "absolute", top: "-15%", right: "20%" }}
          width={80}
          alt=""
        />
        <div
          className="moveAny"
          style={{ position: "absolute", top: "50.5%", left: "-5%" }}
        >
          <img src="/Images/shape-3.png" className="rotateSlow" alt="" />
        </div>{" "}
        <div
          className="caseAnimation"
          style={{ position: "absolute", top: "27%", left: "-4%" }}
        >
          <img src="/Images/shape-4.png" className="rotateSlow" alt="" />
        </div>
        <img
          src="/Images/three-line.png"
          style={{ position: "absolute", top: "26.6%", right: "2.9%" }}
          className="caseAnimation"
          alt=""
        />
        <div
          className="caseAnimation"
          style={{
            position: "absolute",
            top: "28%",
            left: "48%",
            opacity: "0.4",
          }}
        >
          <img src="/Images/shape-4.png" className="rotateInfi" alt="" />
        </div>{" "}
        <div
          className="caseAnimation"
          style={{
            position: "absolute",
            top: "26.8%",
            left: "46%",
            opacity: "0.4",
          }}
        >
          <img src="/Images/shape-3.png" className="rotateInfi" alt="" />
        </div>
        <img
          src="/Images/cases/shape-1.webp"
          className="caseAnimation"
          style={{
            position: "absolute",
            top: "68%",
            right: "15%",
            width: "fit-content",
          }}
          alt=""
        />
      </div>

      <div className={styles.cases}>
        <div className={styles.heading}>
          <h2>Our Realizations / Recent Cases</h2>
          <p>
            Best Strategic planning dolor sit amet consectetur adipiscing elit.
            Scelerisque amet odio velit auctor nam elit nulla eget sodales dui
            pulvina
          </p>
        </div>

        <div className={styles.caseBox}>
          <div className={`${styles.caseBoxContent} ${styles.caseBox1}`}>
            <div className={`${styles.case} ${styles.case1}`}>
              <div className={styles.img}>
                <a href="/">
                  <img src="/Images/cases/cases-1.webp" alt="" />
                </a>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.tag1}>Branding</div>
                <div className={styles.tag2}>Development</div>
                <h3>
                  <a href="/">Product Branding and Web Development</a>
                </h3>
                <p>
                  Branding just like your personal identity makes you uniquely
                  you, your brand identity is the special sauce of your business
                  that sets you apart from every other Tom, Dick, and Harry,
                  Inc. Branding just like your personal identity makes you
                  uniquely.
                </p>
              </div>
            </div>
            <div className={`${styles.case} ${styles.case2}`}>
              <div className={styles.img}>
                <a href="/">
                  <img src="/Images/cases/cases-3.webp" alt="" />
                </a>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.tag1}>Business</div>
                <h3>
                  <a href="/">Brand Identity and Mockup</a>
                </h3>
                <p>
                  Branding just like your personal identity makes you uniquely
                  you, your brand identity is the special sauce of your business
                  that sets you apart from every other Tom.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.caseBoxContent} ${styles.caseBox2}`}>
            <div className={`${styles.case} ${styles.case1}`}>
              <div className={styles.img}>
                <a href="/">
                  <img src="/Images/cases/cases-2.webp" alt="" />
                </a>
              </div>

              <div className={styles.caseContent}>
                <div className={styles.tag1}>App Design</div>

                <h3>
                  <a href="/">Banking Mobile iOS App Design</a>
                </h3>
                <p>
                  Branding just like your personal identity makes you uniquely
                  you, your brand identity is the special sauce of your business
                  that sets you apart from every other Tom, Dick, and Harry,
                  Inc. Branding just like your personal identity makes you
                  uniquely.
                </p>
              </div>
            </div>
            <div className={`${styles.case} ${styles.case2}`}>
              <div className={styles.img}>
                <a href="/">
                  <img src="/Images/cases/cases-4.webp" alt="" />
                </a>
              </div>
              <div className={styles.caseContent}>
                <div className={styles.tag1}>App Design</div>
                <h3>
                  <a href="/">Plod Website Design and Development</a>
                </h3>
                <p>
                  Branding just like your personal identity makes you uniquely
                  you, your brand identity is the special sauce of your business
                  that sets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="/" className={`${styles.button} Animated Animatedbutton`}>
          View All Projects
          <i style={{ position: "absolute", right: "20px", top: "16px" }}>
            <svg
              className="w-64 h-64"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={15}
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 16v3h16v-3H4zm0-2h16V7H4v7zM9 3v2h6V3H9zm2 8h2v2h-2v-2z"></path>
              </g>
            </svg>
          </i>{" "}
          &nbsp; &nbsp;
        </a>
      </div>
    </div>
  );
};

export default Cases;
