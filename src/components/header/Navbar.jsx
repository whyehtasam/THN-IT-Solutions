import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
import logo from "/tsntech.png";

const Navbar = () => {
  //const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false);
  const [isVisibleTGSystem, SetVisibleTGSystem] = useState(false);

  const ItemStyle =
    "border-b-[3px] rounded-none text-white font-bold px-2 py-[2vh] bg-[#9390CC] hover:bg-[#6F67B1] border-[#47318B] hover:border-b-[3px] hover:border-[#D2C6E8]";

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 10) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        className={`drawer bg-white sticky top-0 z-10 font-sans border-b-2 border-[#3E3082] mb-4`}
      >
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
                    className="z-10 h-16 mix-blend-multiply"
                    alt=""
                  ></img>
                </Link>
              </div>
              <div className="hidden  md:hidden lg:block text-slate-800">
                <ul className="menu menu-horizontal p-0 h-[100%]  flex justify-end z-10 items-center my-auto">
                  {/* Navbar menu content here */}
                  <Link to="/">
                    <li>
                      <a className="z-10 text-sm font-medium tracking-wider rounded-sm  hover:font-semibold ">
                        HOME
                      </a>
                    </li>{" "}
                  </Link>

                  <div className=" group">
                    <Link to="/ourServices" className="relative group">
                      <li>
                        <a
                          className="text-sm font-medium tracking-wider rounded-sm hover:font-semibold group-hover:border-b-[4px] group-hover:border-[#47318B]"
                          onMouseEnter={() => setIsVisibleServices(true)}
                          onMouseLeave={() => setIsVisibleServices(false)}
                          onClick={() => setIsVisibleServices(false)}
                        >
                          PRODUCTS
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
                    <div className="absolute">
                      <div className="relative">
                        {isVisibleServices && (
                          <li
                            className=" shadow rounded-none min-w-48 group "
                            onMouseMove={() => setIsVisibleServices(true)}
                            onMouseLeave={() => setIsVisibleServices(false)}
                          >
                            <div
                              className={`dropdown dropdown-right dropdown-hover ${ItemStyle} justify-between sub-group`}
                            >
                              <span>AMF Relay</span>
                              <span className="sub-group-hover:rotate-180">
                                ⮞
                              </span>

                              <li
                                tabIndex={0}
                                className="dropdown-content shadow bg-base-100 rounded-none w-48 sub-group"
                                //onMouseMove={() => setIsVisibleServices(true)}
                              >
                                <Link
                                  to="/products/amf-relay/EasyGen1400"
                                  className={ItemStyle}
                                >
                                  EasyGen 1400
                                </Link>
                                <Link
                                  to="/products/amf-relay/EasyGen1500"
                                  className={ItemStyle}
                                >
                                  EasyGen 1500
                                </Link>
                                <Link
                                  to="/products/amf-relay/EasyGen1600"
                                  className={ItemStyle}
                                >
                                  EasyGen 1600
                                </Link>
                                <Link
                                  to="/products/amf-relay/EasyGen1700"
                                  className={ItemStyle}
                                >
                                  EasyGen 1700
                                </Link>
                                <Link
                                  to="/products/amf-relay/EasyGen1800"
                                  className={ItemStyle}
                                >
                                  EasyGen 1800
                                </Link>
                              </li>
                            </div>
                            <div
                              className={`dropdown dropdown-right dropdown-hover ${ItemStyle} justify-between sub-group`}
                            >
                              <span>DG System</span>
                              <span className="sub-group-hover:rotate-180">
                                ⮞
                              </span>
                              <li
                                tabIndex={0}
                                className="dropdown-content shadow bg-base-100 rounded-none w-48"
                                //onMouseMove={() => setIsVisibleServices(true)}
                              >
                                <Link
                                  to="/products/DG-System/EasyGen2300"
                                  className={ItemStyle}
                                >
                                  EasyGen 2300
                                </Link>
                                <Link
                                  to="/products/DG-System/EasyGen2500"
                                  className={ItemStyle}
                                >
                                  EasyGen 2500
                                </Link>
                                <Link
                                  to="/products/DG-System/EasyGen3200XT"
                                  className={ItemStyle}
                                >
                                  EasyGen 3200XT
                                </Link>
                                <Link
                                  to="/products/DG-System/EasyGen3500XT"
                                  className={ItemStyle}
                                >
                                  EasyGen 3500XT
                                </Link>
                                <Link
                                  to="/products/DG-System/EasyGenSPMD2"
                                  className={ItemStyle}
                                >
                                  SPM-D2 Series
                                </Link>
                                <Link
                                  to="/products/DG-System/LS-521"
                                  className={ItemStyle}
                                >
                                  LS-521
                                </Link>
                                <Link
                                  to="/products/DG-System/LS-6XT"
                                  className={ItemStyle}
                                >
                                  LS-6XT
                                </Link>
                              </li>
                            </div>
                            <div
                              className={`dropdown dropdown-right dropdown-hover ${ItemStyle} justify-between sub-group`}
                            >
                              <span>TG System</span>
                              <span className="sub-group-hover:rotate-180">
                                ⮞
                              </span>
                              <li
                                tabIndex={0}
                                className="dropdown-content shadow bg-base-100 rounded-none w-48"
                              >
                                <div
                                  className={`dropdown dropdown-right ${ItemStyle} justify-between sub-group`}
                                >
                                  <span>LMS System</span>
                                  <span className="sub-group-hover:rotate-180">
                                    ⮞
                                  </span>
                                  <li
                                    tabIndex={0}
                                    className=" dropdown-content shadow bg-base-100 rounded-none w-48 LMSSystem-hover:block"
                                  >
                                    <Link
                                      className={ItemStyle}
                                      to="/products/TG-System/LMS/DSLCXT"
                                    >
                                      DSLC-2XT
                                    </Link>
                                    <Link
                                      className={ItemStyle}
                                      to="/products/TG-System/LMS/MSLC25"
                                    >
                                      MSLC-2XT
                                    </Link>
                                    <Link
                                      className={ItemStyle}
                                      to="/products/TG-System/LMS/FLEX500"
                                    >
                                      Flex 500
                                    </Link>
                                    <Link
                                      className={ItemStyle}
                                      to="/products/TG-System/LMS/LINKNET"
                                    >
                                      Linknet
                                    </Link>
                                  </li>
                                </div>
                                <Link className={ItemStyle} to="">
                                  Woodward Micronet
                                </Link>
                                <div
                                  className={`dropdown dropdown-right ${ItemStyle}`}
                                >
                                  Over Speed Protection
                                  <li
                                    tabIndex={0}
                                    className="dropdown-content shadow bg-base-100 rounded-none w-48"
                                  >
                                    <Link
                                      className={ItemStyle}
                                      to="/products/TG-System/Over-Speed-protection/ProtectGii"
                                    >
                                      Protect G-II
                                    </Link>
                                  </li>
                                </div>
                                <div
                                  className={`dropdown dropdown-right${ItemStyle}`}
                                >
                                  <a className="" role="button">
                                    Govornor
                                  </a>
                                  <li
                                    tabIndex={0}
                                    className="dropdown-content shadow bg-base-100 rounded-none w-48"
                                  >
                                    <a className={ItemStyle}>Woodward 505D</a>
                                    <a className={ItemStyle}>Woodward 505DR</a>
                                    <a className={ItemStyle}>
                                      Proact I & II Series
                                    </a>
                                  </li>
                                </div>
                                <div
                                  className={`dropdown dropdown-right${ItemStyle}`}
                                >
                                  <span> Accessories</span>
                                  <li
                                    tabIndex={0}
                                    className="dropdown-content shadow bg-base-100 rounded-none w-48"
                                  >
                                    <a className={ItemStyle}>Woodward DL-Can</a>
                                    <a className={ItemStyle}>
                                      Woodward DL-CanR
                                    </a>
                                    <a className={ItemStyle}>
                                      Woodward USB-RS-232
                                    </a>
                                  </li>
                                </div>
                              </li>
                            </div>
                            <a className={ItemStyle}>
                              <Link to="/products/SEG-Protection-Relay">
                                SEG Protection Relay
                              </Link>
                            </a>
                          </li>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" group">
                    <Link to="/service" className=" group">
                      <li>
                        <a className="text-sm font-medium  rounded-sm tracking-wider hover:font-semibold flex group">
                          SERVICE
                        </a>
                      </li>
                    </Link>
                  </div>

                  <div className="group">
                    <Link to="/portfolio/profile" className=" group">
                      <li
                        className="group-hover:border-b-[4px] group-hover:border-[#47318B]"
                        onMouseMove={() => setIsVisiblePortfolio(true)}
                        onMouseLeave={() => setIsVisiblePortfolio(false)}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a className="text-sm font-medium  rounded-sm tracking-wider hover:font-semibold flex group">
                          PORTFOLIO
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
                          <a>Process Over View</a>
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
                      <a className="z-10 text-sm font-medium tracking-wider rounded-sm  hover:font-semibold">
                        CAREER
                      </a>
                    </li>
                  </Link>
                  <Link to="">
                    <li>
                      <a className="z-10 text-sm font-medium tracking-wider rounded-sm hover:font-semibold">
                        EVENTS
                      </a>
                    </li>
                  </Link>

                  <Link to="/contact">
                    <li>
                      <a className="z-10 mx-2 text-lg font-medium tracking-wider text-white bg-black border-2 rounded hover:bg-[#9390CC] hover:text-gray-800  hover:border-black">
                        Contact
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar start*/}
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
        </div>
        {/* sidebar ends  */}
      </div>
    </>
  );
};

export default Navbar;
