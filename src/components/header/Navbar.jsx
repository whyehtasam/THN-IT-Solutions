import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/thnit.png'
import logo from '../../assets/logo.jpg'
import ServicesMenu from './OurServicesMenu'
import TechnologyMenu  from './TechnologyMenu';
import {
        serviceData1, serviceData2, 
        TechnologyData1, TechnologyData2, 
         TechnologyData3, TechnologyData4, } from './ServicesTechnologyData'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleServices,setIsVisibleServices] = useState(false);
  const [isVisibleTechnology,setIsVisibleTechnology] = useState(false);


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10 ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // let navbarClasses = ['drawer', 'sticky', 'top-0','z-10'];
  // if (isScrolled) {
  //   navbarClasses.push('blur-2');
  // }


  //First Row Data
  





  return (
    
    <div className={`drawer bg-slate-500 sticky top-0 z-10 `}>


     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
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

         
          <div className="flex "><Link to='/'><img src={logo} className="h-16 mix-blend-multiply py-2 z-10" alt="" ></img></Link></div>
          <div className=" hidden md:hidden lg:block">
            <ul className="menu menu-horizontal p-0 h-[100%]  flex justify-end z-10">
              {/* Navbar menu content here */}
              <Link to='/'><li><a className="text-lg font-extrabold text-slate-100 rounded-sm tracking-wider z-10 hover:font-bold ">Home</a></li> </Link>

              {/* <Link to='/aboutUs'><li><a className="text-lg font-medium text-gray-800 rounded-sm tracking-wider z-10 hover:font-bold">About Us</a></li> </Link> */}

              <Link to='/ourServices'><li><a className="text-lg font-extrabold text-slate-100 rounded-sm tracking-wider z-10 hover:font-bold" 
              onMouseEnter={() => setIsVisibleServices(true)} onMouseLeave={() => setIsVisibleServices(false)} onClick={()=>setIsVisibleServices(false)}>
              Our Services</a></li> </Link>


              
              
              
              <Link to='/technology'><li><a className="text-lg font-extrabold text-slate-100 rounded-sm tracking-wider z-10 hover:font-bold flex" 
              onMouseEnter={() => setIsVisibleTechnology(true)} onMouseLeave={() => setIsVisibleTechnology(false)} onClick={() => setIsVisibleTechnology(false)}>
                Technology</a></li></Link>


              <Link to='/portfolio'><li><a className="text-lg font-extrabold text-slate-100 rounded-sm tracking-wider hover:font-bold flex">Portfolio</a></li></Link>
                
            
              <Link to='/career'><li><a className="text-lg font-extrabold text-slate-100 rounded-sm tracking-wider z-10 hover:font-bold">Career</a></li></Link>
              <Link to='/contact'><li><a className="mx-2 text-lg font-extrabold rounded tracking-wider border z-10 bg-black text-white hover:bg-slate-100 hover:text-slate-100 hover:font-bold">Contact</a></li></Link>

            </ul>
          </div>

          </div>
        </div>

        
        </div>
        <div >
        {isVisibleServices && <div className=" bg-white border-b-[1px] z-9 absolute w-[100%] top-0 mt-[8.3vh]" 
          onMouseMove={() => setIsVisibleServices(true)} 
          onMouseLeave={() => setIsVisibleServices(false)}>

        <ServicesMenu services={serviceData1} />
        <ServicesMenu services={serviceData2} />

      </div>}
        </div>

        <div >
        {isVisibleTechnology && <div className="flex bg-white justify-between border-b-[1px] z-9 absolute w-[100%] top-0 mt-[8.3vh] px-[12%]" 
          onMouseMove={() => setIsVisibleTechnology(true)} 
          onMouseLeave={() => setIsVisibleTechnology(false)}>

        <TechnologyMenu technology={TechnologyData1} />
        <TechnologyMenu technology={TechnologyData2} />
        <TechnologyMenu technology={TechnologyData3} />
        <TechnologyMenu technology={TechnologyData4} />

      </div>}
        {/* Page content here */}
      </div>

      

        {/* Sidebar start */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
      {/* sidebar ends  */}
    </div>
  );
};





export default Navbar;
