import React from "react";

import { testimonialData } from "./achievementData";
import CenterMode from "../Slider/CenterMode";
function Testimonial() {
  return (
    // <div className="grid grid-cols-1 gap-4 bg-white  lg:grid-cols-4 md:grid-cols-3">
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
              <div className="items-center justify-start my-auto">
                <h3 className="text-sm font-semibold text-left">
                  {testimonial.name}
                </h3>
                <p className="text-xs">{testimonial.company}</p>
                <p className="text-xs">{testimonial.position}</p>
              </div>
            </div>
            <p className="py-2 text-xs font-medium text-justify text-gray-500  md:text-sm">
              {testimonial.testimonial}
            </p>
            <div className="justify-center py-2 rating"></div>
          </div>
        ))}
      </CenterMode>
    </div>
  );
}

export default Testimonial;
