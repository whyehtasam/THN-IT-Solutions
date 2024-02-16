import { Link } from "react-router-dom";

const ServicesMenu = ({ services },index) => 
{
  return(
    <div className="p-[2%]  grid grid-cols-4  place-content-evenly">
      {services.map((service, index) => (
       
       <div className="" key={index}>

        <div key={index =="3"} className="border-r-[1px] border-slate-300 px-6 text-left my-[3%]">
          <h3 className="text-lg pb-2" >
            <Link to={service.path} className="font-bold pr-2 hover:underline">{service.menuTitle}{" >"}</Link>
          </h3>
          <ul>
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm ">{item}</li>
            ))}
          </ul>
        </div>
       </div>
        
      ))}
    </div>
  );
};

export default ServicesMenu;