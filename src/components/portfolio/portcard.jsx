import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



function Portcard() {
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
        <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 m-30">
                 <div className="justify-center">
                <img src="./tsnt3.png" className=" w-25 h-25  flex "></img>
                </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSN Automation</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 TSNT Solutions Pvt. Ltd. is to deliver best quality that meets and fulfill customer expectations and by leveraging knowledge, experience and technology.
                 </p>
             </div>
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 m-30">
             <div className="justify-center">
             <img src="./tsntechno3.png" className=" w-25 h-25  flex"></img>
             </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSN Technosolutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 TSNT Solutions Pvt. Ltd. provides Annual Maintenance for panels .We has a team of dedicated engineers and technicians for maintain the works and Maintenance services.
                 </p>
             </div>
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 m-30">
              <div className="justify-center">
              <img src="./power.png" className=" w-25 h-25  flex"></img>
              </div>
                 <h3 className="text-left text-lg font-semibold mb-4">Altarnative Power Solutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 Any generator set used for emergency or primary source must have periodic service and maintenance performed. Setting up a planned maintenance schedule. 
                 </p>
             </div>
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 m-30">
             <div className="justify-center">
             <img src="./tsntf.png" className="w-25 h-25  flex"></img>
             </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSNT Solutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations.  As a premier software startup, it help our Business.
                 </p>
             </div>

        </Slider>
      </div>
      </>
    );
  }
  
  export default Portcard;


// 
