import Portcard from "./portcard";
import Testimonial from "./testimonial";

function OurAchievement() {
  return (
    <section className="mx-auto our-achievement md:mb-8 about-us lg:max-w-7xl">
      <div className="mx-5 mt-3 md:mt-0">
        <div className="md:m-5 md:mt-0 mb-6 md:mx-0 md:m  bg-[url('/Banner.png')] bg-cover rounded-lg md:p-10">
          <h2 className="p-6 text-2xl font-semibold text-center text-white md:font-bold md:text-4xl">
            Our Key Deliveries
          </h2>
        </div>
        <Portcard />
      </div>
      <div className="m-5">
        <div className="md:m-5 md:mx-0  mb-6 md:my-10 md:mt-20 bg-[url('/Banner.png')] bg-cover rounded-lg md:p-10">
          <h2 className="p-6 text-2xl font-semibold text-center text-white md:font-bold md:text-4xl">
            What Our Client say
          </h2>
        </div>
        <Testimonial />
      </div>
    </section>
  );
}

export default OurAchievement;
