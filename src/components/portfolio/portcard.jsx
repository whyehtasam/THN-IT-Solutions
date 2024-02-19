import { Link } from "react-router-dom";

const cardData = [
  {
    imgSrc: "/tsnt3.png",
    title: "TSNT Solutions Pvt. Ltd.",
    description: "TSNT Solutions Pvt. Ltd. is to deliver best quality that meets and fulfill customer expectations and by leveraging knowledge, experience and technology.",
    link: "https://tsntsolutions.com/"
  },
  {
    imgSrc: "/tsntechno3.png",
    title: "TSN Technosolutions",
    description: "TSNT Solutions Pvt. Ltd. provides Annual Maintenance for panels .We has a team of dedicated engineers and technicians for maintain the works and Maintenance services.",
    link: "https://tsntechno.in/"
  },
  {
    imgSrc: "/power.png",
    title: "Altarnative Power Solutions",
    description: "Any generator set used for emergency or primary source must have periodic service and maintenance performed. Setting up a planned maintenance schedule.",
    link: "https://www.alternativepower.in/"
  },
  {
    imgSrc: "/tsntauto3.png",
    title: "TSN Automation",
    description: "THN IT Solutions, we believe in the power of technology to transform businesses and streamline operations. As a premier software startup, it help our Business.",
    link: "https://tsnautomation.in/"
  }
];

function Portcard() {
  return (
    <div className="flex gap-4 ">
      {cardData.map((card, index) => (
        <div key={index} className="shadow-xl border-[2px] rounded-lg justify-center p-10 h-50 bg-white">
          <div className="justify-center">
            <img src={card.imgSrc} className="flex w-25 h-25" alt={card.title} />
          </div>
          <h3 className="mb-4 text-lg font-semibold text-left">{card.title}</h3>
          <p className="text-sm font-medium text-justify text-gray-500">{card.description}</p>
          <div className="flex mt-4 card-actions hover:underline">
            <Link to={card.link} target="_blank" style={{ color: "blue" }}>
              <a className="ml-2">Explore </a>»
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portcard;