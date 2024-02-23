//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/Woodward 505D.pdf";

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
              505D{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              AC/DC, Standard{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The next generation 505D front panel mount user configurable steam
              turbine digital governor control with advanced integrated
              multilingual interface HMI screen. The new 505D builds on the
              robust and reliable standard setting 505 platform trusted globally
              now with expanded communication protocols, intelligent/adaptive
              control algorithms, and advance service tools with data log and
              RemoteView monitor and control. This model is a high voltage
              88-264 Vac or 90-150 Vdc power input and is rated for Class 1,
              Div. 2 standard location. designed screens, algorithms, and event
              recorders to simplify use in controlling industrial steam turbines
              or turbo-expanders, driving generators, compressors, pumps, or
              industrial fans. This new 505 model is a panel mount, AC/DC
              version for standard location environment conditions.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Multilingual screens including Chinese for easier operator use,
                diagnosis and control
              </li>
              <li className="text-sm">
                Large screen allows easy navigation and icon view of parameters
                and performance
              </li>
              <li className="text-sm">
                Real time trending locally viewable by operators and engineers
              </li>
              <li className="text-sm">
                Configurable tag names to easily identify connections
              </li>
              <li className="text-sm">
                Internal “Turbine Simulator” for off-line training and advance
                testing before system changes
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Improved Communications</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Ethernet communications for connectivity to plant DCS, service
                tools and RemoteView operator control panels
              </li>
              <li className="text-sm">
                CANOpen actuator connectivity for Woodward VariStroke actuators
                and DSLC-II power management networks
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">
              Intelligent / Adaptive Control Algorithms
            </h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Next generation advance load rejection performance
              </li>
              <li className="text-sm">3 critical speed avoidance bands</li>
              <li className="text-sm">Reverse rotation sensing and alarm</li>

              <li className="text-sm">
                OptiTune adaptive PID technology for optimum set-up of turbine
                performance
              </li>
              <li className="text-sm">
                Acceleration PID that limits overshoots for a stable and
                efficient plant startup
              </li>
              <li className="text-sm">
                High speed data logs monitoring turbine operation and stress
                including run time and first out trip information
              </li>
              <li className="text-sm">
                Vibration monitoring for protection and control (Sensor kit
                8928-7482)
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">
              Improved Service/User Tools
            </h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Cyber compliant password enabled logins
              </li>
              <li className="text-sm">
                RemoteView (8928-5311) program enables virtual monitor and
                control from a remote workstation or mobile device
              </li>
              <li className="text-sm">
                Control Assistant service tool enabled to easily configure,
                save, compare and view settings and data logs Drop-in upgrade
                for existing 505 legacy steam turbine governor controls with
                item number 9907-162 or 9907-163.{" "}
              </li>
            </ul>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Use our convenient old 505 to new 505D retrofit wiring kit
              5404-1801.
            </p>
          </div>

          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-lg font-bold">
              MicroNet Plus control capabilities include:
            </h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Speed and load control</li>
              <li className="text-sm">Temperature and process control</li>
              <li className="text-sm">Combustion control</li>

              <li className="text-sm">Anti-surge control</li>
              <li className="text-sm">
                System sequencing and package auxiliary control
              </li>
              <li className="text-sm">Rigorous load rejection performance</li>
              <li className="text-sm">Complex DLE fuel control algorithms</li>
              <li className="text-sm">Incipient surge detection</li>
              <li className="text-sm">Long-term naval programs</li>
              <li className="text-sm">Alarm + shutdown communication</li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">
              Features of MicroNet Plus include:
            </h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">IEC61508 SIL-3 Certified</li>
              <li className="text-sm">Cyber secure CPU</li>
              <li className="text-sm">
                Achilles Level I Certification (CPU5200)
              </li>

              <li className="text-sm">
                Simplex or redundant CPU configurations
              </li>
              <li className="text-sm">VME-based (full and narrow chassis)</li>
              <li className="text-sm">
                Real-time multitasking VxWorks® operating system
              </li>
              <li className="text-sm">
                Woodward’s proven graphical application programmer (GAP)
                software and supporting tools
              </li>
              <li className="text-sm">
                Deterministic update rates as fast as 5 ms
              </li>
              <li className="text-sm">
                Improved control system availability and reliability
              </li>
              <li className="text-sm">
                SNTP compliant for time synchronization
              </li>
              <li className="text-sm">
                Expandable with redundant realtime network available in CAT-5 or
                fiber optic configurations
              </li>
              <li className="text-sm">Ethernet communications</li>
              <li className="text-sm">Simplex or dual power supplies</li>
              <li className="text-sm">Modular I/O</li>
              <li className="text-sm">Time stamping of events to 1 ms</li>
              <li className="text-sm">
                Hot replacement of modules for online repair
              </li>
            </ul>
            <h3 className="pb-4 text-lg font-bold">Operating Conditions:</h3>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Temperature: 0 to 55 °C (32 to 131 °F) ambient air temperature
                range
              </li>
              <li className="text-sm">
                Shock: US MIL-STD-810C, method 516.2-1, procedure 1B (15 G, 11
                ms half-sine pulse)
              </li>
              <li className="text-sm">Vibration: Lloyd’s ENV2 test #1</li>
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
