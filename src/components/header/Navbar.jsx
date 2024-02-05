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
    window.addEventListener('scroll', handleScroll)
  })

  // let navbarClasses = ['drawer', 'sticky', 'top-0','z-10'];
  // if (isScrolled) {
  //   navbarClasses.push('blur-2');
  // }
  
  return (
    <div className={`drawer sticky top-0 z-10 relative ${isScrolled && 'bg-white '}`}>
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



          <div className="container  flex justify-between w-10/12 mx-auto">

         
          <div className="flex px-2 mx-2"><img src={logo} className="h-16 mix-blend-multiply p-2" alt="" ></img></div>
          <div className=" hidden md:hidden lg:block">
            <ul className="menu menu-horizontal  flex justify-end">
              {/* Navbar menu content here */}
              <Link to='/'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold">Home</a></li> </Link>
              <Link to='/aboutUs'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold">About Us</a></li> </Link>
              <Link to='/ourServices'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold" onMouseMove={() => setIsVisible(true)}>Our Services</a></li> </Link>
              
              
              
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Technology</a></li>
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Our Associates</a></li>
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

        
        {isVisible && <div className=" absolute bg-white w-full text-8xl text-center" >
        hello
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

export default Navbar;
