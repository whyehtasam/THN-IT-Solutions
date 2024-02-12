import { useState } from "react";
import GetInTouch from "../../wrappers/GetInTouch";

const TabServiceWrapper = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="flex h-auto px-8 mx-auto mb-8 rounded-lg  tabs-service">
        <div className="flex flex-col rounded-lg shadow-lg cursor-pointer tab-contents w-max basis-1/3 bg-slate-50">
          {data.map((item, index) => (
            <div
              className="flex flex-1 p-3 text-xl font-semibold cursor-pointer max-h-20"
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

        <div className="py-2 pl-8 tab-cards basis-2/3 ">
          {data.map(
            (service, index) =>
              index === activeTab && (
                <div
                  className=" card h-auto w-full bg-base-100 shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 "
                  key={index}
                >
                  <div className="card-body">
                    <h2 className="text-2xl card-title">
                      {service.serviceType}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                    <p className="text-xs text-justify text-gray-800 lg:text-sm ">
                      {service.description}
                    </p>
                    <h2 className="mt-4 text-lg card-title">
                      {service.subHeading}
                    </h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-5/12 "></div>

                    {service.steps.length !== 0 && (
                       <div className="grid gap-4 tech-container">
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

                    <div className="grid gap-4 tech-container">
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
      <GetInTouch className="lg:mx-8" para="Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals. Let THN IT Solutions be your trusted technology partner, and together, we can unlock the full potential of your business." />
    </>
  );
};

export default TabServiceWrapper;
