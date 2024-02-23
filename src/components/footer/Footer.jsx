import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-gray-800 text-neutral-content text-slate-100">
        <aside>
          <div>
            <img
              src="./tsntechno3.png"
              alt=""
              className="z-10 h-16 py-2 mix-blend-multiply"
            />
          </div>

          <p>
            TSN Technosolutions is actively engaged in POWER &<br />
            ENERGY Solutions, with active cooperation from
            <br />
            reputed Multi-National Companies to provide Efficient
            <br />
            and Reliable Solutions, along with its own experience
            <br />
            and strength in the Development, Support and
            <br />
            Marketing.
          </p>
          <div className="grid grid-flow-col gap-1">
            <SocialIcon
              url="https://www.twitter.com/"
              style={{ height: "4vh", width: "2vw", borderRadius: "2vw" }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              style={{ height: "4vh", width: "2vw", borderRadius: "2vw" }}
            />
            <SocialIcon
              url="https://www.linkedin.com/"
              style={{ height: "4vh", width: "2vw", borderRadius: "2vw" }}
            />
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
          <Link to="/contact">
            <h6 className="footer-title text-slate-100">Contact Us</h6>
          </Link>
          <a className="link link-hover">Call : 033-25005025</a>
          <a className="link link-hover">Email : info@tsntechno.in</a>
          <a className="link link-hover">Email : nazrul.tsn@gmail.com</a>
          <p className="link link-hover">
            Uttrayan Apartment,Ground Floor, RC <br />
            No. 16/3 , Raghunathpur, Near Teghoriya <br />
            Minibus Stand, Kolkata- 700059
          </p>
        </nav>
      </footer>
      <footer className="text-center bg-slate-200 ">
        <p className="text-sm" style={{ padding: "2vh 0" }}>
          ©2024. TSN Technosolutions. Design By THN IT Solutions.
        </p>
      </footer>
    </>
  );
};

export default Footer;
