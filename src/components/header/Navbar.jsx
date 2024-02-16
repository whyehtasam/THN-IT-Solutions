import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
// import logo from '../../assets/thnit.png'
import logo from "../../assets/logo.jpg";
import ServicesMenu from "./OurServicesMenu";
import TechnologyMenu from "./TechnologyMenu";
import {
  serviceData,
  TechnologyData,
} from "./ServicesTechnologyData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisibleTechnology, setIsVisibleTechnology] = useState(false);

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

  return (
    <div className={`drawer bg-slate-500 sticky top-0 z-10 font-sans`}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
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
                  className="z-10 h-16 py-2 mix-blend-multiply"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="hidden  md:hidden lg:block">
              <ul className="menu menu-horizontal p-0 h-[100%]  flex justify-end z-10 items-center my-auto">
                {/* Navbar menu content here */}
                <Link to="/">
                  <li
                    onMouseEnter={() => {
                      setIsVisibleServices(false);
                      setIsVisibleTechnology(false);
                    }}
                  >
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold ">
                      HOME
                    </a>
                  </li>{" "}
                </Link>

                {/* <Link to='/aboutUs'><li><a className="z-10 text-lg font-medium tracking-wider text-gray-800 rounded-sm hover:font-semibold">About Us</a></li> </Link> */}

                <Link to="/ourServices" className="relative group">
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
                </Link>

                <Link to="/technology" className=" relative group">
                  <li>
                    <a
                      className="z-10 flex text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold relative group"
                      onMouseEnter={() => {
                        setIsVisibleTechnology(true);
                        setIsVisibleServices(false);
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
                </Link>


              <div className="dropdown dropdown-hover relative group">

              
              <Link to='/portfolio' className=" group">

              <li onMouseEnter={() => {
                      setIsVisibleServices(false);
                      setIsVisibleTechnology(false);
                    }}><a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">PORTFOLIO
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
                      </span></a></li></Link>

              <ul tabIndex={0} className="dropdown-content z-[11] menu p-2 shadow bg-base-100 rounded-box min-w-52 group">
              <Link to='/portfolio/profile' ><li><a>Our Profile</a></li></Link>
                <Link to='/portfolio/OurApproach' ><li><a>Our Approach</a></li></Link>
                <Link to='/portfolio/OurAchievement' ><li><a>Our Achievement</a></li></Link>
              </ul>
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
                    <a className="z-10 mx-2 text-lg font-medium tracking-wider text-white bg-black border rounded hover:bg-slate-100 hover:text-gray-800 hover:font-bold">

                      Contact
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* page content here */}
        <div className="m">
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
            {/* Page content here */}
          </div>
        </div>
      </div>

      {/* Sidebar start */}
      <div className="z-20 drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full gap-2 p-4 menu w-80 bg-base-200">
          <DrawerNavbar />
        </ul>
      </div>
      {/* sidebar ends  */}
    </div>
  );
};

export default Navbar;
