//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/DSLC2XT.pdf";





function DSLCXT() {
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
              DSLC-2XT{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              Digital Synchronizer and Load Control, Redundant Communication,
              Configurable{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s DSLC-2XT™ is a microprocessor-based synchronizer and
              load control designed for use on three-phase AC generators. The
              DSLC-2XT combines synchronizer, load sensor, load control, dead
              bus closing system, VAR, power factor, process control and hot
              swap redundant load share communication, all in one powerful
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
              Woodward’s DSLC-2XT™ is a microprocessor-based synchronizer and
              load control designed for use on three-phase AC generators. The
              DSLC-2XT combines synchronizer, load sensor, load control, dead
              bus closing system, VAR, power factor and process control, all in
              one powerful package.
            </h3>

            <h3 className="pb-2 text-justify text-sm lg:text-base">
              Applications allow up to 32 generators to be precisely paralleled
              and controlled. Two dedicated Ethernet systems provide hot-swap
              redundant communications between DSLC-2XT and MSLC-2XT units. A
              third Ethernet port is provided for customer remote control and
              monitoring capability using Modbus TCP allowing easy DCS and PLC
              interfacing. Modbus RTU is available through a separate RS-485
              port.
            </h3>

            <h3 className="pb-2 text-justify text-sm lg:text-base">
              DSLC-2XT is a 3rd generation control built on field proven legacy
              of the original DSLC and 2nd generation DSLC-2. The DSLC-2XT
              excels in either simple generator or complex generator system
              applications. The DSLC-2XT/MSLC-2XT combination provides multiple
              unit, segment, utility, and intertie breaker control for complex
              power systems.
            </h3>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Dedicated Ethernet network for precise system communications
                between all DSLC-2XT’s and MSLC-2XT’s reduces system wiring.
              </li>
              <li className="text-sm">
                Ethernet Modbus TCP, and Modbus RTU, for remote control and
                monitoring.
              </li>
              <li className="text-sm">
                Redundant Ethernet communication for enhanced reliability.
              </li>

              <li className="text-sm">
                The “system update” feature allows for removing or adding
                generator sets.
              </li>
              <li className="text-sm">
                Integrated DSLC-2XT and MSLC-2XT system functionality eliminates
                the need for redundant sensors (like PTs, CTs, and MOPs) that
                connect to individual modules such as the load sensors and
                synchronizers.
              </li>
              <li className="text-sm">
                Back panel mounting and a reduced size frees up door space and
                provides easy wiring.
              </li>
              <li className="text-sm">
                Eliminates the need for additional relay logic to control dead
                bus closing.
              </li>
              <li className="text-sm">
                Slip frequency paralleling, voltage matching, and speed bias
                transfer between the synchronizer and load control result in
                smooth paralleling without the risk of reverse power trips.
              </li>
              <li className="text-sm">
                Three-phase true RMS power sensing makes the DSLC-2XT control
                accurate even with unbalanced phase loading and voltage
                fluctuations.
              </li>
              <li className="text-sm">
                Phase angle correction for GCB when a transformer is included in
                the system.
              </li>
              <li className="text-sm">
                The Woodward ToolKit™ software allows flexible setup using the
                same basic menu tree as the original DSLC-2 plus an overview
                screen. Graphical overview of generator and bus bar parameters
                with trending makes the DSLC-2XT commissioning friendly. All the
                Woodward devices can be programmed from a single connection to
                the network.
              </li>
              <li className="text-sm">
                The ToolKit can be accessed either via one of the Ethernet ports
                or via USB port.
              </li>
              <li className="text-sm">
                Woodward offers update files should legacy DSLC-2 be mixed with
                the new DSLC-2XT
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

export default DSLCXT;
