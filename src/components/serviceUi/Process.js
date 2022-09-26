import React from "react";
import styles from "./Process.module.css";

const Process = () => {
  return (
    <div className={styles.process}>
      <div className="container">
        <div className={styles.process_inner_box}>
          <div className={styles.process_content}>
            <div className={styles.singleProcessBox}>
              <div className={styles.singleProcess}>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={40}
                    color="white"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 10.938A8.004 8.004 0 0 0 11.938 4H5v6.938zm0 2.013V20h14V4h-5.05A10.003 10.003 0 0 1 5 12.95zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm11 14h2v2h-2v-2z"></path>
                    </g>
                  </svg>
                </i>
                <p>Research</p>
              </div>
            </div>

            <div className={styles.singleProcessBox}>
              <div
                className={styles.singleProcess}
                style={{ background: "#36cc72" }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={40}
                    color="white"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z"></path>
                    </g>
                  </svg>
                </i>
                <p>Analyze</p>
              </div>
            </div>

            <div className={styles.singleProcessBox}>
              <div
                className={styles.singleProcess}
                style={{ background: "#ff414b" }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={40}
                    color="white"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"></path>
                    </g>
                  </svg>
                </i>
                <p>Design</p>
              </div>
            </div>

            <div className={styles.singleProcessBox}>
              {" "}
              <div
                className={styles.singleProcess}
                style={{ background: "#ff6d3d" }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={40}
                    color="white"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                    </g>
                  </svg>
                </i>
                <p>Testing</p>
              </div>
            </div>
          </div>

          <div className={styles.process_shape}>
            <img
              alt=""
              src="https://templates.envytheme.com/plod/default/assets/images/process-bar.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
