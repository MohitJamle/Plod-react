import React, { useEffect } from "react";
import styles from "../styles/ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  useEffect(() => {
    document
      .getElementById("ImageSlider")
      .addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".lightmouseAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 24;
        const y = (e.pageY * 1) / 25;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  useEffect(() => {
    document.getElementById("header").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".lightmouseAnimation").forEach((layer) => {
        const x = (e.pageX * 1) / 24;
        const y = (e.pageY * 1) / 40;

        layer.style.transition = "all 0.4s linear";
        layer.style.transform = `translateY(${y}px) translateX(${x}px) `;
      });
    }

    return () => {
      document.removeEventListener("mousemove", () => { });
    };
  }, []);
  const allImages = [
    "/Images/parteners/partner-1.webp",
    "/Images/parteners/partner-2.webp",
    "/Images/parteners/partner-3.webp",
    "/Images/parteners/partner-4.webp",
    "/Images/parteners/partner-5.webp",
    "/Images/parteners/partner-1.webp",
    "/Images/parteners/partner-2.webp",
    "/Images/parteners/partner-3.webp",
    "/Images/parteners/partner-4.webp",
    "/Images/parteners/partner-5.webp",
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.slider} id="ImageSlider">
      <img
        src="/Images/shape-5.png"
        alt=""
        className={`lightmouseAnimation ${styles.shape5}`}
        style={{
          marginLeft: "220px",
          position: "absolute",
          top: "-80px",
          zIndex: "-1",
          width: "185px",
          transition: "all 0.3s ease-in-out",
        }}
      />
      <div className={styles.sliderBox}>
        <Slider {...settings}>
          {allImages.map((item, i) => (
            <div className={styles.sliderImgContainer} key={i}>
              <img src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <img
        src="/Images/shape-6.png"
        alt=""
        className={`lightmouseAnimation ${styles.shape5}`}
        style={{
          position: "absolute",
          width: "185px",
          right: "158px",
          bottom: "-20px",
        }}
      />
    </div>
  );
};

export default ImageSlider;
