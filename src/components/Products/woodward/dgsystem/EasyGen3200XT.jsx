//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/easYgen-3200XT.pdf";




function EasyGen3200XT() {
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
              EASYGEN-3200XT{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-EASYGEN-3200XT-P1-LT{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The easYgen-3200XT combines complete engine-generator control and
              protection with advanced, peer-to-peer paralleling functionality
              and innovative features in a robust, attractive and user-friendly
              package.
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
              Woodward’s easYgen-3200XT XT Series paralleling genset controllers
              provide exceptional versatility and value for OEM switchgear
              builders, generator packagers, and system integrators. The
              easYgen-3200XT combines complete engine-generator control and
              protection with advanced, peer-to-peer paralleling functionality
              and innovative features in a robust, attractive and user-friendly
              package. Its integrated LogicsManager™ programmable logic
              functionality provides outstanding application flexibility and can
              often eliminate the need for additional PLC control, yet can
              easily integrate with SCADA or PLC-based control systems where
              desired.
            </h3>

            <h3 className="pb-2 text-justify text-sm lg:text-base">
              The easYgen-3200XT gives you the advantage of standardizing on a
              single, affordable genset controller for many different
              distributed power generation applications–from stand-alone
              emergency backup power to parallel load sharing of up to 32
              gensets in complex, segmented distribution systems with multiple
              utility feeds and tie breakers.
            </h3>

            <h3 className="pb-2 text-justify text-lg font-bold lg:text-base">
              Common easYgen-3200XT applications:
            </h3>

            <p className="text-sm">
              Emergency standby: data centers, hospitals, commercial and
              industrial facilities Distributed Generation (DG):
              utility-dispatchable power for peak demand response Islanded
              prime-power: oil & gas exploration, marine, remote villages,
              rental/mobile Microgrid: military, government, net-zero
              communities, universities Utility paralleling: peak shaving,
              demand curtailment Cogeneration (CHP): wastewater treatment,
              biogas production/containment Switchgear upgrades: generator
              control retrofit to add load sharing/paralleling capability
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

            <h3 className="pb-4 text-lg font-bold">
              easYgen-3200XT Features & Benefits
            </h3>

            <p className="text-sm">
              All easYgen-3200XT Series models include these standard features:
              True RMS voltage and current sensing (gen, bus and mains) for
              reduced susceptibility to harmonics CAN network
              communication/control to engine ECU (standard SAE-J1939 protocol
              and several proprietary engine OEM protocols are supported) Serial
              Modbus RTU (slave) communication for SCADA annunciation and
              external control Configuration via PC/laptop with Woodward ToolKit
              service tool Connectivity with the RP-3200XT Remote Panel for
              complete annunciation, control and configuration of the
              easYgen-3200XT controller, over CANopen protocol at up to 250m
              distance Compliance agency/marine* approvals: CE, UL/cUL, CSA,
              BDEW, ABS, Lloyd’s Register (* see marine package for further
              approvals)
            </p>

            <h3 className="pb-4 text-lg font-bold">
              The easYgen-3200XT Series provide:
            </h3>

            <p className="text-sm">
              AMF (automatic mains failure) detection, decoupling and emergency
              run with dead bus close Automatic synchronization: phase-match,
              positive/negative slip-frequency, run-up (dead field) paralleling
              Circuit breaker close/open control: GCB only, GCB and MCB (ATS
              function), or external (no) control Proportional load sharing
              (isochronous or droop) of up to 32 gensets, regardless of
              individual si ze Base loading, import/export control, asymmetrical
              loading (through external base load input) Automatic load
              dependent start/stop for improved generation system efficiency
              Asynchronous (induction) generator control Engine and generator
              protection functions, with fully programmable settings
            </p>

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

export default EasyGen3200XT;
