import Portcard from "./portcard";
import Testimonial from "./testimonial";

function OurAchievement() {
  return (
    <section className="mx-auto our-achievement md:mb-8 about-us lg:max-w-7xl">
      <div className="m-5">
        <div className=" text-center mx-auto mt-[5%] mb-[3%] md:w-[30%]">
          <h3 className="p-2 text-2xl md:text-4xl font-bold">Our Key Deliveries</h3>
        </div>
        <Portcard />
      </div>
      <div className="m-5">
        <div className=" text-center mx-auto mt-[5%] mb-[3%] md:w-[30%]">
          <h3 className="p-2 text-2xl md:text-4xl font-bold">What Our Client say</h3>
        </div>
        <Testimonial />
      </div>
     
    </section>
  );
}

export default OurAchievement;
