import { Link } from "react-router-dom";

import {cardData} from './achievementData'
function Portcard() {
  return (
    <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 ">
      {cardData.map((card, index) => (
        <div key={index} className="md:shadow-xl border-[2px] rounded-lg justify-center p-6 md:p-10 h-50 bg-white">
          <div className="justify-center">
            <img src={card.imgSrc} className="flex w-25 h-25" alt={card.title} />
          </div>
          <h3 className="mb-4 text-lg font-semibold text-left">{card.title}</h3>
          <p className="text-xs py-2 md:text-sm font-medium text-justify text-gray-500">{card.description}</p>
          <div className="flex md:mt-4 card-actions hover:underline">
            <Link to={card.link} target="_blank" >
              <a className=" text-sm md:ml-2">Explore </a>»
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portcard;