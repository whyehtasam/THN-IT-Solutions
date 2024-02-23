import { Link } from "react-router-dom";
import CenterMode from "../Slider/CenterMode";
import { cardData } from "./achievementData";
function Portcard() {
  return (
    // <div className="grid grid-cols-1 gap-4  lg:grid-cols-4 md:grid-cols-3">
    <div className="postcard-container">
      <CenterMode>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between border-[2px] rounded-lg  p-6 md:p-10 md:h-[340px] bg-white relative "
          >
            <div className="justify-center">
              <img
                src={card.imgSrc}
                className="flex w-25 h-25"
                alt={card.title}
              />
            </div>
            <div>
              <h3 className="mt-1 mb-4 text-lg font-semibold text-left">
                {card.title}
              </h3>
              <p className="py-2 text-xs font-medium text-justify text-gray-500 md:text-sm">
                {card.description}
              </p>
            </div>
            <div className="flex md:absolute bottom-8 card-actions hover:underline">
              <Link to={card.link} target="_blank">
                <a className="text-sm  md:ml-0">Explore </a>»
              </Link>
            </div>
          </div>
        ))}
      </CenterMode>
    </div>

    // </div>
  );
}

export default Portcard;
