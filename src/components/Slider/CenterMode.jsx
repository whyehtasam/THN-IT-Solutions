// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../wrappers/Container";
function CenterMode() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: "center",
    centerMode: true,
  
    centerPadding: "60px",
   
  };
  return (
    <section className="">
      <Container className=''>
        <div className="slider-container w-5/12 mx-auto">
          <Slider {...settings}>
           
            <div className="m-4 h-full">
              <div className="card w-fit h-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
                </div>
              </div>
            </div>
            <div className="m-4 h-full">
              <div className="card w-fit h-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
                </div>
              </div>
            </div>
            <div className="m-4 h-full">
              <div className="card w-fit h-56 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                 
                </div>
              </div>
            </div>
           
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default CenterMode;
