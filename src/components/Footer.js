import React, { useEffect } from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  useEffect(() => {
    document.getElementById("footer").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".footerAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 13;
        const y = (e.pageY * 1) / 10;

        layer.style.transition = "all 0.5s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.upperFooter}>
        <div className="shapes">
          <img
            src="/Images/footer/shape-1.webp"
            className="footerAnimation"
            style={{
              position: "absolute",
              right: "130px",
              top: "-920px",
            }}
            alt=""
          />
          <div
            className="shape2 footerAnimation"
            style={{
              position: "absolute",
              top: "-755px",
              left: "2%",
              zIndex: "-1",
              opacity: "0.5",
            }}
          >
            <img
              src="/Images/footer/shape-2.png"
              className="rotateSlow"
              alt=""
            />
          </div>
          <div
            className="shape2 footerAnimation"
            style={{
              position: "absolute",
              top: "-690px",
              left: "7%",
              zIndex: "-1",
              opacity: "0.5",
            }}
          >
            <img
              src="/Images/footer/shape-3.png"
              className="rotateSlow"
              alt=""
            />
          </div>
          <div
            className="shape2 footerAnimation"
            style={{
              position: "absolute",
              top: "-550px",
              left: "37%",
              zIndex: "-1",
            }}
          >
            <img
              src="/Images/footer/shape-4.png"
              className="rotateSlow"
              alt=""
            />
          </div>
          <div
            className="shape2 footerAnimation"
            style={{
              position: "absolute",
              top: "-510px",
              right: "24%",
              zIndex: "-1",
            }}
          >
            <img
              src="/Images/footer/shape-5.png"
              className="rotateSlow"
              alt=""
            />
          </div>
        </div>
        <div className="container2">
          <div className={styles.upper_grid}>
            <div className={`${styles.gridItem} ${styles.gridItem1}`}>
              <div className={styles.logo}>
                <a href="/">
                  <img src="/Images/logo.png" alt="" />
                </a>
              </div>
              <p>
                Best solution for your it startup business consecteturadipiscing
                elit. Scelerisque amet odio velit auctor. nam elit nulla.
              </p>
              <ul>
                <li>
                  <span style={{ color: "#0064fb" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width={17}
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z"></path>
                      </g>
                    </svg>
                  </span>
                  <a href="tel:8989898989">(312) 895-9800</a>
                </li>
                <li>
                  <span style={{ color: "#FF414B" }}>
                    <svg
                      className="w-64 h-64"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={17}
                      fill="currentColor"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"></path>
                      </g>
                    </svg>
                  </span>
                  hello.me@plod.com
                </li>
                <li>
                  <span style={{ color: "#36CC72" }}>
                    <svg
                      className="w-64 h-64"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={17}
                      fill="currentColor"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
                      </g>
                    </svg>
                  </span>
                  121 St, Melbourne VIC 3000, Australia
                </li>
              </ul>
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem2}`}>
              <h3>Quick Link</h3>

              <ul>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="about-1.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="purchase-guide.html">Purchase Guide</a>
                </li>
                <li>
                  <a href="terms-of-service.html">Terms of Service</a>
                </li>
                <li>
                  <a href="faq.html">Faq’s</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem3}`}>
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li>
                  <a href="about-1.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="purchase-guide.html">Purchase Guide</a>
                </li>
                <li>
                  <a href="terms-of-service.html">Terms of Service</a>
                </li>
                <li>
                  <a href="faq.html">Faq’s</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
              </ul>{" "}
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem4}`}>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="services-details.html">Digital Marketing</a>
                </li>
                <li>
                  <a href="purchase-guide.html">Purchase Guide</a>
                </li>
                <li>
                  <a href="contact.html">Support</a>
                </li>
                <li>
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="services-details.html">Cloud Computing</a>
                </li>
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
              </ul>{" "}
            </div>
            <div className={`${styles.gridItem} ${styles.gridItem5}`}>
              <h3>Newsletter</h3>
              <div className="widget-newsletter">
                <div className="newsletter-content">
                  <p>
                    Best solution for your it startup business consectetur
                    adipiscing elit.
                  </p>
                </div>

                <form>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="EMAIL"
                    required=""
                  />

                  <button
                    type="submit"
                    className="Animated"
                    style={{ pointerEvents: "all", cursor: "pointer" }}
                  >
                    <i>
                      <svg
                        className="w-64 h-64"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width={25}
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M3.741 1.408l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .741-.438zM5 13v6.617L18.85 12 5 4.383V11h5v2H5z"></path>
                        </g>
                      </svg>
                    </i>
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
              <ul>
                <li>
                  <a href="/" target="_blank">
                    <i>
                      <svg
                        className="w-64 h-64"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        fill="currentColor"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fillRule="nonzero"
                            d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i>
                      <svg
                        className="w-64 h-64"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        fill="currentColor"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i>
                      <svg
                        className="w-64 h-64"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        fill="currentColor"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fillRule="nonzero"
                            d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i>
                      <svg
                        className="w-64 h-64"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={20}
                        fill="currentColor"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fillRule="nonzero"
                            d="M7.764 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7S16.585 4 12 4s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157zM12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633z"
                          ></path>
                        </g>
                      </svg>
                    </i>
                  </a>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.LowerFooter}>
        <div className="container2">
          <div className={styles.lowerContent}>
            <p>
              Copyright © 2022 Plod. All Rights Reserved by{" "}
              <a href="/"> EnvyTheme</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
