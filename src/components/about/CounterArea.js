import React, { useEffect } from "react";
import BriefCase from "./BriefCase";
import styles from "./CounterArea.module.css";
import Flag from "./Flag";
import Trophy from "./Trophy";
import User from "./User";

const CounterArea = () => {
  const startCount = (ofSet, counter) => {
    const gratter = ofSet - 40;
    const lasser = ofSet + 50;

    if (window.pageYOffset >= gratter) {
      if (window.pageYOffset <= lasser) {
        counter.forEach((curEle) => {
          let inicrement = 0;
          const updateNum = () => {
            // The Final Value
            const targetNum = parseInt(curEle.dataset.count);
            // The Current Value
            const initialNum = parseInt(curEle.innerText);
            // How Much Add
            const incrementNum = Math.trunc(targetNum / 30);
            if (parseInt(curEle.innerText) > parseInt(curEle.dataset.count)) {
              curEle.innerText = targetNum;
            }
            if (inicrement <= 30) {
              curEle.innerText = initialNum + incrementNum;
              inicrement += 1;
              setTimeout(updateNum, 50);
            }
          };

          updateNum();
        });
      }
    }
  };

  useEffect(() => {
    const ele = document.querySelectorAll(".NumberCounterVar");
    document.addEventListener("scroll", () => {
      if (window.pageYOffset >= 1430) {
        if (window.pageYOffset <= 1480) {
          if (window.innerWidth >= 994) {
            startCount(1450, ele);
          }
        }

        if (window.pageYOffset >= 2780) {
          if (window.pageYOffset <= 2830) {
            if (window.innerWidth >= 767 && window.innerWidth <= 994) {
              startCount(2800, ele);
            }
          }
        }
      }

      if (window.pageYOffset >= 3300) {
        if (window.pageYOffset <= 3430) {
          if (window.innerWidth >= 350 && window.innerWidth <= 767) {
            startCount(3400, ele);
          }
        }
      }
      if (window.pageYOffset >= 3550) {
        if (window.pageYOffset <= 3590) {
          if (window.innerWidth <= 350) {
            startCount(3600, ele);
          }
        }
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="pbpt">
      <div className="container">
        <div className={styles.counterArea}>
          <div className={styles.gridArea}>
            <div className={styles.singleCounter}>
              <div className={styles.icon}>
                <i>
                  <User />
                </i>
              </div>
              <h3>
                <span className="NumberCounterVar" data-count="3230">
                  0{" "}
                </span>
                <span className="sign-icon">+</span>
              </h3>
              <p>Total Cases</p>
            </div>

            <div className={styles.singleCounter}>
              <div className={styles.icon}>
                <i>
                  <BriefCase />
                </i>
              </div>
              <h3>
                <span className="NumberCounterVar" data-count="3026">
                  0{" "}
                </span>
                <span className="sign-icon">+</span>
              </h3>
              <p>Case Solved</p>
            </div>

            <div className={styles.singleCounter}>
              <div className={styles.icon}>
                <i>
                  <Trophy />
                </i>
              </div>
              <h3>
                <span className="NumberCounterVar" data-count="320">
                  0
                </span>
                <span className="sign-icon">+</span>
              </h3>
              <p>Winning Awards</p>
            </div>

            <div className={styles.singleCounter}>
              <div className={styles.icon}>
                <i>
                  <Flag />
                </i>
              </div>
              <h3>
                <span className="NumberCounterVar" data-count="102">
                  0
                </span>
                <span className="sign-icon">+</span>
              </h3>
              <p>Country Over</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
