import React, { useEffect, useState } from "react";
import styles from "./BacktoTop.module.css";

const BacktoTop = () => {
  const [show, setshow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 900) {
        setshow(true);
      } else if (window.pageYOffset < 900) {
        setshow(false);
      }
    });
  }, []);

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={styles.BacktoTop}
      onClick={moveToTop}
      style={{
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        bottom: show ? "50px" : "-100px",
      }}
    >
      <i>
        <svg
          className="w-64 h-64"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={35}
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"></path>
          </g>
        </svg>
      </i>
    </div>
  );
};

export default BacktoTop;
