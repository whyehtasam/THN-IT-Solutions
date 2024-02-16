import { Link } from "react-router-dom";

const TechnologyMenu = ({ technology }, index) => {
  return (
    <div className="p-[2%] mx-auto items-center grid grid-cols-4 place-content-evenly">
      {technology.map((tech, index) => (
        <div className="border-r-[2px] my-[4%]">
          <Link to={tech.path} className="hover:underline">
            <h3 className="p-[2vh] font-bold ">
              {tech.technologyName} {" >"}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TechnologyMenu;
