import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
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
              USB-RS-232{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              COMMUNICATION DEVICE-DPC{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              The USB-UART Configuration Cable is used to connect a Woodward
              control or protection unit with a PC or laptop for configuration
              and monitoring purposes. It Interfaces with RJ45 Connector and
              RS-232. The PC/laptop side is separated from the Woodward unit
              side through galvanic isolation. Part number 5417-557 is dedicated
              for use with a wide-range of Woodward power management and
              protection products, including non-XT easYgen devices.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Dimensions: approximately 85 mm x 50 mm x 22 mm (L x W x H)
              </li>
              <li className="text-sm">
                Weight: approximately 60 g (without cables)
              </li>
              <li className="text-sm">
                Transmission: Maximum transmission speed on UART side: 115200
                baud
              </li>
            </ul>

            <p className="pb-2 text-justify text-sm lg:text-base">
              Please download and install the latest VCP driver from:
              <link>www.ftdichip.com/Drivers/VCP.htm</link>
            </p>

            <p className="pb-2 text-justify text-sm lg:text-base">
              The appropriate PC software for P/N 5417-557 can be downloaded and
              installed from the Woodward website:
              <link>www.woodward.com/software</link>
            </p>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Maximum transmission speed on USB side: 12 Mbit/s (according to
                USB 2.0 standard)
              </li>
              <li className="text-sm">
                Temperature: Ambient operating temperature: (–20 to +70) °C
              </li>
              <li className="text-sm">Storage temperature: (–40 to +85) °C</li>
              <li className="text-sm">
                Interfaces: RJ45 connector to Woodward units, which support
                USB-UART connectivity
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Power supply:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                5 V via USB connector (on host PC side)
              </li>
              <li className="text-sm">
                5 V via RJ45 connector (Woodward unit side—only for P/N
                5417-1251)
              </li>
            </ul>
          </div>
        </div>
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
