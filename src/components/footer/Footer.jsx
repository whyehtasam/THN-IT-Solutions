import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-gray-800 text-neutral-content text-slate-100">
  <aside>
    <div>
    <img src="./tsntechno3.png" alt="" className="z-10 h-16 py-2 mix-blend-multiply"/>
    </div>
  
    <p>TSN Technosolutions is actively engaged in POWER &<br/> 
    ENERGY Solutions, with active cooperation from<br/>
    reputed Multi-National Companies to provide Efficient<br/>
    and Reliable Solutions, along with its own experience<br/>
    and strength in the Development, Support and<br/>
    Marketing.

    </p>
    <div className="grid grid-flow-col gap-1">
            <SocialIcon url="https://www.twitter.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.facebook.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.linkedin.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
      </div>
  </aside> 
  <nav>
    <h6 className="footer-title text-slate-100">Products</h6> 
    <a className="link link-hover">List Item #1</a>
    <a className="link link-hover">List Item #1</a>
    <a className="link link-hover">List Item #1</a>
    <a className="link link-hover">List Item #1</a>
</nav> 
  <nav>
    <h6 className="footer-title text-slate-100">Quick Links</h6> 
    <a className="link link-hover">TSNT Solutions Pvt Ltd</a>
    <a className="link link-hover">TSN Automaton</a>
    <a className="link link-hover">Alternative Power Solutions</a>
    <a className="link link-hover">Privacy Policy</a>
  </nav> 
  <nav>
  <Link to="/contact"><h6 className="footer-title text-slate-100">Contact Us</h6></Link> 
    <a className="link link-hover">Call : 033-25005025</a>
    <a className="link link-hover">Email : info@tsntechno.in</a>
    <a className="link link-hover">Email : nazrul.tsn@gmail.com</a>
    <p className="link link-hover">Uttrayan Apartment,Ground Floor, RC <br/>
    No. 16/3 , Raghunathpur, Near Teghoriya <br/>
    Minibus Stand, Kolkata- 700059
    </p>
  
  </nav>
 
</footer>
<footer className="text-center bg-slate-200 ">
    <p className="text-sm" style={{ padding:"2vh 0"}}>©2024. TSN Technosolutions. Design By THN IT Solutions.</p>
</footer>




































































































   {/* <footer className="p-10 footer bg-slate-500 text-neutral-content md:place-content-evenly grid md:flex grid-cols-2">
   <nav>
    <h6 className="footer-title opacity-90 ">Quick Link</h6> 
    <Link to='/'><a className="opacity-70 text-xs link link-hover">Home</a></Link>
    <Link to='/ourServices'><a className="opacity-70 text-xs link link-hover">Our Services</a></Link>
    <Link to='/technology'><a className="opacity-70 text-xs link link-hover">Technology</a></Link>
    <Link to='/portfolio'><a className="opacity-70 text-xs link link-hover">Portfolio</a></Link>
    <Link to='/career'><a className="opacity-70 text-xs link link-hover">Career</a></Link>
    <Link to='/contact'><a className="opacity-70 text-xs link link-hover">Contact Us</a></Link>
  </nav> 
  <nav>
    <h6 className="footer-title opacity-90">Our Services</h6> 
    <Link to='/ourServices/ApplicationDevelopment'><a className="opacity-70 text-xs link link-hover">Application Development</a></Link>
    <Link to='/ourServices/CloudService'><a className="opacity-70 text-xs link link-hover">Cloud Service</a></Link>
    <Link to='/ourServices/MaintenanceSupport'><a className="opacity-70 text-xs link link-hover">Maintenance & Support</a></Link>
    <Link to='/ourServices/DataAnalytics'><a className="opacity-70 text-xs link link-hover">Analytics & Business Intelligence</a></Link>
    <Link to='/ourServices/DevOps'><a className="opacity-70 text-xs link link-hover">DevOps</a></Link>
    <Link to='/ourServices/QualityEngineering'><a className="opacity-70 text-xs link link-hover">Quality Engineering</a></Link>
  </nav> 
  <nav>
    <h6 className="footer-title opacity-90">Technology</h6> 
    <a className="opacity-70 text-xs link link-hover">Frontend Development</a>
    <a className="opacity-70 text-xs link link-hover">Backend Development</a>
    <a className="opacity-70 text-xs link link-hover">Database</a>
    <a className="opacity-70 text-xs link link-hover">Cloud</a>
    <a className="opacity-70 text-xs link link-hover">Artificial intelligence</a>
    <a className="opacity-70 text-xs link link-hover">Infrastructure Development</a>
  </nav>
  <nav>
    <h6 className="footer-title opacity-90">Office Inquiries</h6> 
    <a className="opacity-70 text-xs link link-hover">033-2500 5025</a>
    <a className="opacity-70 text-xs link link-hover">info@thnitsolutions.com</a>
    <h6 className="mt-4 footer-title opacity-90">Customer Support</h6> 
    <a className="opacity-70 text-xs link link-hover">+91 9051959195</a>
    <a className="opacity-70 text-xs link link-hover">+91 9674183723</a>
  </nav>


  <nav className=" min-w-72 md:max-w-fit ">
    <div  className="flex flex-1 justify-between w-full  md:block">
      <div className="w-min">
         <h6 className="footer-title opacity-90">Office Address</h6> 
           <a className="text-xs opacity-70 link link-hover  tracking-wider">THN IT Solutions, Rajibpur Road, 
            Gangapur,Duttapukur-I, 
     Duttapukur- 743248
     West Bengal, India
           </a>
      </div>
    <div>
    
    <div className="flex-1 flex flex-wrap w-full  gap-1">

           <span> <SocialIcon url="https://www.instagram.com/"  style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /></span>
            {/* <SocialIcon url="https://www.twitter.com/" style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /> */}
            {/* <span><SocialIcon url="https://www.facebook.com/" style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /></span>
            <span><SocialIcon url="https://www.whatsapp.com/" style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /></span>
            <span><SocialIcon url="https://www.linkedin.com/" style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /></span>
      </div>
      </div>
      </div>
  </nav> */} 
{/* </footer>
<footer className="text-center bg-slate-200 ">
    <p className="text-sm text-slate-500" style={{ padding:"2vh 0"}}>Copyright © 2024 - THN IT SOLUTIONS</p>
</footer> */}
    </>
  )
}

export default Footer