import { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";


const TabServices = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" bg-white tabs-service max-w-6xl h-[35rem] mx-auto my-16 p-10 flex drop-shadow-md rounded-lg ">
      <div className="tab-contents w-max basis-1/3 flex flex-col cursor-pointer bg-slate-50 border rounded-md">
        {props.data.map((item, index) => (
          <div
            className="p-3 text-lg flex font-semibold flex-1 cursor-pointer"
            key={item.id}
            onClick={() => setActiveTab(index)}
          >
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
      <div className="tab-cards basis-2/3  pl-8 py-3 ">

        
        {props.data.map(
          ({ id, title, description,linkPath }, index) =>
            index === activeTab && (
              <div
                className=" card h-auto w-full bg-base-100 shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 "
                key={id}
              >
                <div className="card-body">
                  <h2 className="card-title text-3xl">{title}</h2>
                  <div className="h-[0.5px] bg-opacity-30 bg-black w-10/12 "></div>
                  <p className="text-justify text-xs lg:text-sm text-gray-800 ">
                    {description}
                  </p>
                  <button className="btn btn-active btn-link text-gray-800 w-max pl-0 "><Link to={`${linkPath}`}>Read more</Link></button>
                </div>
                
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default TabServices;
