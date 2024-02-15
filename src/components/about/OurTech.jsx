// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TechIcon from "./TechIcon";
import {
  faReact,
  faAngular,
  faNode,
  faJava,
  faNodeJs,
  faPython,
  faAws,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
const OurTech = ({ className, para, title }) => {
  return (
    <div
      className={
        "lg:p-10 lg:mb-12 grid  lg:mx-auto rounded-lg bg-white shadow-lg " + className
      }
    >
      <h1 className="md:text-4xl text-2xl font-semibold text-center">{title}</h1>
      <div className="h-[0.5px] bg-opacity-30 my-2 bg-black w-10/12 mx-auto "></div>
      <p className="mx-auto lg:mt-1 text-xs md:text-base font-medium leading-loose text-justify text-gray-500 w-fit">
        {para}
      </p>
      <div className="flex mt-5 justify-center  md:mt-10 tech-icons lg:justify-evenly flex-wrap mx-auto">
        <TechIcon icon={faReact} label="React" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faNode} label="Node.js" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faNodeJs} label="Express.js" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faAngular} label="Angular" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faJava} label="Java" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faAws} label="AWS" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faPython} label="Python" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
        <TechIcon icon={faDocker} label="Docker" className="" IconStyle="text-4xl md:text-5xl  mx-4"/>
      </div>
    </div>
  );
};

export default OurTech;
