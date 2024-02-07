import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function SimpleSlider() {
    const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
    };
    return (

        <>
       


      <div className="">
        <Slider className="h-10" {...settings}>
          <div>
          <img src="./tsnauto.png" className=" w-25 h-25 mx-auto"></img>
          </div>
          <div>
           <img src="./tsntech.png" className=" w-25 h-25  mx-auto"></img>
          </div>
          <div>
          <img src="./power.png" className=" w-25 h-25 mx-auto"></img>
          </div>
          <div>
          <img src="./tsntf.png" className=" w-25 h-25 mx-auto"></img>
          </div>

        </Slider>
      </div>
      </>
    );
  }
  
  export default SimpleSlider;


// 
