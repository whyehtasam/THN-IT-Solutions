
// import "./global.css"
//import SimpleSlider from "./slider";
 import Testimonial from "./testimonial1";
import Portcard from "./portcard"


 const Portfolio = () => {

    return(
       <>
         <div className="justify-center ">
          <h3 className="text-4xl text-center">Our Key Deliveries</h3>
        </div>
        <br/>
        <br/>
        <div  >
          <Portcard/>
          </div>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          <div className="justify-center p-20">
          <h3 className="text-4xl text-center ">What Our Client say</h3>
        </div>
    
          <div >
          <Testimonial/>
          
          </div>

           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          
        </>
    )


 }

 export default Portfolio;