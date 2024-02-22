import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
import contactSvg from '../../assets/a-Contact.svg'
// import logo from "../../assets/thnit.png";
// import logo from "../../assets/logo.jpg";
import logo from "../../assets/flogo.png";
// import logo from "../../assets/logooo.png";
// import logo from "../../assets/logoo.png";
// import ServicesMenu from "./OurServicesMenu";
// import TechnologyMenu from "./TechnologyMenu";
//import { serviceData, TechnologyData } from "./ServicesTechnologyData";

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisibleTechnology, setIsVisibleTechnology] = useState(false);
  const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false);

  const ItemStyle =
    "border-b-[3px] rounded-none px-[2vw] py-[2vh] hover:bg-gray-100 hover:border-b-[3px] hover:border-gray-500";

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerClick = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const handleLinkClick = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div className={`drawer bg-gray-800 sticky top-0 z-10 font-sans`}>
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerVisible}
        onChange={handleDrawerClick}
      />
      <div className="flex flex-col drawer-content">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                color="white"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="container  flex justify-between w-[90%] mx-auto z-5">
            <div className="flex ">
              <Link to="/">
                <img
                  src={logo}
                  className="z-10 h-16 py-2 ml-2 sm:ml-0 w-8/12 md:w-10/12 object-contain "
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="hidden  md:hidden lg:block">
              <ul className="menu menu-horizontal p-0 h-[100%]  flex justify-end z-10 items-center my-auto">
                {/* Navbar menu content here */}
                <Link to="/">
                  <li>
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold ">
                      HOME
                    </a>
                  </li>{" "}
                </Link>

                <div className=" group">
                  <Link to="/ourServices" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleServices(false)}
                      className=""
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        OUR SERVICES
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisibleServices && (
                    <li
                      className="  absolute shadow bg-base-100 rounded-none min-w-64 group"
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                    >
                      <Link
                        to="/ourServices/ApplicationDevelopment"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Application Development</a>
                      </Link>
                      <Link
                        to="/ourServices/CloudService"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Cloud Service</a>
                      </Link>
                      <Link
                        to="/ourServices/MaintenanceSupport"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Maintenance & Support</a>
                      </Link>
                      <Link
                        to="/ourServices/DataAnalytics"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Analytics & Business Intelligence</a>
                      </Link>
                      <Link
                        to="/ourServices/DevOps"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>DevOps</a>
                      </Link>
                      <Link
                        to="/ourServices/QualityEngineering"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Quality Engineering</a>
                      </Link>
                    </li>
                  )}
                </div>

                {/* <Link to='/aboutUs'><li><a className="z-10 text-lg font-medium tracking-wider text-gray-800 rounded-sm hover:font-semibold">About Us</a></li> </Link> */}

                {/* <Link to="/ourServices" className="relative group">
                  <li>
                    <a
                      className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold relative group"
                      onMouseEnter={() => {
                        setIsVisibleTechnology(false);
                        setIsVisibleServices(true);
                      }}
                      // onMouseLeave={() => setIsVisibleTechnology(false)}
                      onClick={() => setIsVisibleServices(false)}
                    >
                      OUR SERVICES
                      <span className=" rotate-[270] group-hover:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>{" "}
                </Link> */}

                <div className=" group">
                  <Link to="/technology" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleTechnology(true)}
                      onMouseLeave={() => setIsVisibleTechnology(false)}
                      onClick={() => setIsVisibleTechnology(false)}

                      //className="group-hover:border-b-[4px] group-hover:border-[#4e8e9b]"
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        TECHNOLOGY
                        {/* <span className=" rotate-[270] group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                      </span> */}
                      </a>
                    </li>
                  </Link>

                  {/* isVisibleTechnology && ( <li className="absolute shadow bg-base-100 rounded-none min-w-64 group"
              onMouseMove={()=> setIsVisibleTechnology(true)}
              onMouseLeave={()=> setIsVisibleTechnology(false)}>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Frontend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Backend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Database</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Cloud</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Artificial intelligence</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Infrastructure Development</a></Link>
              </li>)*/}
                </div>

                {/* <Link to="/technology" className=" relative group">
                  <li>
                    <a
                      className="z-10 flex text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold relative group"
                      onMouseEnter={() => {
                        // setIsVisibleTechnology(true);
                        // setIsVisibleServices(false);
                      }}
                      // onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleTechnology(false)}
                    >
                      TECHNOLOGY
                      <span className=" rotate-[270] group-hover:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </Link> */}

                <div className="group">
                  <Link to="/portfolio/profile" className=" group">
                    <li
                      className=""
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                      onClick={() => setIsVisiblePortfolio(false)}
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        PORTFOLIO
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisiblePortfolio && (
                    <li
                      className="absolute shadow bg-base-100 rounded-none min-w-52 group"
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                    >
                      <Link
                        to="/portfolio/profile"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Profile</a>
                      </Link>
                      <Link
                        to="/portfolio/ProcessOverView"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Process Overview</a>
                      </Link>
                      <Link
                        to="/portfolio/OurAchievement"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Achievement</a>
                      </Link>
                    </li>
                  )}
                </div>

                <Link to="/career">
                  <li>
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold">
                      CAREER
                    </a>
                  </li>
                </Link>

                <Link to="/contact">
                  <li>
                    <a className=" mx-2  font-medium tracking-wider text-white  rounded-full outline-2 outline-offset-2 bg-sky-700  outline hover:bg-slate-100 hover:text-gray-800 hover:shadow-lg">
                      CONTACT
                     
                    </a>
                   
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* page content here */}
        {/* <div className="m">
          {isVisibleServices && (
            <div
              className=" bg-white border-b-[1px] z-9 absolute w-[100%] top-0 mt-20"
              onMouseLeave={() => setIsVisibleServices(false)}
            >
              <ServicesMenu services={serviceData} />
            </div>
          )}
          <div>
            {isVisibleTechnology && (
              <div
                className="flex bg-white justify-between border-b-[1px] z-9 absolute w-[100%] top-0 mt-20 px-[12%]"
                onMouseLeave={() => setIsVisibleTechnology(false)}
              >
                <TechnologyMenu technology={TechnologyData} />
              </div>
            )}
            
          </div>
        </div> */}
      </div>

      {/* Sidebar start */}
      <div className="z-20 drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleLinkClick}
        ></label>
        <ul className="min-h-full gap-2 p-4 menu w-80 bg-base-200">
          <DrawerNavbar onLinkClick={handleLinkClick} />
        </ul>
      </div>
      {/* sidebar ends  */}
    </div>
  );
};

export default Navbar;
