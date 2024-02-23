//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/easYgen-ls6.pdf";

function LS6XT() {
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
              EASYGEN | LS-6XT{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-LS-612XT-P1{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s easYgen | LS-6XT control is synchronizer controller
              with integrated mains decoupling and protection features. It
              enables several redundant communication schemes with peer
              controls. The applications range from independent synch check
              relay to complex power management system with multiple utility
              feeds, bus tie breakers and group breakers in combination with
              Woodward’s easYgen-3400XT/3500XT equipped genset controllers
              and/or easYgen | GC-3400XT equipped group controls. Redundant
              busses running among the peer controls ensure that availability of
              your power generation asset is not compromised to a single point
              of failure.
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
            <p className="pb-2 text-justify text-sm lg:text-base">
              The LS-6XT control together with easYgen-3000XT controls are
              designed to support OEM switchgear builders, generator packagers,
              and system integrators standardize on a single hardware for a
              multitude of utility or island parallel operations. Off-the-shelf
              LS-6XT control is software configurable for one/two breaker
              control, gensets / genset groups handling, and
              stand-alone/multiunit application.
            </p>

            <p className="pb-2 text-justify text-sm lg:text-base">
              The LS-6XT controller is available in a rugged aluminum powder
              coated housing. An LED Annunciator plate is integrated to the
              front for local annunciation of alarms that are customizable
              on-site. Woodward touch screen RP-3000XT is supported over a
              separate Ethernet network that works as remote operator control
              panel.
            </p>

            <h3 className="pb-2 text-justify text-lg font-bold lg:text-base">
              Application:
            </h3>

            <p className="pb-2 text-justify text-sm lg:text-base">
              premium circuit breaker control for reliability demanding complex
              power management applications
            </p>
            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Peak shaving operation</li>
              <li className="text-sm">Import/Export operation</li>
              <li className="text-sm">Islanded & Utility parallel operation</li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Works with easYgen-3400/3500XT genset controls and/or easYgen |
                GC-3000XT group control or as stand-alone synch check cum class
                I power measurement relay
              </li>
              <li className="text-sm">
                Control up to 64 breakers on up to 128 bus segments in an
                application
              </li>
              <li className="text-sm">
                Purpose built application schemes for
                <ul>
                  <li className="text-sm">One/two breaker control</li>
                  <li className="text-sm">Gensets/genset groups handling</li>
                  <li className="text-sm">Stand-alone/multiunit operation</li>
                </ul>
              </li>

              <li className="text-sm">
                Forward and reverse synchronization between utility and genset
                group
              </li>
              <li className="text-sm">
                Built-in redundant communication (CAN-Eth, Eth-Eth)
              </li>
              <li className="text-sm">
                Ethernet and RS-485 interfaces for remote control and
                visualization·
              </li>
              <li className="text-sm">
                Customizable logic, HMI screens (with RP-3000XT) and alarms
              </li>
              <li className="text-sm">
                Adjustable vector groups for synchronization
              </li>
              <li className="text-sm">Custom programmable I/Os</li>
              <li className="text-sm">Power measurement class 1</li>
              <li className="text-sm">Direct connect up to 690 Vac</li>
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

export default LS6XT;
