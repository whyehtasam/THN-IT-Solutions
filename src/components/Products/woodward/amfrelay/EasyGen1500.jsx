//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/easYgen-1500.pdf";

function EasyGen1500() {
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
              EASYGEN-1500{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-EASYGEN-1500-55B{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The innovative features of the easYgen-1500 make it the
              intelligent choice for specialized non-paralleling mobile power
              and emergency stand-by applications.
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
              The innovative features of the easYgen-1500 make it the
              intelligent choice for specialized non-paralleling mobile power
              and emergency stand-by applications:
            </h3>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Flexible breaker configuration and start-stop logic
              </li>
              <li className="text-sm">Real and reactive power sensing</li>
              <li className="text-sm">Remote-start capability</li>
            </ul>
            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Configurable for 1 or 2 breaker operation
              </li>
              <li className="text-sm">
                Flexible start-stop logic for diesel and gas engines
              </li>
              <li className="text-sm">
                True RMS voltage and current sensing for generator and mains
              </li>

              <li className="text-sm">
                Complete engine/generator protection, metering, and mains
                monitoring
              </li>
              <li className="text-sm">
                LogicsManager™ to combine measured values, internal conditions,
                and I/O states with boolean operators and programmable timers,
                allowing for complex controls
              </li>
              <li className="text-sm">
                Communication to engine ECU’s, PLC (Programmable Logic
                Controls), external terminals (I/O extension)
              </li>
              <li className="text-sm">
                True RMS voltage and current sensing for generator and mains
              </li>
              <li className="text-sm">
                True RMS voltage and current sensing for generator and mains
              </li>
            </ul>
          </div>

          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-sm font-bold">
              Advanced CAN communication provides control of most common engine
              ECU’s and allows connection to:
            </h3>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Woodward IKD 1 module for expansion of the onboard I/O set
              </li>
              <li className="text-sm">
                Easylite-100 remote annunciation panel for NFPA-compliant
                installations
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

export default EasyGen1500;
