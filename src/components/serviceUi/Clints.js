import React, { useEffect } from "react";
import Card from "./Card";
import styles from "../../styles/Clints.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Clients = [
  {
    url: "/Images/cleints/clients-1.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "Deanna Hodges",
    title: "Spotify Developer",
  },
  {
    url: "/Images/cleints/clients-2.webp",
    description:
      " ‘’Plod is the best digital agency in our area As a midsize softwaredevelopent company we combine the best of both worlds. We have thefocus and speed of the small it outsurcing companies.",
    name: "Londynn Vargas",
    title: "Web Designer",
  },
  {
    url: "/Images/cleints/clients-3.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "James Anderson",
    title: "Web Developer",
  },
  {
    url: "/Images/cleints/clients-1.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "Deanna Hodges",
    title: "Spotify Developer",
  },
  {
    url: "/Images/cleints/clients-2.webp",
    description:
      " ‘’Plod is the best digital agency in our area As a midsize softwaredevelopent company we combine the best of both worlds. We have thefocus and speed of the small it outsurcing companies.",
    name: "Londynn Vargas",
    title: "Web Designer",
  },
  {
    url: "/Images/cleints/clients-3.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "James Anderson",
    title: "Web Developer",
  },
  {
    url: "/Images/cleints/clients-1.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "Deanna Hodges",
    title: "Spotify Developer",
  },
  {
    url: "/Images/cleints/clients-2.webp",
    description:
      " ‘’Plod is the best digital agency in our area As a midsize softwaredevelopent company we combine the best of both worlds. We have thefocus and speed of the small it outsurcing companies.",
    name: "Londynn Vargas",
    title: "Web Designer",
  },
  {
    url: "/Images/cleints/clients-3.webp",
    description:
      " ‘’As a midsize software developent company we combine the best of both worlds. We have the focus and speed of the small it outsurcing companies along with the scalability and expertise of the big ones.’’",
    name: "James Anderson",
    title: "Web Developer",
  },
];

const Clints = () => {
  useEffect(() => {
    document.getElementById("clints").addEventListener("mousemove", parallax);
    function parallax(e) {
      document.querySelectorAll(".clintAnimation").forEach((layer) => {
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
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div
      className={styles.clints}
      style={{ backgroundColor: "white" }}
      id="clints"
    >
      <div className={styles.container}>
        <div className="shapes">
          <div
            className="clintAnimation"
            style={{
              position: "absolute",
              top: "-70px",
              left: "135px",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <img
              src="/Images/experience/shape-1.webp"
              style={{ objectFit: "contain", marginBottom: "15px" }}
              alt=""
            />
            <img
              src="/Images/experience/shape-2.webp"
              style={{ objectFit: "contain" }}
              alt=""
            />
          </div>
          <img
            src="/Images/footer/shape-1.webp"
            className="clintAnimation"
            style={{
              position: "absolute",
              right: "170px",
              top: "420px",
              width: "100px",
            }}
            alt=""
          />
        </div>
        <div className={styles.heading}>
          <h2>Our Respected Clients</h2>
          <p>
            Which peoples loves us a lot, please check out what about says about
            us
          </p>
        </div>
        <div className="slider_box">
          <Slider {...settings}>
            {Clients.map((item, i) => {
              return (
                <div key={i} className={styles.card_comp}>
                  <Card
                    url={item.url}
                    title={item.title}
                    name={item.name}
                    description={item.description}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clints;
