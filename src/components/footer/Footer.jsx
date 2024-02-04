import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <>
   <footer className="footer p-10 bg-slate-50 text-base-content" style={{justifyContent:"space-between"}} >
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
  </nav> 
  <nav>
    <h6 className="footer-title">Office Inquiries</h6> 
    <a className="link link-hover">033-2500 5025</a>
    <a className="link link-hover">info@thnitsolutions.com</a>
    <h6 className="footer-title">Customer Support</h6> 
    <a className="link link-hover">+91 9051959195</a>
    <a className="link link-hover">+91 9674183723</a>
  </nav>
  <nav>
    <h6 className="footer-title">Office Address</h6> 
    <p className="link link-hover">THN IT Solutions, Rajibpur Road, Gangapur, <br/>
     Duttapukur-I, Duttapukur- 743248, West Bengal, India
    </p>
    <a className="mt-4" href="https://maps.app.goo.gl/Bg24oyCyiZZCgraNA"
                    target="_blank" rel="noopener noreferrer" style={{textDecoration: "none",  color:"blue", fontSize:"40px"}}>🗺️</a>
  </nav>
</footer> 

<footer className="footer px-10 py-4 border-t-[2px] bg-slate-50 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    
    <div>
    <h2 className="footer-title font-bold">THN IT Solutiond Pvt Ltd. </h2>
  
    </div>
  </aside> 
    <nav className="md:place-self-center md:justify-self-end">
      <div className="grid grid-flow-col gap-4">
            <SocialIcon url="https://www.instagram.com/"/>
            <SocialIcon url="https://www.twitter.com/" />
            <SocialIcon url="https://www.facebook.com/" />
        </div>
    </nav>
  
</footer>
<footer className="text-center bg-slate-50">
    <p style={{fontSize:"0.7rem", padding:"2vh 0"}}>Copyright © 2024 - THN IT SOLUTIONS PVT. LTD.</p>
</footer>
    </>
  )
}

export default Footer