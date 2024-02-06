import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/thnit.png'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible,setIsVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70 ) {
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
  const serviceData = [
    {
      menuTitle: 'Application Development',
      path:'/aboutUs',
      items: ['Web Application Development', 'Mobile App Development','Custom Software Solutions'],
    },
    {
      menuTitle: 'Cloud Service',
      path:'#service1',
      items: ['Cloud Migration Services', 'Cloud Solution Architecture','Cloud Storage Service'],
    },
    {
      menuTitle: 'Maintenance and Support',
      path:'#service1',
      items: ['Providing ongoing support', 'Maintenance for software applications', 'Feature enhancements'],
    },
    {
      menuTitle: 'Data Analytics and Business Intelligence (BI)',
      path:'#service1',
      items: ['Data warehousing', 'Data visualization', 'Predictive analytics'],
    },

  ];

//Second Row Data only add up to four column
  const serviceData2 = [
    {
      menuTitle: 'DevOps',
      path:'#service1',
      items: ['CI/CD', 'Infrastructure as Code (IaC)', 'Terraform'],
    },
    {
      menuTitle: 'Quality Engineering',
      path:'#service1',
      items: ['Automated Testing', 'Performance Testing', 'Continuous Integration'],
    },

  ];
  
  return (
    <div className={`bg-slate-100 drawer sticky top-0 z-10 ${isScrolled && 'bg-white border-b-[1px]'} ${isVisible && 'bg-white'}`}>

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



          <div className="container  flex justify-between w-[80%] mx-auto z-5">

         
          <div className="flex px-2 mx-2"><img src={logo} className="h-16 mix-blend-multiply p-2" alt="" ></img></div>
          <div className=" hidden md:hidden lg:block">
            <ul className="menu menu-horizontal  flex justify-end">
              {/* Navbar menu content here */}
              <Link to='/'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold">Home</a></li> </Link>
              {/* <Link to='/aboutUs'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold">About Us</a></li> </Link> */}
              <Link to='/ourServices'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold" onMouseMove={() => setIsVisible(true)}>Our Services</a></li> </Link>
              
              
              
              <Link to=''><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold flex">Technology</a></li></Link>
              <Link to='/portfolio'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold flex">Portfolio</a></li></Link>
                
            
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Career</a></li>
              <Link to='/contact'><li><a className="mx-2 text-sm font-medium rounded tracking-wider border  bg-black text-white hover:bg-slate-100 hover:text-gray-800 hover:font-semibold">Contact</a></li></Link>

              {/* Register */}
              {/* <div className=" mx-2 dropdown dropdown-hover  w-fit">
                  <li><a className="text-sm font-medium rounded tracking-wider border  bg-black text-white hover:bg-slate-100 hover:text-gray-800 hover:font-semibold">Register</a></li>
                   
                    <ul className="dropdown-content mt-[2px] z-[1] menu bg-base-100 rounded-box font-poppins w-52 border">
                     <li className="mb-1"><Link to="/signIn">SignIn</Link></li>
                     <li><Link to="/signUp">SignUp</Link></li>
                   </ul>
             </div> */}
            </ul>
          </div>

          </div>
        </div>

        <div >
        {isVisible && <div className=" bg-white border-b-[1px] z-11 absolute w-[100%] top-0 mt-[8.5vh]" 
          onMouseMove={() => setIsVisible(true)} 
          onMouseLeave={() => setIsVisible(false)}>

        <ServicesMenu services={serviceData} />
        <ServicesMenu services={serviceData2} />

      </div>}
        </div>
        
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


const ServicesMenu = ({ services },index) => 
{
  return(
    <div className="flex p-12 mx-[4%]">
      {services.map((service, index) => (
       
       <div className="" key={index}>

        <div key={index =="3"} className="border-r-[1px] border-slate-300 px-6 text-left">
          <h3 className="text-lg pb-2">
            <Link to={service.path} className="font-bold pr-2">{service.menuTitle}{" >"}</Link>
          </h3>
          <ul>
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm ">{item}</li>
            ))}
          </ul>
        </div>
       </div>
        
      ))}
    </div>
  );
};


export default Navbar;
