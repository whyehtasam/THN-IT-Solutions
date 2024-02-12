import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
const Footer = () => {
  return (
    <>
   <footer className="footer p-10 bg-slate-500 text-neutral-content">
   <nav>
    <h6 className="footer-title ">Quick Link</h6> 
    <Link to='/'><a className="link link-hover">Home</a></Link>
    <Link to='/ourServices'><a className="link link-hover">Our Services</a></Link>
    <Link to='/technology'><a className="link link-hover">Technology</a></Link>
    <Link to='/portfolio'><a className="link link-hover">Portfolio</a></Link>
    <Link to='/career'><a className="link link-hover">Career</a></Link>
    <Link to='/contact'><a className="link link-hover">Contact Us</a></Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Our Services</h6> 
    <Link to='/ourServices/ApplicationDevelopment'><a className="link link-hover">Web Development</a></Link>
    <Link to='/ourServices/MaintenanceSupport'><a className="link link-hover">Backend Development</a></Link>
    <Link to='/ourServices/CloudService'><a className="link link-hover">Cloud Service</a></Link>
    <Link to='/ourServices/DataAnalytics'><a className="link link-hover">AI & ML Engineering</a></Link>
    <Link to='/ourServices/DevOps'><a className="link link-hover">DevOps</a></Link>
    <Link to='/ourServices/QualityEngineering'><a className="link link-hover">Quality Engineering</a></Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Technology</h6> 
    <a className="link link-hover">Frontend Development</a>
    <a className="link link-hover">Backend Development</a>
    <a className="link link-hover">Database</a>
    <a className="link link-hover">Cloud</a>
    <a className="link link-hover">Artificial intelligence</a>
    <a className="link link-hover">Infrastructure Development</a>
  </nav>
  <nav>
    <h6 className="footer-title">Office Inquiries</h6> 
    <a className="link link-hover">033-2500 5025</a>
    <a className="link link-hover">info@thnitsolutions.com</a>
    <h6 className="footer-title mt-4">Customer Support</h6> 
    <a className="link link-hover">+91 9051959195</a>
    <a className="link link-hover">+91 9674183723</a>
  </nav>
  <nav>
    <h6 className="footer-title">Office Address</h6> 
    <p className="link link-hover">THN IT Solutions, Rajibpur Road, <br/>
     Gangapur,Duttapukur-I, <br/>
     Duttapukur- 743248,<br/> 
     West Bengal, India
    </p>

    <h6 className="footer-title mt-2"></h6>
    <div className="grid grid-flow-col gap-1">
            <SocialIcon url="https://www.instagram.com/"  style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.twitter.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.facebook.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.whatsapp.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.linkedin.com/" style={{height:"4vh", width:"2vw", borderRadius:"2vw"}} />
      </div>
  </nav>
</footer>
<footer className="text-center bg-slate-200 ">
    <p className="text-sm text-slate-500" style={{ padding:"2vh 0"}}>Copyright © 2024 - THN IT SOLUTIONS</p>
</footer>
    </>
  )
}

export default Footer