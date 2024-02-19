import { Link } from "react-router-dom";

import {cardData} from './achievementData'
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