import React, { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import BlogCard from "./UI/BlogCard";

const Blog = () => {
  useEffect(() => {
    document.getElementById("blog").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".blogAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 13;
        const y = (e.pageY * 1) / 20;

        layer.style.transition = "all 0.6s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  return (
    <div className={styles.blog} id="blog">
      <div className="shapes">
        <img
          src="/Images/Blog/Blogshape-2.webp"
          className="blogAnimation"
          style={{ position: "absolute", top: "-32.5%", left: "-1.5%" }}
          alt=""
        />
        <img
          src="/Images/Blog/Blogshape-1.webp"
          className="blogAnimation"
          style={{ position: "absolute", top: "-32.5%", right: "6%" }}
          alt=""
        />
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Popular Blog Post</h2>
          <p>
            We are try to Update with Latest Article and Blog Post Best
            Strategic Planning
          </p>
        </div>

        <div className={styles.blogPosts}>
          <BlogCard
            title="Branding Involves Developing a Strategy to Creating a Point of Differentiation."
            url="/Images/Blog/blog-1.webp"
            tag="Branding"
          />
          <BlogCard
            title="Design is a Plan or Specification For The Construction of an Object."
            url="/Images/Blog/blog-2.jpg"
            tag="Agency"
          />
          <BlogCard
            title="Branding Involves Developing the Strategy to Create a Point."
            url="/Images/Blog/blog-3.webp"
            tag="Marketing"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
