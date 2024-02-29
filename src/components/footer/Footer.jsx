import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <>
      <footer className="p-10 footer bg-gray-800 text-neutral-content md:place-content-evenly grid md:flex grid-cols-2">
        <nav>
          <h6 className="footer-title opacity-90 ">Quick Link</h6>
          <Link to="/">
            <a className="opacity-70 text-xs link link-hover">Home</a>
          </Link>
          <Link to="/ourServices">
            <a className="opacity-70 text-xs link link-hover">Our Services</a>
          </Link>
          <Link to="/technology">
            <a className="opacity-70 text-xs link link-hover">Technology</a>
          </Link>
          <Link to="/portfolio/profile">
            <a className="opacity-70 text-xs link link-hover">Portfolio</a>
          </Link>
          <Link to="/career">
            <a className="opacity-70 text-xs link link-hover">Career</a>
          </Link>
          <Link to="/contact">
            <a className="opacity-70 text-xs link link-hover">Contact Us</a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-90">Our Services</h6>
          <Link to="/ourServices/ApplicationDevelopment">
            <a className="opacity-70 text-xs link link-hover">
              Application Development
            </a>
          </Link>
          <Link to="/ourServices/CloudService">
            <a className="opacity-70 text-xs link link-hover">Cloud Service</a>
          </Link>
          <Link to="/ourServices/MaintenanceSupport">
            <a className="opacity-70 text-xs link link-hover">
              Maintenance & Support
            </a>
          </Link>
          <Link to="/ourServices/DataAnalytics">
            <a className="opacity-70 text-xs link link-hover">
              Analytics & BI
            </a>
          </Link>
          <Link to="/ourServices/DevOps">
            <a className="opacity-70 text-xs link link-hover">DevOps</a>
          </Link>
          <Link to="/ourServices/QualityEngineering">
            <a className="opacity-70 text-xs link link-hover">
              Quality Engineering
            </a>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-90">Technology</h6>
          <a className="opacity-70 text-xs link link-hover">
            Frontend Development
          </a>
          <a className="opacity-70 text-xs link link-hover">
            Backend Development
          </a>
          <a className="opacity-70 text-xs link link-hover">Database</a>
          <a className="opacity-70 text-xs link link-hover">Cloud</a>
          <a className="opacity-70 text-xs link link-hover">
            Artificial intelligence
          </a>
          <a className="opacity-70 text-xs link link-hover">
            Infrastructure Development
          </a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-90">Office Inquiries</h6>
          <a className="opacity-70 text-xs link link-hover">033-2500 5025</a>
          <a className="opacity-70 text-xs link link-hover">
            info@thnitsolutions.com
          </a>
          <h6 className="mt-4 footer-title opacity-90">Customer Support</h6>
          <a className="opacity-70 text-xs link link-hover">+91 9051959195</a>
          <a className="opacity-70 text-xs link link-hover">+91 9674183723</a>
        </nav>

        <nav className=" min-w-72 md:max-w-fit md:min-w-0">
          <div className="flex flex-1 justify-between w-full  md:block">
            <div className="w-min">
              <h6 className="footer-title opacity-90">Office Address</h6>
              <a className="text-xs opacity-70 link link-hover  tracking-wider">
                THN IT Solutions, Rajibpur Road, Gangapur,Duttapukur-I,
                Duttapukur- 743248 West Bengal, India
              </a>
            </div>
            <div className=" ">
              <div className="flex-1 flex flex-wrap w-full md:mt-5 gap-1">
                <span>
                  {" "}
                  <SocialIcon
                    url="https://www.instagram.com/"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "2vw",
                    }}
                  />
                </span>
                {/* <SocialIcon url="https://www.twitter.com/" style={{height:"2rem", width:"2rem", borderRadius:"2vw"}} /> */}
                <span>
                  <SocialIcon
                    url="https://www.facebook.com/"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "2vw",
                    }}
                  />
                </span>
                <span>
                  <SocialIcon
                    url="https://www.whatsapp.com/"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "2vw",
                    }}
                  />
                </span>
                <span>
                  <SocialIcon
                    url="https://www.linkedin.com/"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "2vw",
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="text-center bg-gray-700 ">
        <p
          className="text-sm text-slate-200 tracking-wider font-semibold"
          style={{ padding: "2vh 0" }}
        >
          Copyright © 2024 - THN IT SOLUTIONS
        </p>
      </footer>
    </>
  );
};

export default Footer;
