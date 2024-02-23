//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/SPMD2.pdf";


function EasyGenSPMD2() {
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
              DIGITAL SYNCHRONIZERS{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              2/3-Phase AC Gen-Sets{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The SPM-D2-10 series are microprocessor-based synchronizers
              designed for use on two or three phase AC generators equipped with
              Woodward or other compatible speed controls and automatic voltage
              regulators. The SPM-D2-10 synchronizers provide automatic
              frequency, phase and voltage matching using either analog- or
              discrete output bias signals.
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
              We understand the time-intensive nature of power generation
              projects and ensuring the longevity of components is a specific
              way we contribute to our customers’ success. We’ve supplied and
              supported the well-established SPM-D line of synchronizers for
              over 20 years. And, now, the new SPM-D2 with its state-of-the-art
              technology extends the life of your synchronizers as a drop in
              replacement for your SPM-D units.
            </h3>
            <h3 className="pb-2 text-justify text-sm lg:text-base">
              The SPM-D2-10 series are microprocessor-based synchronizers
              designed for use on three phase AC generators equipped with
              Woodward or other compatible speed controls and automatic voltage
              regulators. The SPM-D2-10 synchronizers provide automatic
              frequency, phase and voltage matching using either analog or
              discrete output bias signals. These synchronizers are applied to a
              wide range of prime movers and generators, as their control
              signals may be set to fit several types of gensets — from
              fast-reacting diesel engines to soft-reacting gas turbines.
            </h3>
            <h3 className="pb-2 text-justify text-sm lg:text-base">
              All SPM-D2 synchronizers are password protected and configurable
              either through HMI (as were the SPM-D units) or through the
              ToolKit configuration tool with USB connectivity.
            </h3>

            <h3 className="pb-4 text-lg font-bold">Benefits:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Compatible with a wide range of governors, automatic voltage
                regulators, and circuit breakers
              </li>
              <li className="text-sm">
                True RMS voltage sensing for reduced susceptibility to harmonics
              </li>
              <li className="text-sm">
                Front face synchroscope for easy commissioning
              </li>

              <li className="text-sm">
                HMI programming and USB connectivity to Woodward ToolKit service
                tool
              </li>
              <li className="text-sm">
                Drop-in replacement for existing SPM-D10 synchronizers
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Synchronization for one or two circuit breakers
              </li>
              <li className="text-sm">
                Phase match or slip frequency synchronization with voltage
                matching
              </li>
              <li className="text-sm">
                Three position/analog outputs for speed and voltage bias signals
              </li>

              <li className="text-sm">Circuit breaker time compensation</li>
              <li className="text-sm">
                Discrete inputs for operating mode selection
              </li>
              <li className="text-sm">
                Two-line liquid crystal text display for operation, alarm
                indication, and visualization of measuring values
              </li>
              <li className="text-sm">LED synchroscope</li>
              <li className="text-sm">
                Wide range power supply option available
              </li>
              <li className="text-sm">PC and front panel configurable</li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Packages:</h3>

            <h3 className="pb-4 text-lg font-bold">3 Base Models</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                SPM-D2-10: provides 1-phase / 2-wire voltage measurement with
                options for analog or discrete biasing signals and wide range
                power supply
              </li>
              <li className="text-sm">
                SPM-D2-10/YB: provides 3-phase / 4-wire voltage measurement with
                discrete biasing signals an option for wide range power supply
              </li>
              <li className="text-sm">
                SPM-D2-10/PSY5: provides 1-phase / 2-wire voltage measurement
                with discrete biasing signals, option for wide range power
                supply and 2 sets of switchable parameter set.
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

export default EasyGenSPMD2;
