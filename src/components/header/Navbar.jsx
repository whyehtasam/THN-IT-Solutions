import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/thnit.png'
const Navbar = () => {

  const [isShow,setIsShow] = useState(false);
  
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white">
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



          <div className="container flex justify-between w-10/12 mx-auto">

         
          <div className="flex basis-1/3 px-2 mx-2"><img src={logo} className="h-16 mix-blend-multiply p-2" alt="" ></img></div>
          <div className="basis-2/3 hidden lg:block">
            <ul className="menu menu-horizontal flex justify-around">
              {/* Navbar menu content here */}
              <Link to='/'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider  hover:font-semibold">Home</a></li> </Link>
              
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">About Us</a></li>
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Our Service</a></li>
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Technology</a></li>
              <li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Our Associates</a></li>
              <Link to='/contact'><li><a className="text-sm font-medium text-gray-800 rounded-sm tracking-wider hover:font-semibold">Contact</a></li></Link>

              {/* Register */}
              <div className=" mx-2 dropdown dropdown-hover  w-fit">
                  <li><a className="text-sm font-medium rounded tracking-wider border  bg-black text-white hover:bg-slate-100 hover:text-gray-800 hover:font-semibold">Register</a></li>
                   
                    <ul className="dropdown-content mt-[2px] z-[1] menu bg-base-100 rounded-box font-poppins w-52 border">
                     <li className="mb-1"><Link to="/signIn">SignIn</Link></li>
                     <li><Link to="/signUp">SignUp</Link></li>
                   </ul>
             </div>
            </ul>
          </div>

          </div>
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
