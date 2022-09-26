import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SmallScreen from "./SmallScreen";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [othersBox, setOthersBox] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setBigScreen(true);
      setOthersBox(true);
    } else if (window.innerWidth < 1200) {
      setBigScreen(false);
      setOthersBox(false);
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 400) {
        setIsScroll(true);
      } else if (window.pageYOffset < 400) {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav className={`${styles.nav} ${isScroll && styles.navFixed}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link to="/" className={styles.imageContainer}>
            <img
              src="/Images/logo.webp"
              width={120}
              height={55}
              alt=""
              className={styles.logo}
            />
          </Link>
          {bigScreen ? (
            <ul className={styles.navUl}>
              <li>
                <Link to={"/"}>
                  Home <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
                  <li>
                    <Link to={"/"}>Home Demo-1</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home Demo-2</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home Demo-3</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home Demo-4</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Home Demo-5</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  About <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
                  <li>
                    <Link to="/about1">About one</Link>
                  </li>
                  <li>
                    <Link to="/about1">About two</Link>
                  </li>
                  <li>
                    <Link to="/about1">About three</Link>
                  </li>
                  <li>
                    <Link to="/about1">About four</Link>
                  </li>
                  <li>
                    <Link to="/about1">About five</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>
                  Services <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
                  <li>
                    <Link to="/services1">Services one</Link>
                  </li>
                  <li>
                    <Link to="/services1">Services two</Link>
                  </li>
                  <li>
                    <Link to="/services1">Services three</Link>
                  </li>
                  <li>
                    <Link to="/services1">Services four</Link>
                  </li>
                  <li>
                    <Link to="/services1">Services five</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>
                  Pages <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
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
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/Demo"}>Events</Link>
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        paddingTop: "5px",
                        fontSize: "12px",
                      }}
                    >
                      <ChevronRightIcon />
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/Demo"}>Courses</Link>{" "}
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        paddingTop: "5px",
                        fontSize: "12px",
                      }}
                    >
                      <ChevronRightIcon />
                    </span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/Demo"}>Shop</Link>{" "}
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        paddingTop: "5px",
                        fontSize: "12px",
                      }}
                    >
                      <ChevronRightIcon />
                    </span>
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
              <li>
                <Link to={"/"}>
                  Case Study <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
                  <li>
                    <Link to="/case-study/case-study-1">Case Study one</Link>
                  </li>
                  <li>
                    <Link to="/case-study/case-study-2">Case Study two</Link>
                  </li>
                  <li>
                    <Link to="/case-study/case-study-3">
                      Case Study Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>
                  Blog <span> +</span>
                </Link>

                <ul className={styles.dropDown}>
                  <li>
                    <Link to="/blog/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog/blogRightSidebar">Blog Right Sidebar </Link>
                  </li>
                  <li>
                    <Link to="/blog/blog-standard">Blog Standard </Link>
                  </li>
                  <li>
                    <Link to="/blog/blog-details">Blog Details </Link>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          ) : (
            <SmallScreen show={show} />
          )}

          <div
            className={styles.otherOptions}
            id="otherOptions"
            style={{
              opacity: othersBox ? 1 : 0,
              transform: othersBox ? "scaleX(1)" : "scaleX(0)",
            }}
          >
            {/* <div className={styles.searchImage}>
            <img
                src="/Images/search.webp"
                alt="the author"
                width={23}
                height={23}
                className={styles.search}
              /> 
              <form action="" className="">
            <input type="text" />
            <button>
              <img
                src="https://cdn-icons.flaticon.com/png/512/2801/premium/2801881.png?token=exp=1654627828~hmac=00c7824feeeb72c9715514393dd7f95e"
                alt=""
                width={30}
                className={styles.search}
              />
            </button>
          </form> 
            </div> */}
            <div className={styles.option2}>
              <button
                className={`Animated ${styles.navButton} `}
                style={{ backgroundColor: "#ff414b" }}
              >
                Let’s Talk
                <MessageOutlinedIcon
                  style={{ width: "15px", marginLeft: "10px" }}
                />
              </button>
            </div>
            {/* <div className={styles.option3}>
            <div className={styles.hamburger}>
              <div className={`${styles.line1} ${styles.hamItem}`}></div>
              <div className={`${styles.line2} ${styles.hamItem}`}></div>
              <div className={`${styles.line3} ${styles.hamItem}`}></div>
            </div>
          </div> */}
          </div>
          {!bigScreen && (
            <div className={styles.hamBurgersBox}>
              <div
                className={styles.dottedHamburger}
                onClick={() => setOthersBox(!othersBox)}
              >
                <div className={styles.dottedHamItem}></div>
                <div className={styles.dottedHamItem}></div>
                <div className={styles.dottedHamItem}></div>
              </div>

              {!show ? (
                <div
                  className={styles.menuHamburgerLine}
                  onClick={() => setShow(!show)}
                >
                  <div className={styles.menuHamItem}></div>
                  <div className={styles.menuHamItem}></div>
                  <div className={styles.menuHamItem}></div>
                </div>
              ) : (
                <div
                  className={styles.menuHamburgerCross}
                  onClick={() => setShow(!show)}
                >
                  <span>X</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
