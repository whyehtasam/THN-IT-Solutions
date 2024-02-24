// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Slider.module.css";
import { useState, useEffect } from "react";
import { imagePath, imagePath2 } from "./sliderImagePath";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " w-11 h-11 flex justify-center items-center rounded absolute right-12"
      }
      style={{ ...style, display: "flex", marginLeft: "10rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        className +
        " w-11 h-11 flex justify-center items-center rounded-md absolute left-12 z-20"
      }
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}
const Carousel = (props) => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [zoom, setZoom] = useState(false);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,

    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full m-auto  ">
      <div className="md:block lg:block ">
        <Slider {...settings}>
          {imagePath.map((item, index) => {
            return (
              <div key={item.id} className="img-wrapper h-full">
                <img
                  src={item.path}
                  alt="imgs"
                  className=" h-full w-full object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className="block md:hidden lg:hidden">
        <Slider {...settings}>
          {imagePath2.map((item, index) => {
            return (
              <div key={item.id} className="img-wrapper h-full">
                <img
                  src={item.path}
                  alt="imgs"
                  className=" h-full w-full object-cover"
                />
              </div>
            );
          })}
        </Slider>
      </div> */}
    </div>
  );
};

export default Carousel;
