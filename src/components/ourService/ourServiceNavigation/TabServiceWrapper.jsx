import { useState } from "react";
import GetInTouch from "../../wrappers/GetInTouch";

const TabServiceWrapper = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="flex flex-col h-auto p-4 mx-auto rounded-lg lg:mb-8 lg:flex-row lg:px-8 tabs-service">
        <div className="flex flex-wrap rounded-md cursor-pointer md:border lg:flex-col tab-contents lg:w-max lg:basis-1/3 md:bg-slate-50 md:grid lg:flex md:grid-cols-3">
          {data.map((item, index) => (
            <div
              className="m-1 text-xs font-semibold cursor-pointer lg:flex lg:flex-1 md:p-3 lg:text-xl md:max-h-20 "
              onClick={() => setActiveTab(index)}
              key={index}
            >
              <p
                className={`md:w-full w-fit rounded md:rounded-lg flex md:p-3 p-2 items-center cursor-pointer transition-all-all duration-300 hover:bg-black hover:text-white ${
                  index === activeTab
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black  border shadow-md"
                }`}
              >
                {item.serviceType}
              </p>
            </div>
          ))}
        </div>

        <div className="py-3.5 px-1 md:px-0 md:py-0   lg:pl-8 tab-cards md:basis-2/3 ">
          {data.map(
            (service, index) =>
              index === activeTab && (
                <div
                  className=" card h-auto w-full bg-base-100 shadow md:shadow-xl md:hover:scale-[1.02] md:hover:-translate-y-1 transition-all duration-300 rounded-md border"
                  key={index}
                >
                  <div className="p-4 card-body md:p-6">
                    <h2 className="text-xl md:text-2xl card-title">
                      {service.serviceType}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                    <p className="text-xs text-justify text-gray-800 lg:text-sm ">
                      {service.description}
                    </p>
                    <h2 className="mt-2 md:mt-4 text-lg card-title">
                      {service.subHeading}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-5/12 "></div>

                    {service.steps.length !== 0 && (
                       <div className="grid md:gap-4 tech-container">
                       {service.steps.map((tech, index) => (
                         <div className="max-w-lg" key={index}>
                           <h3 className="mt-2 text-base font-semibold">
                             {tech.stepName}
                           </h3>
                           <p className="text-xs text-justify text-gray-800 lg:text-sm ">
                             {tech.description}
                           </p>
                         </div>
                       ))}
                     </div>
                    )}

                    {service.subHeading2.length !== 0 && (
                      <>
                        {" "}
                        <h2 className="mt-4 text-lg card-title">
                          {service.subHeading2}{" "}
                        </h2>
                        <div className="h-[0.5px] bg-opacity-30 bg-black w-5/12 "></div>
                      </>
                    )}

                    <div className="grid md:gap-4 tech-container">
                      {service.technologies.map((tech, index) => (
                        <div className="max-w-lg" key={index}>
                          <h3 className="mt-2 text-base font-semibold">
                            {tech.technologyType}
                          </h3>
                          <p className="text-xs text-justify text-gray-800 lg:text-sm ">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
      <GetInTouch className="lg:w-[calc(100%-6rem)] mx-6 p-6 mb-6 rounded border shadow-md" para="Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business." />
    </>
  );
};

export default TabServiceWrapper;
