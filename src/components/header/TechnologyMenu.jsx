import { Link } from "react-router-dom";

const TechnologyMenu = ({ technology },index) => 
{
  return(
    <div className="py-12">
      {technology.map((tech, No) => (
     
    <div className="border-r-[2px] pr-8">
      <Link to={tech.path} className="hover:underline"><h3 className="p-[2vh] font-bold ">{tech.technologyName} {" >"}</h3></Link>
      
    </div>
        
      ))}
    </div>
  );
};

export default TechnologyMenu;