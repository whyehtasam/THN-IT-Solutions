import React, { useState } from "react";
import SDLC from "./SDLC";
import SoftwareMethodology from "./SoftwareMethodology";
import CICD from "./CICD";
import WebDevelopmentProcess from "./WebDevelopmentProcess";

function ProcessOverView() {
  const sections = [
    { title: "Software Development Life Cycle", content: <SDLC /> },
    { title: "Software Methodology", content: <SoftwareMethodology /> },
    { title: "Web Development Process", content: <WebDevelopmentProcess /> },
    {
      title: "Continuous Integration & Continuous Delivery",
      content: <CICD />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="join join-vertical  md:gap-5 md:mb-8 mb-5 rounded-md gap-3 px-4">
        <div className="  md:mx-0 md:my-0 mt-3 bg-[url('/Banner.png')] bg-cover rounded-md md:p-10">
          <h2 className="p-6 text-2xl font-semibold text-center text-white md:font-bold md:text-4xl">
            Process Overview
          </h2>
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            className=" collapse collapse-arrow join-item border-base-300 rounded-md drop-shadow-sm"
          >
            <input
              className="rounded-md "
              type="radio"
              name="my-accordion-4"
              checked={index === activeIndex}
              onChange={() => setActiveIndex(index)}
            />
            <div className="collapse-title text-xl font-semibold md:font-bold bg-gray-800 text-white  md:h-[10vh] md:px-[5%] p-4 rounded-md ">
              {section.title}
            </div>
            <div className="collapse-content bg-white ">{section.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessOverView;
