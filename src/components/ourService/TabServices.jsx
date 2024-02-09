import { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const TabServices = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" bg-white tabs-service max-w-6xl h-[35rem] mx-auto my-16 p-10 flex drop-shadow-md rounded-lg ">
      <div className="flex flex-col border rounded-md cursor-pointer tab-contents w-max basis-1/3 bg-slate-50">
        {props.data.map((item, index) => (
          <div
            className="flex flex-1 p-3 text-lg font-semibold cursor-pointer"
            key={item.id}
            onClick={() => setActiveTab(index)}>
            <p
              className={`w-full rounded-lg flex pl-3 items-center cursor-pointer transition-all-all duration-300 hover:bg-black hover:text-white ${
                index === activeTab
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-black  border"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="py-3 pl-8 tab-cards basis-2/3 ">

        
        {props.data.map(
          ({ id, title, description,linkPath }, index) =>
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
                  <button className="pl-0 text-gray-800 no-underline btn btn-link w-max "><Link to={`${linkPath}`}>Explore <FontAwesomeIcon icon={faAngleRight} className="ml-1 text-xs" /></Link></button>
                </div>
                
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default TabServices;
