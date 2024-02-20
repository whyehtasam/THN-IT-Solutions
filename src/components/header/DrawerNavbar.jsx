import React from "react";
import { Link } from "react-router-dom";
import { IntroServiceCardData } from "../ourService/ourServiceData";
const DrawerNavbar = () => {
  return (
    <ul className="gap-4 menu rounded-box">
      <li className="text-base font-semibold text-gray-800">
        <Link to="/">Home</Link>
      </li>
      <li className="text-base font-semibold text-gray-800">
        <details>
          <summary>
            <Link to="/ourServices">Our Services</Link>
          </summary>
          <ul>
            {IntroServiceCardData.map((service) => (
              <li key={service.id} className="text-sm text-gray-600 p-1">
                <Link to={service.linkPath}>
                  {service.title.split(" ").slice(1).join(" ")}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
      <li className="text-base font-semibold text-gray-800">
        <details>
          <summary>
            <Link to="/technology">Technology</Link>
          </summary>
          <ul>
            <li className="text-sm text-gray-600 p-2">Frontend Development</li>
            <li className="text-sm text-gray-600 p-2">Backend Development</li>
            <li className="text-sm text-gray-600 p-2">Database</li>
            <li className="text-sm text-gray-600 p-2">Cloud</li>
            <li className="text-sm text-gray-600 p-2">Artificial Intelligence</li>
            <li  className="text-sm text-gray-600 p-2">Infrastructure Development</li>
            <li className="text-sm text-gray-600 p-2">DevOps</li>
          </ul>
        </details>
      </li>
      <li className="text-base font-semibold text-gray-800">
        <details>
          <summary>
            <Link to="/portfolio/profile">Portfolio</Link>
          </summary>
          <ul>
          <Link to='/portfolio/profile' ><li className="text-sm text-gray-600 p-2">Our Profile</li></Link>
          <Link to='/portfolio/OurApproach'><li className="text-sm text-gray-600 p-2">Process Overview</li></Link>
          <Link to='/portfolio/OurAchievement'><li className="text-sm text-gray-600 p-2">Our Achievement</li></Link>
          </ul>
        </details>
      </li>
      
      <li className="text-base font-semibold text-gray-800">
        <Link to="/career">Career</Link>
      </li>
      <li className="text-base font-semibold text-white bg-gray-900 rounded w-fit">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default DrawerNavbar;
                