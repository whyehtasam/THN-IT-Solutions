import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Container from "../wrappers/Container";
const TechnologiesTab = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="technologies">
      <Container className="flex mx-auto my-16 bg-white rounded-lg shadow-md tabs-service max-w-7xl h-">
        <div className="h-full p-5 py-3 tab-cards basis-2/3 ">
          {props.data.map(
            ({ id, title, description, linkPath }, index) =>
              index === activeTab && (
                <div
                  className=" card h-auto w-full bg-base-100 shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 "
                  key={id}
                >
                  <div className="card-body">
                    <h2 className="text-3xl card-title">{title}</h2>
                    <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                    <p className="text-xs text-justify text-gray-800 lg:text-sm ">
                      {description}
                    </p>
                    <button className="pl-0 text-gray-800 no-underline btn btn-link w-max ">
                      <Link to={`${linkPath}`}>
                        Explore{" "}
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="ml-1 text-xs"
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="grid gap-3 p-2 cursor-pointer garounded-md tab-contents w-max basis-1/2 ">
          {props.dataR.map((item, index) => (
            <div
              className="bg-white shadow-md collapse collapse-arrow"
              key={index}
              onClick={() => setActiveTab(index)}
            >
              <input type="checkbox" className="peer" />
              <div className="text-lg font-semibold cursor-pointer collapse-title peer-checked:bg-gray-800 peer-checked:text-white">
                {item.title}
              </div>
              <div className="transition-all collapse-content peer-checked:bg-gray-800 peer-checked:text-white">
                <p className="text-sm">{item.description}</p>
                <button className="pl-0 text-white no-underline btn btn-link w-max ">
                  <Link to={`${""}`}>
                    Explore{" "}
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="ml-1 text-xs"
                    />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologiesTab;
