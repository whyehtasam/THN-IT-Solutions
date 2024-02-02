import { SocialIcon } from "react-social-icons"

const Footer = () => {
  return (
    <>
   <footer className="footer p-10 bg-slate-50 text-base-content">
  <nav>
    <h6 className="footer-title">Quick Link</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact Us</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Our Product</h6> 
    <a className="link link-hover">LT Electrical Panel</a>
    <a className="link link-hover">Procection And Control relays</a>
    <a className="link link-hover">Genset & Spares</a>
    <a className="link link-hover">THN IT Solutions</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Office Inquiries</h6> 
    <a className="link link-hover">033-2500 5025</a>
    <a className="link link-hover">info@tsntsolutions.com</a>
    <h6 className="footer-title">Customer Support</h6> 
    <a className="link link-hover">+91 7044 040 384</a>
    <a className="link link-hover">+91 9073 322 603</a>
  </nav>
  <nav>
    <h6 className="footer-title">Unsatisfied Customer</h6> 
    <a className="link link-hover">+91 9674 183 723</a>
    <a className="link link-hover">+91 7450 990 072</a>
    <a className="link link-hover">nazrul@tsntsolutions.com</a>
  </nav>
</footer> 

<footer className="footer px-10 py-4 border-t-[2px] bg-slate-50 text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <img src="/logo.jpeg" alt=""  style={{height:"10vh", width:"8vw"}}/>
    <div>
    <h2 className="footer-title font-bold">THN IT Solutiond Pvt Ltd. </h2>
    <p>We constantly Endeavor our best to<br/>
       update our technological competence,<br/>
     introduce new products and achieve<br/> 
     excellence in our mission.</p>
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