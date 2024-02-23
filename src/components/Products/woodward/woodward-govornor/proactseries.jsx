//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/PROACTFamilies.pdf";

function Events() {
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
              PROACT SERIES{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Digital and Analog Electric Actuator{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s ProAct™ digital electric actuator and positioner
              incorporate a rotary output shaft used to accurately position
              integrated throttle bodies (ITB) of various sizes.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                The ProAct Digital Plus is a family of electric actuators with
                integral drivers intended to be mounted on-engine to control
                varying functions including (but not limited to): fuel rack
                positioning, timing control, and throttle valve and wastegate
                positioning. The device is effectively a positioner which will
                accept a desired position signal from another device in the
                system, such as a speed control, and drive to that position.
                Each unit includes a digital driver capable of controlling the
                actuator, communicating with the outside control system, and
                containing on-board software and intelligence to realize
                monitoring and customizing functions.
              </li>
            </ul>

            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s ProAct™ digital electric actuator and positioner
              incorporate a rotary output shaft used to accurately position
              engine control valves.
            </p>

            <h3 className="pb-4 text-sm">
              The ProAct Digital actuator includes an integral digital
              driver/positioner that:
            </h3>
            <ul>
              <li className="text-sm">Controls the actuator</li>
              <li className="text-sm">Monitors the health of the actuator</li>
              <li className="text-sm">Communicates with the control system</li>
              <li className="text-sm">
                Output—Rotary shaft, 75 degrees, 7 to 37 J (5 to 27 ft-lb)
              </li>
              <li className="text-sm">Input Power—18-32 Vdc, 20 A max</li>
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

export default Events;
