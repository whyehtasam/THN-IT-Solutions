//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/Flex-500.pdf";




function FLEX500() {
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
              FLEX500{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              AC/DC, Front Panel, Standard{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The Flex500 is a programmable real-time, deterministic, purpose
              built digital controller with integrated HMI display that
              optimizes performance and protection of compressors, steam
              turbines, gas turbines and hydro turbines. Woodward designed and
              built based on our reliable, field proven 505D hardware platform
              combined with our industry trusted and easy to use GAP programs
              and advance service tools. This model is a front panel mount, high
              voltage (88-264 Vac or 90-150 Vdc) power input and is rated for
              Class 1, Div. 2 standard location.
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
              The Flex500 control system represents a new generation of purpose
              built controller with integrated HMI display. The industrial
              hardware platform offers a robust, low-cost control for a wide
              variety of turbine, engine, and compressor applications. A low
              cost alternative to general purpose PLC’s, the Flex500 provides an
              easy, user friendly GAP programming architecture along with a true
              industrial level long production and support lifecycle eliminating
              frequent high cost obsolescence issues.
            </h3>

            <h3 className="pb-2 text-justify text-sm lg:text-base">
              The platform’s real-time operating system and dedicated inputs and
              outputs provide deterministic performance for key prime mover
              control functionality. Its fast I/O scan times, high accuracy, and
              software program synchronization make it ideal for use in
              controlling and protecting critical high speed rotating equipment.
            </h3>

            <h3 className="pb-4 text-lg font-bold">Applications:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Compressor control and protection</li>
              <li className="text-sm">Steam turbines</li>
              <li className="text-sm">Gas turbines</li>

              <li className="text-sm">Hydro turbines</li>
              <li className="text-sm">Gas and diesel engines</li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Integrated human machine interface (HMI) display
              </li>
              <li className="text-sm">
                Powerful real-time microprocessor control
              </li>
              <li className="text-sm">Fast, accurate onboard I/O channels</li>

              <li className="text-sm">
                Combines real time control with PLC programming
              </li>
              <li className="text-sm">
                Deterministic I/O scan rates as fast as 5 msec.
              </li>
              <li className="text-sm">
                Distributed I/O RTCnet™ and LINKnet HT™ compable
              </li>
              <li className="text-sm">
                Compliant with time synchronization protocol SNTP
              </li>
              <li className="text-sm">Network control connectivity to DCS</li>
              <li className="text-sm">
                Low cost alternative to a general purpose PLC
              </li>
              <li className="text-sm">Sulfur-resistant conformal coating</li>
              <li className="text-sm">
                Certified for Standard or Hazardous Locations
              </li>
            </ul>
          </div>

          <h3 className="pb-4 text-lg font-bold">
            Distributed Control System (DCS) System
          </h3>

          <h3 className="pb-2 text-justify text-sm lg:text-base">
            Designed to function as a distributed control system, Woodward-based
            RTCnet™ and/or LINKnet HT distributed I/O modules can be used in
            conjunction with the Flex500 platform to expand the number and type
            of input and output signals as required by the specific application.
          </h3>

          <h3 className="pb-2 text-justify text-sm lg:text-base">
            Ethernet, serial and CAN communication ports, and the related
            Modbus® TCP/IP and CANopen protocols also make this platform ideal
            for functioning as part of an overall plant DCS or as a standalone
            controller. Four Ethernet ports and four CAN ports allow for the
            network flexibility and redundancy necessary for today’s critical
            control system architectures.
          </h3>
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

export default FLEX500;
