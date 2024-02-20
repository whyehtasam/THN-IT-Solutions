import React from "react";

import { testimonialData } from "./achievementData";
import CenterMode from "../Slider/CenterMode";
function Testimonial() {
  return (
    // <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4  bg-white ">
<div className="testimonial-container">
    <CenterMode>
      {testimonialData.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white border-[2px] rounded-lg justify-center p-6 md:p-10 h-50"
        >
          <div className="flex gap-2">
            <img
              src={testimonial.imgSrc}
              alt=""
              className="md:block  h-16 md:h-[10vh] md:w-[5vw] rounded-[50%]"
            />
            <div className="justify-start items-center my-auto">
              <h3 className="text-left text-sm font-semibold">
                {testimonial.name}
              </h3>
              <p className="text-xs">{testimonial.company}</p>
              <p className="text-xs">{testimonial.position}</p>
            </div>
          </div>
          <p className=" text-xs py-2 md:text-sm text-justify font-medium text-gray-500">
            {testimonial.testimonial}
          </p>
          <div className="rating py-2 justify-center"></div>
        </div>
      ))}
    </CenterMode>

    </div>
  );
}

export default Testimonial;
