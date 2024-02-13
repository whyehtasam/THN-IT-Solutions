import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
        "p-10 mb-12 grid  mx-auto rounded-lg bg-white shadow-lg " + className
      }
    >
      <h1 className="text-4xl font-semibold text-center">{title}</h1>
      <div className="h-[0.5px] bg-opacity-30 my-2 bg-black w-10/12 mx-auto "></div>
      <p className="mx-auto mt-1 text-base font-medium leading-loose text-justify text-gray-500 w-fit">
        {para}
      </p>
      <div className="flex mt-10 tech-icons justify-evenly">
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faReact}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">React</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faNode}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Node.js</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faNodeJs}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Express.js</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faAngular}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Angular</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faJava}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Java</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faAws}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">AWS</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faPython}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Python</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FontAwesomeIcon
            icon={faDocker}
            className="text-gray-600 cursor-pointer text-8xl drop-shadow-md hover:-translate-y-3 transition-all"
          />
          <p className="text-sm text-gray-600">Docker</p>
        </div>
      </div>
    </div>
  );
};

export default OurTech;
