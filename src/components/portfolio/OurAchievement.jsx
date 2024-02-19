import Portcard from "./portcard"
import Testimonial from "./testimonial"

function OurAchievement(){
    
    return(
        
        <section className="mx-auto our-achievement md:mb-8 about-us lg:max-w-7xl">
        <div>
        <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
          <div className="">
          <h3 className="p-2 text-4xl font-bold">Our Key Deliveries</h3>
          </div>
        </div>
        <Portcard/>
        </div>
         
        
        <div>
     
        <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
          <div className="">
          <h3 className="p-2 text-4xl font-bold">What Our Client say</h3>
          </div>
        </div>
         <Testimonial/>
          </div>
        </section>
    )
}

export default OurAchievement;