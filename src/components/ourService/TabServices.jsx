import { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const TabServices = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" lg:bg-white tabs-service lg:max-w-[76rem]  lg:h-[35rem] mx-auto  p-4 lg:p-8 flex flex-col lg:flex-row drop-shadow-md rounded-lg ">
      <div className="flex flex-wrap rounded-md cursor-pointer md:border lg:flex-col tab-contents lg:w-max lg:basis-1/3 md:bg-slate-50 md:grid lg:flex md:grid-cols-3 ">
        {props.data.map((item, index) => (
          <div
            className="m-1 text-xs font-semibold cursor-pointer md:p-3 md:m-0 lg:flex lg:flex-1 lg:text-lg "
            key={item.id}
            onClick={() => setActiveTab(index)}
          >
            <p
              className={`md:w-full w-fit rounded lg:rounded-lg flex lg:pl-3 p-2 items-center cursor-pointer transition-all-all duration-300 hover:bg-gray-800 hover:text-white ${
                index === activeTab
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-white text-gray-800  border"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="px-1 py-3 lg:pl-8 tab-cards md:basis-2/3 ">
        {props.data.map(
          ({ id, title, description, linkPath }, index) =>
            index === activeTab && (
              <div
                className=" card h-auto w-full bg-base-100 shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 rounded-md"
                key={id}
              >
                <div className="p-4 card-body md:p-6">
                  <h2 className="text-xl lg:text-3xl card-title">{title}</h2>
                  <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                  <p className="px-2 text-xs text-justify text-gray-800 md:p-0 md:text-sm ">
                    {description}
                  </p>
                  <button className="pl-2 text-gray-800 no-underline md:pl-0 btn btn-link w-max">
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
    </section>
  );
};

export default TabServices;
