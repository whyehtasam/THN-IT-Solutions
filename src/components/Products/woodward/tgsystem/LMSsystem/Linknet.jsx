//import { Link } from "react-router-dom";
//import { careerCardData } from "./cardsCareer";
//import svg from "../../assets/WeAreHiring.svg";
function LINKNET() {
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
              LINKNET HT AIO{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              8 AI/ 2 AO, 4-20mA, Self-Powered{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward LINKnet HT distributed I/O nodes are small CANopen based
              modules designed for turbine control in harsh vibration and
              temperature environments.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward self-powered LINKnet HT distributed I/O nodes are small
              CANopen based modules designed for turbine control in harsh
              vibration and temperature environments.
            </p>

            <p className="pb-2 text-justify text-sm lg:text-base">
              Woodward Control Systems like MicroNet Plus can easily program
              these nodes to gather I/O sensor data from remote locations.
              Woodward’s GAP Graphical Application Program software provides
              automatic node initialization, RateGroup operation, and diagnostic
              features when using these
            </p>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Gas and Steam Turbines</li>
              <li className="text-sm">Gas and Diesel Engines</li>
              <li className="text-sm">Hydro Turbines</li>
            </ul>
          </div>

          <p className="pb-2 text-justify text-sm lg:text-base">
            Because LINKnet HT nodes may be skid mounted with the turbine or
            engine, typical installation and maintenance costs for cables,
            sensor wiring, and field troubleshooting can be significantly
            reduced.
          </p>

          <div className="py-4 md:py-8">
            <h3 className="pb-4 text-lg font-bold">Features:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">Self-powered</li>
              <li className="text-sm">
                High temperature operating range of –40 °C to +100 °C
              </li>
              <li className="text-sm">
                High vibration operation for skid mount vibration and shock
                levels
              </li>

              <li className="text-sm">
                18 V to 36 V (dc) isolated input power with isolated CAN
                communications
              </li>
            </ul>

            <h3 className="pb-4 text-lg font-bold">Benefits:</h3>

            <ul className="pl-4 space-y-2 list-disc">
              <li className="text-sm">
                Suitable for skid mounted turbine and engine control setups
              </li>
              <li className="text-sm">
                Designed for high temperature and high vibration operation
              </li>
              <li className="text-sm">
                Designed for easy integration with Woodward controls like
                MicroNet Plus
              </li>

              <li className="text-sm">
                Provides Plug-N-Play integration with Woodward GAP software and
                RateGroups
              </li>
              <li className="text-sm">
                Provides a convenient upgrade path for older LINKnet distributed
                I/O nodes
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

export default LINKNET;
