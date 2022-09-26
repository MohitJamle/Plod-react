import React, { useState } from "react";
import styles from "./shortCSS/smallScreen.module.css";
import { Link } from "react-router-dom";

const SmallScreen = ({ show }) => {
  const [homeExpand, setHomeExpand] = useState(true);
  const [aboutExpand, setAboutExpand] = useState(true);
  const [serviceExpand, setserviceExpand] = useState(true);
  const [pagesExpand, setpagesExpand] = useState(true);
  const [caseExpand, setCaseExpand] = useState(true);
  const [blogExpand, setBlogExpand] = useState(true);
  return (
    <div
      className={styles.SmallScreen}
      style={{ height: show ? "300px" : "0.001px" }}
    >
      <ul className={styles.navSmallUl}>
        <li onClick={() => setHomeExpand(!homeExpand)}>
          <Link to={"/"}>
            Home
            {homeExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: homeExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/Demo"}>Home Demo - 1</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Home Demo - 2</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Home Demo - 3</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Home Demo - 4</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Home Demo - 5</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => setAboutExpand(!aboutExpand)}>
          <Link to="/">
            About{" "}
            {aboutExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: aboutExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/about1"}>About one</Link>
            </li>
            <li>
              <Link to={"/Demo"}>About two</Link>
            </li>
            <li>
              <Link to={"/Demo"}>About three</Link>
            </li>
            <li>
              <Link to={"/Demo"}>About four</Link>
            </li>
            <li>
              <Link to={"/Demo"}>About five</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => setserviceExpand(!serviceExpand)}>
          <Link to={""}>
            Services{" "}
            {serviceExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: serviceExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/services1"}>Services one</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Services two</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Services three</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Services four</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Services five</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => setpagesExpand(!pagesExpand)}>
          <Link to={"/"}>
            Pages{" "}
            {pagesExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: pagesExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/Demo"}>Team Member</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Pricing</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/Demo"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Events</Link>
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            </li>
            <li>
              <Link to={"/Demo"}>Courses</Link>
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            </li>
            <li>
              <Link to={"/Demo"}>Shop</Link>
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            </li>
            <li>
              <Link to={"/Demo"}>Profile Authentication</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Membership Levels</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Purchase Guide</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Terms of Service</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/Demo"}>404 Error</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Coming Soon </Link>
            </li>
          </ul>
        </li>
        <li onClick={() => setCaseExpand(!caseExpand)}>
          <Link to={"/"}>
            Case Study{" "}
            {caseExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: caseExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/Demo"}>Case Study one</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Case Study two</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Case Study Details</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => setBlogExpand(!blogExpand)}>
          <Link to={"/"}>
            Blog{" "}
            {blogExpand ? (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> +</span>
            ) : (
              <span style={{ fontSize: "18px", fontWeight: "700" }}> -</span>
            )}
          </Link>

          <ul
            className={styles.dropDown}
            style={{ height: blogExpand ? 0 : "fit-content" }}
          >
            <li>
              <Link to={"/Demo"}>Blog</Link>
            </li>
            <li>
              <Link to={"/Demo"}>Blog Right Sidebar </Link>
            </li>
            <li>
              <Link to={"/Demo"}>Blog Standard </Link>
            </li>
            <li>
              <Link to={"/Demo"}>Blog Details </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SmallScreen;
