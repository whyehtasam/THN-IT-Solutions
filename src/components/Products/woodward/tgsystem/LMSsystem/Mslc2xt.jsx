//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/MSLC2XT.pdf";


function MSLC25() {
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
              MSLC-2-5{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-MSLC-2-5{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s MSLC-2™ functions with the DSLC-2™ control to provide
              synchronization and load control across Utility and Intertie
              breakers. The MSLC-2/DSLC-2 combination operates over an Ethernet
              communication network to control simple or complex generator
              system applications. This combination, 32 DSLC-2’s and 16
              MSLC-2’s, provide multiple unit, multiple segment, utility and
              intertie power management for complex power systems. Controls
              plant wide import/export levels while always providing bump-less
              load transfers with utility.
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

            <p className="text-sm">
              Woodward’s MSLC-2™ functions with the DSLC-2™ control to provide
              synchronization and load control across Utility and Intertie
              breakers. The MSLC-2/DSLC-2 combination operates over an Ethernet
              communication network to control simple or complex generator
              system applications. This combination, 32 DSLC-2’s and 16
              MSLC-2’s, provide multiple unit, multiple segment, utility and
              intertie power management for complex power systems. Controls
              plant wide import/export levels while always providing bump-less
              load transfers with utility.
            </p>

            <p className="text-sm">
              The MSLC-2 control combines synchronization, dead bus closing,
              utility/intertie load sensor, baseload control, import/export
              control, VAR, power factor, and a master process control in one
              powerful package. The MSLC-2 provides phase matching or slip
              frequency synchronization, with voltage matching, across a utility
              or intertie breaker. The MSLC-2/DSLC-2 combination can handle
              multiple utility connections with a maximum of 8 bus segments in
              one application.
            </p>

            <p className="text-sm">
              The MSLC-2’s load sensor and load control sense true RMS power and
              provide a bump-less loading and unloading against a utility grid.
              Baseload, import/export, process, and utility unload modes control
              the KW power between different power sources at the same time
              controlling the reactive power, VAR and power factor. Reactive
              power is also ramped on and off for the smoothest load
              transactions between power grids.
            </p>

            <p className="text-sm">
              The MSLC-2 communicates via Ethernet, with redundant Ethernet now
              available, to control real and reactive loading against the
              utility by DSLC-2 equipped generators.
            </p>

            <p className="text-sm">
              The tie breaker mode allows synchronization between multiple
              generator systems. Segments are connected and power can be
              measured across an intertie, but no load control is functional
              when in Tie breaker operation.
            </p>

            <h3 className="pb-4 text-lg font-bold">Features include:</h3>

            <p className="text-sm">
              One MSLC-2 can provide master control for up to 32 DSLC and an
              additional 15 MSLC-2 in a system. Two dedicated Ethernet lines for
              precise system communications between all DSLC-2’s and MSLC-2’s on
              the system. Ethernet Modbus TCP for remote control and monitoring
              by PLC or DCS system. Redundant Ethernet communications for
              enhanced reliability. Master MSLC-2 redundancy, loss of
              communications with the designated MSLC-2 master initiates control
              hand off to the next designated MSLC-2 master. The MSLC-2 hardware
              is adjustable for multiple applications. Slip frequency or voltage
              phase matching synchronizing fully selectable with dead bus option
              in both directions provide full flexibility for intertie and
              main-tie-main applications. Having functions integrated into one
              box eliminates the need for redundant sensors (like PTs, CTs, and
              MOPs) that connect to individual modules such as the load sensor
              and synchronizer. Digital signal processing makes the MSLC-2
              resistant to power line distortions and harmonics. Three-phase
              true RMS power sensing provides accurate readings even with
              unbalanced phase loading and voltage fluctuations. Export/import
              control over multiple utility MSLC-2’s in same segment. The
              Woodward ToolKit™ software allows flexible setup using the same
              basic menu tree as the original MSLC plus an overview screen. No
              hand held programmer is required. Graphical overview of generators
              and bus bar parameters with trending makes the MSLC-2
              commissioning friendly. The Toolkit can be accessed either via one
              of the Ethernet ports or via RS-232 port. Phase angle compensation
              provides adjustment for additional deviation correction across a
              transformer. The system update feature allows for system
              reconfiguration.
            </p>

            {/* <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
              Emergency standby: data centers, hospitals, commercial and industrial facilities
              </li>
              <li className="text-sm">
              Distributed Generation (DG): utility-dispatchable power for peak demand response
              </li>
              <li className="text-sm">
              Islanded prime-power: oil & gas exploration, marine, remote villages, rental/mobile
              </li>
              <li className="text-sm">
              Microgrid: military, government, net-zero communities, universities
              </li>
              <li className="text-sm">
              Utility paralleling: peak shaving, demand curtailment
              </li>
              <li className="text-sm">
              Cogeneration (CHP): wastewater treatment, biogas production/containment
              </li>
              <li className="text-sm">
              Switchgear upgrades: generator control retrofit to add load sharing/paralleling capability
              </li>
              
            </ul> */}

            {/* <ul className="pl-4 space-y-2 list-disc">
                <li className="text-sm">
                Operation modes: Auto, Stop, Manual, and Load/No Load test modes via discrete input possible
                </li>
                <li className="text-sm">
                Breaker control: Slip frequency / phase matching synchronization, open-close control, breaker monitoring
                </li>
                <li className="text-sm">
                Load transfer features: open / closed transition, interchange, soft loading / soft unloading, mains parallel
                </li>
  
                <li className="text-sm">
                Remote control via interface and discrete/analog inputs for adjusting speed, frequency, voltage, power, reactive power, and power factor set points
                </li>
                <li className="text-sm">
                Active power and reactive power load sharing with up to 16 units including load-dependent start/stop
                </li>
                <li className="text-sm">
                Operating hours/start/maintenance counters – Operating hours also available from a connected ECU via
                </li>
                <li className="text-sm">
                J1939/CAN
                </li>
                <li className="text-sm">
                Supported ECU: Scania EMS/S6, Deutz EMR2, Volvo EMS2, MTU ADEC ECU7/8, Woodward EGS, MAN EDC 7, SISU EEM2/3, Cummins, Perkins and J1939 standard messages
                </li>
                <li className="text-sm">
                Multi-lingual capability (11 languages in 1 unit configurable: English, German, French, Spanish, Chinese, Japanese, Italian, Portuguese, Turkish, Russian, Polish)
                </li>
                <li className="text-sm">
                Event recorder (300 events, FIFO) with real time clock (battery backed; min. 5 years)
                </li>
                <li className="text-sm">
                128×64 dot graphical interactive LC display with soft keys
                </li>
                <li className="text-sm">
                Start/stop logic for Diesel/Gas engines
                </li>
                <li className="text-sm">
                Engine pre-glow or purge control
                </li>
                <li className="text-sm">
                Warm-up control via timer or coolant temperature
                </li>
                <li className="text-sm">
                PC and/or front panel configurable (ToolKit software)
                </li>
                <li className="text-sm">
                Multi-level password protection
                </li>
                <li className="text-sm">
                Discrete I/O expansion board connectivity (Woodward IKD 1 or Phoenix Contact IL series)
                </li> */}

            {/* </ul> */}
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

export default MSLC25;
