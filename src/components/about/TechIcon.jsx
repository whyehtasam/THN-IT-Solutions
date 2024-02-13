import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const TechIcon = ({ icon, label, className,IconStyle }) => (
  <div className={`flex flex-col my-4 items-center justify-center gap-5 ${className}`}>
    <FontAwesomeIcon
      icon={icon}
      className={"text-gray-600 cursor-pointer lg:text-8xl drop-shadow-md hover:-translate-y-3 transition-all " + IconStyle}
    />
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default TechIcon;