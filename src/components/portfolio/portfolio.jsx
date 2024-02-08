// import "./global.css"
import SimpleSlider from "./slider";
import Testimonial from "./testimonial";



 const Portfolio = () => {

    return(
       <>
          <div className="justify-center p-8">
          <h3 className="text-4xl text-center ">Our Key Customers</h3>
        </div>
           <SimpleSlider />
          

         {/* <div className="justify-center p-20">
          <h3 className="text-4xl text-center justify-center">Our Key Deliveries</h3>
        </div> */}
        
        <div className="justify-center p-20">
          <h3 className="text-4xl text-center">Our Key Deliveries</h3>
        </div>
                







        <div className="mx-4 py-[50px] grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-4">
                 <div className="justify-center">
                <img src="./tsnt3.png" className=" w-25 h-25  flex "></img>
                </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSN Automation</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 TSNT Solutions Pvt. Ltd. is to deliver best quality that meets and fulfill customer expectations and by leveraging knowledge, experience and technology, best practice-progress-people and ideas in Industry and proactive business
                 </p>
             </div>
           
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-4">
             <div className="justify-center">
             <img src="./tsntechno3.png" className=" w-25 h-25  flex"></img>
             </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSN Technosolutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 TSNT Solutions Pvt. Ltd. provides Annual Maintenance for panels .We has a team of dedicated engineers and technicians for maintain the works and Maintenance services.
                 </p>
             </div>

              <div className=" shadow-xl border-[2px] rounded-lg justify-center p-4">
              <div className="justify-center">
              <img src="./power.png" className=" w-25 h-25  flex"></img>
              </div>
                 <h3 className="text-left text-lg font-semibold mb-4">Altarnative Power Solutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 Any generator set used for emergency or primary source must have periodic service and maintenance performed. Setting up a planned maintenance schedule. 
                 </p>
             </div>
        
             <div className=" shadow-xl border-[2px] rounded-lg justify-center p-4">
             <div className="justify-center">
             <img src="./tsntf.png" className="w-25 h-25  flex"></img>
             </div>
                 <h3 className="text-left text-lg font-semibold mb-4">TSNT Solutions</h3>
                 <p className=" text-sm text-justify font-medium  text-gray-500">
                 THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations.  As a premier software startup, we specialize in delivering the unique needs of your enterprise.
                 </p>
             </div>
             
        </div>

        <Testimonial/>
        </>

        
    )


 }

 export default Portfolio;