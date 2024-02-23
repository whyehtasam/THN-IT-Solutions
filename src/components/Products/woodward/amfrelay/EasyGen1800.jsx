//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/easYgen-1800.pdf";

function EasyGen1800() {
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
              EASYGEN-1800{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-EASYGEN-1800(UL,CE){" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The innovative features of the easYgen-1800 Series, including
              ﬂexible breaker conﬁguration and start/stop logic, real and
              reactive power sensing, and remote-start capability make it the
              intelligent choice for specialized mobile power and emergency
              standby applications.
            </p>
            {/* <p className="text-justify text-sm lg:text-base">
                At THN IT Solutions, we are at the forefront of innovation,
                crafting cutting-edge software solutions that empower businesses
                and individuals alike. Our commitment to excellence, coupled with
                a passion for technology, drives us to create software that makes
                a meaningful impact. As we continue to expand our team, we are
                seeking talented and motivated individuals to join us on our
                journey.
              </p> */}
          </div>
          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>
            <h3 className="pb-2 text-justify text-sm lg:text-base">
              The Woodward easYgen-1800 series compact AMF controller with
              ethernet and SD card connectivity and a large liquid crystal
              display (LCD), adequate I/Os and common industrial connectivity
              for a single-generator set used in critical stand-by or prime
              power applications with automatic changeover capability. The
              controllers include purpose-built algorithms and logic to start,
              stop, control, and protect the genset, open/close circuit breakers
              and mains supply monitoring with automatic changeover. Equipped
              with state-of-the-art communication interfaces, Woodward’s
              easYgen-1000 Series of AMF genset controllers provides exceptional
              versatility and value for OEM genset packagers.
            </h3>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Three-phase true RMS power sensing</li>
              <li className="text-sm">
                Operation modes: AUTO, STOP, and MANUAL modes accessible through
                front panel, discrete inputs or via interfaces
              </li>
              <li className="text-sm">
                Remote control via multiple interfaces and discrete inputs
              </li>
              <li className="text-sm">
                Direct support of several ECUs, such as Bosch, Cummins, John
                Deere, MTU, Perkins, Scania, Volvo, Woodward
              </li>
              <li className="text-sm">
                Two heavy-duty relay outputs for cranking and fuel solenoid
              </li>
              <li className="text-sm">
                Event and data logging capabilities with real time clock
              </li>
              <li className="text-sm">
                Maintenance scheduler with multipurpose flexible timers
              </li>
              <li className="text-sm">
                Operating hours, start, maintenance counters and monitoring
              </li>
              <li className="text-sm">
                Three switchable parameter sets of AC system winding, Rated
                Voltage, Rated Frequency, Rated Current, Rated Power, Rated
                Speed
              </li>
              <li className="text-sm">
                Can be applied on pumping units as an indicating instrument
                (relays are inhibited)
              </li>
              <li className="text-sm">
                Can be configured from computer via USB or from front panel with
                password protection
              </li>
              <li className="text-sm">
                Manual breaker operation with tactile buttons on front panel
              </li>
              <li className="text-sm">
                Custom boot-up logo with adjustable screen display time
              </li>
              <li className="text-sm">
                Multilingual customizable user interface
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <h2 className="p-4 mx-5 mb-4 text-2xl font-bold text-center text-gray-800 bg-white border-2 rounded-lg shadow-sm md:p-10 md:mx-0 md:text-2xl lg:text-3xl md:rounded-box md:hidden">
          Current Openings
        </h2> */}
      {/* <div className="grid gap-5 px-5 mb-8 lg:p-0 md:grid-cols-2 lg:grid-cols-3 ">
          <Careercard cData={careerCardData} />
        </div> */}
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

export default EasyGen1800;
