import React, { useEffect, useState } from "react";
import styles from "./TopHeader.module.css";

const TopHeader = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsShown(true);
    }
  }, []);

  const showHandler = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <div className={styles.topheader}>
        <div className={styles.showhide} onClick={showHandler}>
          <h3>Header Information</h3>
        </div>
        <div className="container">
          <div
            className={styles.top_header}
            style={{
              height: !isShown ? "0" : "auto",
              display: !isShown ? "none" : "flex",
            }}
          >
            <div className={styles.top_links}>
              <ul>
                <li>
                  <span>
                    <img
                      width={15}
                      height={15}
                      src="/svg/customerService.svg"
                      alt=""
                    />
                    <a href="tel:3128959800">(312) 895-9800</a>
                  </span>
                </li>

                <li>
                  <span>
                    <img width={15} height={15} src="/svg/earth.svg" alt="" />
                    <a href="mailto:hello.me@plod.com">hello.me@plod.com</a>
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.top_social_links}>
              <ul>
                <li>
                  <a href="/" target="blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.icon}
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="/" target="_blank">
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                      </g>
                    </svg>
                  </a>
                  <a href="/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={styles.icon}
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fillRule="nonzero"
                          d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                        ></path>
                      </g>
                    </svg>
                  </a>

                  <a href="/" target="_blank">
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fillRule="nonzero"
                          d="M12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537c-.282.447.268.951.689.631l3.155-2.394a.6.6 0 0 1 .723 0l2.337 1.75a1.5 1.5 0 0 0 2.169-.4l2.937-4.66c.282-.448-.268-.952-.689-.633l-3.155 2.396a.6.6 0 0 1-.723 0l-2.337-1.75a1.5 1.5 0 0 0-2.169.4l-2.937 4.66z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
