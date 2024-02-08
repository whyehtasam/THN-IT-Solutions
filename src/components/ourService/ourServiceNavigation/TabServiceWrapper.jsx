import { useState } from "react";
import GetInTouch from "../../wrappers/GetInTouch";

const TabServiceWrapper = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="   tabs-service  h-auto mx-auto my-8 p-5 flex    rounded-lg ">
        <div className="tab-contents  w-max basis-1/3 flex flex-col cursor-pointer bg-slate-50 shadow-lg rounded-lg">
          {data.map((item, index) => (
            <div
              className="p-3 max-h-20 text-xl flex font-semibold flex-1 cursor-pointer"
              onClick={() => setActiveTab(index)}
              key={index}
            >
              <p
                className={`w-full rounded-lg flex p-3 items-center cursor-pointer transition-all-all duration-300 hover:bg-black hover:text-white ${
                  index === activeTab
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-black  border"
                }`}
              >
                {item.serviceType}
              </p>
            </div>
          ))}
        </div>

        <div className="tab-cards basis-2/3  pl-8 py-2 ">
          {data.map(
            (service, index) =>
              index === activeTab && (
                <div
                  className=" card h-auto w-full bg-base-100 shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 "
                  key={index}
                >
                  <div className="card-body">
                    <h2 className="card-title text-2xl">
                      {service.serviceType}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                    <p className="text-justify text-xs lg:text-sm text-gray-800 ">
                      {service.description}
                    </p>
                    <h2 className="card-title text-lg mt-4">
                      {service.subHeading}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-5/12 "></div>

                    {service.steps.length !== 0 && (
                       <div className="tech-container grid gap-4">
                       {service.steps.map((tech, index) => (
                         <div className="max-w-lg" key={index}>
                           <h3 className="text-base font-semibold mt-2">
                             {tech.stepName}
                           </h3>
                           <p className="text-justify text-xs lg:text-sm text-gray-800 ">
                             {tech.description}
                           </p>
                         </div>
                       ))}
                     </div>
                    )}

                    {service.subHeading2.length !== 0 && (
                      <>
                        {" "}
                        <h2 className="card-title text-lg mt-4">
                          {service.subHeading2}{" "}
                        </h2>
                        <div className="h-[0.5px] bg-opacity-30 bg-black w-5/12 "></div>
                      </>
                    )}

                    <div className="tech-container grid gap-4">
                      {service.technologies.map((tech, index) => (
                        <div className="max-w-lg" key={index}>
                          <h3 className="text-base font-semibold mt-2">
                            {tech.technologyType}
                          </h3>
                          <p className="text-justify text-xs lg:text-sm text-gray-800 ">
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
      <GetInTouch para="Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business." />
    </>
  );
};

export default TabServiceWrapper;
