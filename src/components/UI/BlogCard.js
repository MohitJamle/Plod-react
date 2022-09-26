import React from "react";
import styles from "./BlogCard.module.css";
import Clock from "./Clock";
import Message from "./message";
import { ArrowForward } from "@mui/icons-material";

const BlogCard = (props) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.Blog}>
        <div className={styles.blogImage}>
          <a href="/">
            <img src={props.url} alt="" />
          </a>
        </div>

        <div className={styles.blogContent}>
          <ul>
            <li className={styles.Blogtag}>{props.tag}</li>
            <li>
              <i>
                <Clock />
              </i>
              March 14,&nbsp;2022
            </li>
            &nbsp;
            <li>
              <i>
                <Message />
              </i>
              (0) Comment
            </li>
          </ul>
          <h3>
            <a href="/">{props.title}</a>
          </h3>
          <a href="/" className={styles.butn}>
            Read More &nbsp;
            <ArrowForward
              fontSize="14px"
              style={{ marginBottom: "-3px", fontWeight: "800" }}
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
