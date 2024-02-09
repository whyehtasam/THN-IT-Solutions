import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



function Testimonial() {
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
        <div className="shadow-xl border-[2px] rounded-lg justify-center p-4">
              
                <div className="flex gap-2">
                <img src="./icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
                <div className="justify-start">
                <h3 className="text-left text-sm font-semibold">Pintu Choudhury  </h3>
                <p className="text-xs">TSNT Solutions</p>
                <p className="text-xs">Director</p>
                </div>
                </div>
                 <p className="py-4 px-2 text-sm text-justify font-medium  text-gray-500">
                 We are extremely pleased with the outcome of my website. THN IT Solutions delivered 
                 exactly what I envisioned, and the attention to detail is impeccable. Highly recommend
                 their services! 
                 </p>
                 <div className="rating"></div>
             </div>
             <div className="shadow-xl border-[2px] rounded-lg justify-center p-4">
              
              <div className="flex gap-2">
              <img src="./icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
              <div className="justify-start">
              <h3 className="text-left text-sm font-semibold">Abhijit Banerjee  </h3>
              <p className="text-xs">TSN Automation</p>
              <p className="text-xs">Director</p>
              </div>
              </div>
               <p className="py-4 px-2 text-sm text-justify font-medium  text-gray-500">
               Working with the THN IT Solutions was a breeze. They were responsive, creative, 
               and professional throughout the entire process. My website looks fantastic, and 
               I have already received compliments.
               </p>
               <div className="rating"></div>
           </div>
           <div className="shadow-xl border-[2px] rounded-lg justify-center p-4">
              
              <div className="flex gap-2">
              <img src="./icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
              <div className="justify-start">
              <h3 className="text-left text-sm font-semibold">Tarun Adhikari  </h3>
              <p className="text-xs">TSN Technosolutions</p>
              <p className="text-xs">Director</p>
              </div>
              </div>
               <p className="py-4 px-2 text-sm text-justify font-medium  text-gray-500">
               We could not be happier with the results. The website not only looks great but also 
               functions seamlessly. The THN IT Solutions went above and beyond to ensure everything 
               was perfect. Thank You!!
               </p>
               <div className="rating"></div>
           </div>
           <div className="shadow-xl border-[2px] rounded-lg justify-center p-4">
              
              <div className="flex gap-2">
              <img src="./icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
              <div className="justify-start">
              <h3 className="text-left text-sm font-semibold">Firoz Ahmed  </h3>
              <p className="text-xs">Altarnative Power Solutions</p>
              <p className="text-xs">Director</p>
              </div>
              </div>
               <p className="py-4 px-2 text-sm text-justify font-medium  text-gray-500">
               From start to finish, the THN IT Solutions was dedicated to bringing my vision to life. 
               They were patient with my requests and provided valuable insights along the way.
               Im thrilled with the end product! 
               </p>
               <div className="rating"></div>
           </div>

        </Slider>
      </div>
      </>
    );
  }
  
  export default Testimonial;


// 
