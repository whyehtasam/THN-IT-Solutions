//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from "./pdfs/easYgen-ls5.pdf";

function LS521() {
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
              LS-521{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              CONTROL-LS-521-5/P1{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward’s LS-5 Series relays are synchronizer controllers with
              integrated mains decoupling and protection features. The
              applications range from independent synch check relay to complex
              power management with multiple utility feeds, bus tie-breakers and
              group breakers in combination with Woodward’s
              easYgen-3400XT/3500XT equipped genset controllers.
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
              The Woodward LS-5 Series are synchronizer and load share
              controllers with integrated protective functions. They are
              designed to enable complex power management applications with
              multiple incoming mains and bus breakers in combination with
              easYgen-3400/3500 equipped genset controllers.
            </p>

            <p className="text-sm">
              The LS-5 devices will manage synchronization, loading and
              unloading on each bus segment and send the required voltage and
              frequency references via CAN bus to the easYgen-3400/3500 genset
              controllers. LS-5 devices which are located on the incoming mains
              breakers will automatically detect mains failures and start the
              corresponding gensets accordingly. Wiring efforts are reduced to a
              minimum, since only one CAN bus connection is required between all
              LS-5 and easYgen-3400/3500 controllers. It is not required to wire
              any AC measurement signals or discrete inputs/outputs between the
              LS-5 and easYgen-3400/3500 controllers.
            </p>

            <p className="text-sm">
              Extensive remote control capabilities via discrete inputs or
              interfaces are provided to easily integrate the LS-5 into each
              application environment. The back panel mounted LS-521 has a
              rugged aluminum chassis for use in harsh environments or confined
              spaces.
            </p>

            <h3 className="pb-4 text-lg font-bold">Features include:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Up to 16 LS-5 units can be operated in one network with up to 32
                easYgen-3400/3500
              </li>
              <li className="text-sm">
                Phase match or slip frequency synchronization with voltage
                matching
              </li>
              <li className="text-sm">
                Full protection package ( including df/dt (ROCOF), phase shift
                and mains voltage increasing protection according to new German
                grid code requirements in VDE-0126-1-1)
              </li>
              <li className="text-sm">Segment control for the load sharing</li>
              <li className="text-sm">Event Log with up to 300 entries</li>
              <li className="text-sm">
                Automatic date and time synchronization between the LS-5 units
                and the connected easYgen-3400/3500 controls
              </li>
              <li className="text-sm">
                LS-5 “Stand alone” mode without the easYgen-3400/3500 is
                possible
              </li>
              <li className="text-sm">
                Preconfigured application modes for the most common applications
                in the field (MCB or MCB/GGB application)
              </li>
              <li className="text-sm">Automatic and Manual mode</li>
              <li className="text-sm">
                Full remote control via CAN or RS-485 interface
              </li>
              <li className="text-sm">
                In case transformers are used in the application, vector group
                adjustment is available
              </li>
              <li className="text-sm">Breaker open/close failure detection</li>
              <li className="text-sm">Mains decoupling “Test” mode</li>
              <li className="text-sm">Multilingual capability</li>
              <li className="text-sm">Lock Keypad feature</li>
            </ul>

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

export default LS521;
