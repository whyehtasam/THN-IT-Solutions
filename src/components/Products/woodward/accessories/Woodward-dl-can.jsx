//import { Link } from "react-router-dom";
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
              DL-CAN{" "}
            </h2>
            <h3 className="pb-4 text-2xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
              COMMUNICATION DEVICE-DL-CAN CAN FIBER OPTIC SYSTEM{" "}
            </h3>
            <p className="pb-2 text-justify text-sm lg:text-base">
              DL-CANR allows the connection of CAN networks by using redundant
              fiber optic systems Received data telegrams are refreshed. This
              allows to built up structures with a high number of systems.
            </p>

            <h3 className="pb-4 text-lg font-bold">FEATURES & FUNCTIONALITY</h3>

            <p className="pb-2 text-justify text-sm lg:text-base">
              DL-CANR allows the connection of CAN networks by using redundant
              fiber optic systems Received data telegrams are refreshed. This
              allows to built up structures with a high number of systems.
            </p>

            <p className="pb-2 text-justify text-sm lg:text-base">
              Important performance features of the transfer with POF, HCS,
              multimode or single mode fiber optic are the electromagnetic
              ruggedness, the potential separation of transmitter and receiver,
              as well as ranges up to 40km between two fiber optic systems. LEDs
              and potential-free contacts (optional) of a fault detector relay
              are able to signal defective states.
            </p>
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
