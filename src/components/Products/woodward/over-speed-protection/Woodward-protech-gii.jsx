//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/PROTECH-GII.pdf";



function ProtectGii() {
  return (
    <section className="mx-auto career-page md:mb-8 about-us lg:max-w-7xl">
      <div className="flex flex-col-reverse md:grid md:mb-8 md:grid-cols-2 md:pt-8">
        <div className="justify-center flex-1 w-full md:p-5">
          <img
            src={"/banner-2.jpg"}
            alt="svg image"
            className="mx-auto md:h-full h-80 mix-blend-multiply"
          />
        </div>
        <div className="flex-1 h-full p-5 lg:pr-16 ">
          <div className="">
            <h2 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              PROTECH-GII{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              HV/HV, IR, VI, Enhanced{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The ProTech-GII is a configurable overspeed detection system
              designed to safely shut down steam, gas, and hydro turbines of all
              sizes upon sensing an overspeed or overacceleration event.
              Available in two dual redundant trip relay outputs using a
              2-out-of-3 voted architecture, or with three independent non-voted
              trip relay outputs with individual alarm relays, 4–20 mA speed
              readouts, and Modbus® communications making this overspeed device
              easy to integrate into any turbine safety system. This ProTech GII
              model is a bulkhead mount, high voltage/high voltage, independent
              relays, voted inputs with math functions protection device for
              steam turbine protection.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <p className="pb-2 text-justify text-sm lg:text-base">
              This fast acting overspeed protection device is designed to be
              applied in conjunction with a turbine control or trip system to
              safely shut down the turbine in the case of a turbine overspeed
              event. Interface with related control systems or plant DCS(s)
              (Distributed Control Systems) can be performed via the
              ProTech-GII’s redundant hard-wired input and output signals or
              through its triple-redundant serial Modbus communications ports.
            </p>

            <h3 className="pb-4 text-lg font-bold">On-line Testing</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Each ProTech-GII module can be tested manually from the module’s
                front panel, Modbus communications port, or automatically via
                its auto-test routine function. The ProTech-GII allows users to
                configure an overspeed test to be performed automatically on a
                periodic basis, testing each module (A, B, C) one at a time, and
                logging the result of each test or halting the test for a sensed
                error.
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">
              Trip, Alarm, & Overspeed Logs
            </h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                The ProTech-GII log function logs (saves to memory) all trips,
                alarms, trip valve response times, and overspeed events. The
                trip-log function uses a scrolling buffer and records the last
                50 sensed trip or alarm events and the last 20 overspeed events
                to memory, with associated times. Each log file can be viewed
                from the unit’s front panel, or downloaded to a computer via the
                ProTech-GII service tool program. Each module utilizes
                non-volatile memory to ensure that all logged events are saved,
                even on loss of power.
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Real Time Clock</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Each ProTech-GII module utilizes a real-time clock to ensure
                accurate time logging. A special timeaveraging function is
                utilized between modules to to ensure module-to-module clock
                synchronization.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* <PDFViewer /> */}
        <embed src={pdf} type="application/pdf" width="100%" height="700px" />
      </div>
    </section>
  );
}

// const Careercard = ({ cData }) => {
//   return (
//     <>
//       {cData.map((data, index) => (
//         <div
//           className="card bg-base-100  shadow-sm md:shadow-xl border-[2px] md:rounded-box rounded-lg "
//           key={index}
//         >
//           <div className="card-body">
//             <h2 className="text-xl font-bold md:text-2xl card-title">
//               <img src={data.url} alt="" height={"50vh"} width={"50vw"} />{" "}
//               {data.name}
//             </h2>
//             <p className="pt-2 pl-2 text-xs text-justify md:pt-4 md:text-sm">
//               {data.description}
//             </p>
//             <div className="flex mt-4 card-actions ">
//               <Link to={data.path}>
//                 <a className="px-4 py-2 ml-2 text-xs text-white no-underline bg-gray-800 rounded-full md:text-base hover:bg-gray-700 hover:shadow">
//                   Explore »
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}

export default ProtectGii;
