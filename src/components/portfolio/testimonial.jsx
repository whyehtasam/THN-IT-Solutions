
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Countrate from "./Countrate";



function Testimonial() {



  return(
    
    
    

        <>

     
  


<div className="flex gap-4 mx-16 mb-[5%] bg-white gap-top-5">
      <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 ">                 
        <div className="flex gap-2">
              <img src="/icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
              <div className="justify-start items-center my-auto">
              <h3 className="text-left text-sm font-semibold ">Shams W.Pawel</h3>
              <p className="text-xs">Xspeed Studio</p>
              <p className="text-xs">Founder & CEO</p>  
            </div>
      </div>

          <p className=" text-sm text-justify font-medium  text-gray-500">
          We are extremely pleased with the outcome of my website. THN IT Solutions delivered exactly 
          what I envisioned, and the attention to detail is impeccable. Highly recommend their services!
          </p>
          <div className="rating py-2 justify-center"></div>
      </div>
      <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 ">                 
          <div className="flex gap-2">
                <img src="/icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
                <div className="justify-start items-center my-auto">
                  <h3 className="text-left text-sm font-semibold ">Tarun Adhikari</h3>
                  <p className="text-xs">TSN Technosolutions</p>
                  <p className="text-xs">Director</p>
                </div>
          </div>

          <p className=" text-sm text-justify font-medium  text-gray-500">
          We could not be happier with the results. The website not only looks great but also 
          functions seamlessly. The THN IT Solutions went above and beyond to ensure everything 
          was perfect. Thank You!!
          </p>
          <div className="rating py-2 justify-center"></div>
      </div>
      <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 ">                 
          <div className="flex gap-2">
                <img src="/icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
                <div className="justify-start items-center my-auto">
                  <h3 className="text-left text-sm font-semibold ">Abhijit Banerjee</h3>
                  <p className="text-xs">TSN Automation</p>
                  <p className="text-xs">CEO</p>
              </div>
          </div>

          <p className=" text-sm text-justify font-medium  text-gray-500">
          Working with the THN IT Solutions was a breeze. They were responsive, creative, 
          and professional throughout the entire process. My website looks fantastic, and 
          I have already received compliments.
          </p>
          <div className="rating py-2 justify-center"></div>
      </div>  

      <div className=" shadow-xl border-[2px] rounded-lg justify-center p-10  h-50 ">                 
          <div className="flex gap-2">
                <img src="/icin.png" alt="" className="h-[10vh] w-[5vw] rounded-[50%]"/>
                <div className="justify-start items-center my-auto">
                  <h3 className="text-left text-sm font-semibold ">Abhijit Banerjee</h3>
                  <p className="text-xs">TSN Automation</p>
                  <p className="text-xs">CEO</p>
              </div>
          </div>

          <p className=" text-sm text-justify font-medium  text-gray-500">
          Working with the THN IT Solutions was a breeze. They were responsive, creative, 
          and professional throughout the entire process. My website looks fantastic, and 
          I have already received compliments.
          </p>
          <div className="rating py-2 justify-center"></div>
      </div> 
      </div>

     
      <Countrate />

      </>
      
    );
  }
  
  export default Testimonial;


