//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/Woodward 505DR.pdf";

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
              505DR{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              AC/DC, Front Panel, Redundant, Standard{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The next generation 505DR (Dual-Redundant) front panel mount user
              configurable steam turbine digital governor control single valve
              and single-extraction and admission with advanced integrated
              multilingual interface HMI screen. The 505DR builds on the robust
              and reliable standard setting 505 platform trusted globally with
              dual-redundancy (Syscon & Backup) control, expanded communication
              protocols, intelligent/adaptive control algorithms, and advance
              service tools with data log and RemoteView monitor and control.
              This model is a high voltage 88-264 Vac or 90-150 Vdc power input
              and is rated for Class 1, Div. 2 standard location.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                The 505DR® dual-redundant steam turbine control is a
                state-of-the-art digital control platform designed to reliably
                control and protect single valve and single-extraction steam
                turbines with the advantage of dual-redundancy for maximum
                turbine reliability and availability. Redundancy is managed at
                the operating system level using Woodward’s RTN (Real Time
                Network), allowing ultra-fast changeovers and “bumpless”
                transitions.
              </li>
            </ul>
            <h3 className="pb-4 text-lg font-bold">Applications:</h3>
            <h3 className="pb-4 text-sm">Steam Turbine Control</h3>
            <ul>
              <li className="text-sm">Single Valve</li>
              <li className="text-sm">Single-Extraction/Admission</li>
              <p className="pb-2 text-justify text-sm lg:text-base">
                Driving generators, compressors, turbo-expanders, fans, and
                pumps.
              </p>

              <p className="pb-2 text-justify text-sm lg:text-base">
                The 505DR is a highly efficient redundant turbine control. It
                includes the turbine control, system sequencer, operator control
                panel and first out indicator. This design minimizes external
                devices and wiring and eases troubleshooting.
              </p>

              <p className="pb-2 text-justify text-sm lg:text-base">
                The 505DR® system assigns one control as System Controller
                (Syscon) which actively controls the turbine. The second unit is
                configured as Backup. The system automatically assess the heath
                of the Syscon and will initiate a fast switchover when a failure
                occurs. Switchover can also be initiated manually. The system
                tightly synchronizes software states and memory from the Syscon
                to the Backup, insuring that control outputs remains steady with
                no effect on turbine operation (a true “bumpless” transition).
              </p>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <h3 className="pb-4 text-sm">Features:</h3>

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
                Graphic steam map with current operating point view for
                extraction and admission
              </li>
              <li className="text-sm">
                Configurable tag names to easily identify connections
              </li>
              <li className="text-sm">
                Internal “Turbine Simulator” for off-line training and advance
                testing before system changes
              </li>
            </ul>

            <h3 className="pb-4 text-sm">Improved Communications</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Ethernet communications for connectivity to plant DCS, service
                tools and RemoteView operator control panels
              </li>
              <li className="text-sm">
                Distributed I/O (LinkNet-HT) enables expanded control of
                additional turbine package equipment startup and control
              </li>
              <li className="text-sm">
                CANOpen actuator connectivity for Woodward VariStroke actuators
                and DSLC-II power management networks
              </li>
            </ul>

            <h3 className="pb-4 text-sm">
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
          </div>

          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-sm">Improved Service/User Tools</h3>

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
                save, compare and view settings and data logs Woodward also
                offers an optional FTM (Field Termination Module) to allow easy
                multiplexing of redundant signals and facilitates quick
                installation and commissioning. (5541-705)
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

export default Events;
