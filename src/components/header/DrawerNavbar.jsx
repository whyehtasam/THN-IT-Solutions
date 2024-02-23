import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IntroServiceCardData } from "../ourService/ourServiceData";
const DrawerNavbar = ({ onLinkClick }) => {
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click 
    onLinkClick();
  };
  return (
    <ul className="gap-4 menu rounded-box" ref={node}>
      <li className="text-base font-semibold text-gray-800" onClick={onLinkClick} >
        <Link to="/">Home</Link>
      </li>
      <li className="text-base font-semibold text-gray-800" >
        <details>
          <summary>
            <Link to="/ourServices" onClick={onLinkClick}>Our Services</Link>
          </summary>
          <ul>
            {IntroServiceCardData.map((service) => (
              <li key={service.id} className="text-sm text-gray-600 p-1" onClick={onLinkClick}>
                <Link to={service.linkPath}>
                  {service.title.split(" ").slice(1).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li className="text-base font-semibold text-gray-800" onClick={onLinkClick} >
        <Link to="/technology">Technology</Link>
      </li>
      {/* <li className="text-base font-semibold text-gray-800" >
        <details>
          <summary>
            <Link to="/technology" onClick={onLinkClick}>Technology</Link>
          </summary>
          <ul>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Frontend Development</li>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Backend Development</li>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Database</li>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Cloud</li>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Artificial Intelligence</li>
            <li  className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Infrastructure Development</li>
            <li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>DevOps</li>
          </ul>
        </details>
      </li> */}
      <li className="text-base font-semibold text-gray-800" >
        <details>
          <summary>
            <Link to="/portfolio/profile" onClick={onLinkClick}>Portfolio</Link>
          </summary>
          <ul>
          <Link to='/portfolio/profile' ><li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Our Profile</li></Link>
          <Link to='/portfolio/ProcessOverView'><li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Process Overview</li></Link>
          <Link to='/portfolio/OurAchievement'><li className="text-sm text-gray-600 p-2" onClick={onLinkClick}>Our Achievement</li></Link>
          </ul>
        </details>
      </li>
      
      <li className="text-base font-semibold text-gray-800" onClick={onLinkClick}>
        <Link to="/career">Career</Link>
      </li>
      <li className="text-base font-semibold text-white bg-gray-900 rounded w-fit" onClick={onLinkClick}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default DrawerNavbar;
                