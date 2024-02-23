//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";

function Service() {
  return (
    <>
      <div className="flex  mx-16 md:mb-8 about-us lg:max-w-7xl">
        <img src="servicebanner.png" alt="banner" className={" w-full h-80 "} />
      </div>

      <div className="items-center text-center mx-auto mt-[5%] mb-[3%] w-[30%]">
        <div className="">
          <h3 className="text-4xl font-bold p-2 text-blue-800">OUR SERVICES</h3>
        </div>
      </div>
      <p className="text-4xl font-bold p-2 text-center text-blue-800">
        POWER PLANT LOAD MANEGMENT SYSTEM COMMISIONING
      </p>
      <section className="mx-auto career-page md:mb-8 about-us lg:max-w-7xl">
        <div className=" grid md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  place-items-evenlyflex-col-reverse md:grid md:mb-8 md:pt-0">
          <div className="justify-center flex-1 w-f6ll md:p-5">
            <img
              src={"servicebanner.png"}
              alt="svg image"
              className="flex item-center md:h-80 h-80 mix-blend-multiply"
            />
          </div>

          <div className="flex-1 h-full p-5 lg:pr-16 ">
            <p className="pb-2 text-justify text-sm lg:text-base">
              TSN TECHNOSOLUTIONS Engineering Services team has decades of
              experience developing and supplying engineered system solutions to
              a wide range of industries from simple steam turbines to
              integrated turbine compressor control systems to low emission aero
              derivative turbines. These systems include flexible steam turbine
              control, integrated compressor control, dedicated compressor
              control. We create and build strategic partnerships with our
              customers to fully understand project needs and then apply our
              engineering expertise and project execution excellence to develop
              and implement effective system solutions.
            </p>
          </div>
        </div>

        <p className="text-4xl font-bold p-2 text-center text-blue-800">
          SYNCRONYZATION AND LOAD SHARING SYSTEM COMMISSIONING
        </p>
        <div className="grid md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  place-items-evenlyflex-col-reverse md:grid md:mb-8 md:pt-0">
          <div className="flex-1 h-full p-5 lg:pr-16 ">
            <p className="text-justify text-sm lg:text-base">
              Industrial DG and Grid Synchronization involve the seamless
              integration of diesel generators (DG) with the main electrical
              grid to ensure a continuous and reliable power supply for
              industrial operations. In essence, this process aligns the
              frequency, voltage, and phase of the DG set with that of the main
              grid before connecting them, facilitating a smooth and
              uninterrupted transition between the two power sources.
            </p>
            <p className="text-justify text-sm lg:text-base">
              TSN Technoslutions is the only channel patnner of Woodward for
              eastren part of india,Bangladesh and Nepal.
            </p>
            <p className="text-justify text-sm lg:text-base">
              TSN Technosolution’s engineering Services team has decades of
              experience on syncronizing controller. They are experties on
              Woodward controller.
            </p>
          </div>
          <div className="justify-center flex-1 w-full md:p-5">
            <img
              src={"banner-2.jpg"}
              alt="svg image"
              className="flex item-center md:h-80 h-80 mix-blend-multiply"
            />
          </div>
        </div>

        <p className="text-4xl font-bold p-2 text-center text-blue-800">
          SEG Protection Relay Service & Support
        </p>
        <div className="grid md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  place-items-evenlyflex-col-reverse md:grid md:mb-8 md:pt-0">
          <div className="justify-center flex-1 w-full md:p-5">
            <img
              src={"banner 6.jpg"}
              alt="svg image"
              className="flex item-center md:h-80 h-80 mix-blend-multiply"
            />
          </div>

          <div className="flex-1 h-full p-5 lg:pr-16 ">
            <p className="text-justify text-sm lg:text-base">
              TSN Technosolution stands as a trusted provider of SEG Protection
              Relay service and support, delivering excellence in the realm of
              electrical protection solutions. As an authorized service provider
              for SEG Protection Relays, our commitment revolves around ensuring
              the seamless functioning and longevity of your critical electrical
              infrastructure.
            </p>
            <p className="text-justify text-sm lg:text-base">
              Our service offerings are characterized by technical expertise and
              a proactive approach. The team at TSN Technosolution excels in
              providing a spectrum of services, including routine maintenance,
              diagnostics, and efficient troubleshooting tailored to meet the
              unique requirements of your organization. We understand the
              importance of minimizing downtime, and our services are designed
              to optimize the performance of SEG Protection Relays, safeguarding
              your essential assets.
            </p>
          </div>
        </div>

        <p className=" text-4xl font-bold p-2 text-center text-blue-800">
          ANNUAL MAINTENANCE SERVICE AND FAULT DIAGNOSIS
        </p>
        <div className="grid md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  place-items-evenlyflex-col-reverse md:grid md:mb-8 md:pt-0">
          <div className="justify-center flex-1 w-full md:p-5">
            <img
              src={"banner-2.jpg"}
              alt="svg image"
              className="flex item-center md:h-80 h-80 mix-blend-multiply"
            />
          </div>

          <div className="flex-1 h-full p-5 lg:pr-16 ">
            <p className="text-justify text-sm lg:text-base">
              “Annual Maintenance Service and Fault Diagnosis” is a
              comprehensive and proactive program designed to ensure the optimal
              functioning of equipment, machinery, or systems over an annual
              period. This service involves regular inspections, preventive
              maintenance tasks, and diagnostic procedures aimed at identifying
              and addressing potential issues before they escalate into major
              problems. Skilled technicians perform a thorough examination,
              checking for wear and tear, potential faults, and overall system
              health. The objective is to enhance equipment reliability, extend
              its lifespan, and minimize the risk of unexpected breakdowns.
              Through systematic fault diagnosis, any underlying issues are
              pinpointed and promptly rectified, contributing to improved
              efficiency and operational continuity. This service is vital for
              businesses and organizations seeking to maintain peak performance,
              reduce downtime, and maximize the return on their investments in
              equipment and infrastructure.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
