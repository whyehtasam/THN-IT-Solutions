import { SocialIcon } from "react-social-icons"
const Footer = () => {
  return (
    <>
   <footer className="footer justify-evenly p-10 bg-slate-50 text-base-content border-b-2">

  <nav>
    <h6 className="footer-title">Quick Link</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Service</a>
    <a className="link link-hover">Technology</a>
    <a className="link link-hover">Our Associates</a>
    <a className="link link-hover">Contact Us</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Our Services</h6> 
    <a className="link link-hover">Web Development</a>
    <a className="link link-hover">Backend Development</a>
    <a className="link link-hover">Cloud Service</a>
    <a className="link link-hover">AI & ML Engineering</a>
    <a className="link link-hover">DevOps</a>
    <a className="link link-hover">Quality Engineering</a>
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
    <p className="link link-hover">THN IT Solutions, Rajibpur Road, Gangapur, <br/>
     Duttapukur-I, Duttapukur- 743248, West Bengal, India
    </p>

    <h6 className="footer-title mt-2">Social Media</h6>
    <div className="grid grid-flow-col">
            <SocialIcon url="https://www.instagram.com/"  style={{height:"4vh", width:"4vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.twitter.com/" style={{height:"4vh", width:"4vw", borderRadius:"2vw"}} />
            <SocialIcon url="https://www.facebook.com/" style={{height:"4vh", width:"4vw", borderRadius:"2vw"}} />
      </div>
      <h6 className="footer-title mt-2">Google Map</h6>
    <a href="https://www.google.com/maps/place/TSNT+SOLUTIONS+PVT.+LTD.+Works/@22.7820465,88.5362415,18.5z/data=!4m6!3m5!1s0x39f8a3f11aafced1:0xf7931e3ad99b5d5b!8m2!3d22.7821151!4d88.5369854!16s%2Fg%2F11t7dp5_fy?entry=ttu"
                    target="_blank" rel="noopener noreferrer" style={{textDecoration: "none",  color:"blue", fontSize:"40px"}}>
                      <img src="/google-maps.svg" alt="Map" className="h-12 w-12" />
                    </a>
  </nav>
</footer> 


<footer className="text-center bg-slate-200 ">
    <p className="text-sm text-slate-500" style={{ padding:"2vh 0"}}>Copyright © 2024 - THN IT SOLUTIONS PVT. LTD.</p>
</footer>
    </>
  )
}

export default Footer