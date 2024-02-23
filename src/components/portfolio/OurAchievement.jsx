import Portcard from "./portcard";
import Testimonial from "./testimonial";


function OurAchievement(){
    
    return(
        
        <>
        {/* <div>
        <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
          <div className="">
          <h3 className="text-4xl font-bold p-2"></h3>
          </div>
        </div> */}
        <Portcard/>
        {/* </div> */}
         
        
        <div>
     
        <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
          <div className="">
          <h3 className="text-4xl font-bold p-2">What Our Client say</h3>
          </div>
        </div>
         <Testimonial/>
          </div>
        </>
    )




}

export default OurAchievement;
