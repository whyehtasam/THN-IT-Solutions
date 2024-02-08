import { Link } from "react-router-dom";

const ServicesMenu = ({ services },index) => 
{
  return(
    <div className="flex p-12 mx-[4%]">
      {services.map((service, index) => (
       
       <div className="" key={index}>

        <div key={index =="3"} className="border-r-[1px] border-slate-300 px-6 text-left">
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