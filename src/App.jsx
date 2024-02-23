import "./assets/bg.css";
import { useEffect } from "react";
import "./App.css"; // importing the App.css

import Navbar from "./components/header/Navbar"; // importing the Navbar component

import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom"; // importing the routing components from react-router-dom
import AboutUs  from "./components/about/AboutUs";
import Contact from "./components/contact/Contact"; // importing the Contact component
import OurServices from "./components/ourService/OurServices";
import Portfolio   from "./components/portfolio/portfolio";
import Portcard from "./components/portfolio/portcard";
import SignIn from "./components/register.jsx/SignIn"; // importing the SignIn component
import SignUp from "./components/register.jsx/SignUp"; // importing the SignUp component
import Footer from "./components/footer/Footer"; // importing the Footer component
import Career from "./components/career/career";// importing the Carrer component
import WebDeveloperCareer from "./components/career/CareerDeveloper/webDeveloper";
import BackendDeveloperCareer from "./components/career/CareerDeveloper/backendDeveloper";
import CloudDeveloperCareer from "./components/career/CareerDeveloper/cloudDeveloper";
import Technology from "./components/technologies/Technology";
import ApplyForm from './components/career/form/form';
import OurAchievement from "./components/portfolio/OurAchievement";
import Profile from './components/portfolio/Profile/profile';
import Events from "./components/events/events";
import ChooseUs from "./components/chooseUs/ChooseUs";


// Products Importing all the products here
// For AMF Relay
import EasyGen1400 from "./components/Products/woodward/amfrelay/EasyGen1400"; 
import EasyGen1500 from "./components/Products/woodward/amfrelay/EasyGen1500";
import EasyGen1600 from "./components/Products/woodward/amfrelay/EasyGen1600";
import EasyGen1700 from "./components/Products/woodward/amfrelay/EasyGen1700";
import EasyGen1800 from "./components/Products/woodward/amfrelay/EasyGen1800";
// For DG System
import EasyGen2300 from "./components/Products/woodward/dgsystem/EasyGen2300";
import EasyGen2500 from "./components/Products/woodward/dgsystem/EasyGen2500";
import EasyGen3200XT from "./components/Products/woodward/dgsystem/EasyGen3200XT";
import EasyGen3500XT from "./components/Products/woodward/dgsystem/EasyGen3500XT";
import EasyGenSPMD2 from "./components/Products/woodward/dgsystem/EasyGenSPM-D2";
import LS521 from "./components/Products/woodward/dgsystem/Ls5";
import LS6XT from "./components/Products/woodward/dgsystem/ls6";
// For TG System
// for LMS System 
import DSLCXT from "./components/Products/woodward/tgsystem/LMSsystem/Dslcxt";
import FLEX500 from "./components/Products/woodward/tgsystem/LMSsystem/Flex500";
import LINKNET from "./components/Products/woodward/tgsystem/LMSsystem/Linknet";
import MSLC25 from "./components/Products/woodward/tgsystem/LMSsystem/Mslc2xt";

import ProtectGii from "./components/Products/woodward/over-speed-protection/Woodward-protech-gii";

//SEG Relay 
import SEGRelay from './components/Products/SegProtectionRelay/SEGProtectionRelay'

//service page
import Service from "./components/service/service";




// 
import Carousel from "./components/carousel/Carousel";
import Application from "./components/ourService/ourServiceNavigation/Application";
import Cloud from './components/ourService/ourServiceNavigation/Cloud'
import MaintainanceSupport from "./components/ourService/ourServiceNavigation/MaintainanceSupport";
import DataAnalytics from "./components/ourService/ourServiceNavigation/DataAnalytics";
import DevOps from "./components/ourService/ourServiceNavigation/DevOps";
import QualityEngineering from "./components/ourService/ourServiceNavigation/QualityEngineering";
import ProcessOverView from "./components/portfolio/OurApproach/ProcessOverView"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  
  return (
    <div className=" svg">
      {/* <div  className="absolute top-0 w-full border h-96" alt=""></div> */}
      <Router>
      <ScrollToTop />
        {/* starting the routing configuration */}
        <Navbar /> {/* rendering the Navbar component */}
        <Routes>
         
          {/* starting the routing configuration */}
          <Route path="/contact" element={<Contact />} />{" "}
        
          <Route path="/signIn" element={<SignIn />} />{" "}
         
          <Route path="/signUp" element={<SignUp />} />{" "}
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Career page Routing and subpages of it  */}
          <Route path="/career" element={<Career />} />
          <Route path="/career/web-developer" element={<WebDeveloperCareer />} />
          <Route path="/career/backend-developer" element={<BackendDeveloperCareer />} />
          <Route path="/career/cloud-developer" element={<CloudDeveloperCareer />} />
          

          <Route path="/ourServices/ApplicationDevelopment" element={<Application />} />
          <Route path="/ourServices/CloudService" element={<Cloud />} />
          <Route path="/ourServices/MaintenanceSupport" element={<MaintainanceSupport />} />
          <Route path="/ourServices/DataAnalytics" element={<DataAnalytics />} />
          <Route path="/ourServices/DevOps" element={<DevOps />} />
          <Route path="/ourServices/QualityEngineering" element={<QualityEngineering />} />

          <Route path="/career/Apply" element={<ApplyForm />} />
          
          <Route path="/portfolio/profile" element={<Profile />} />
          <Route path="/portfolio/OurAchievement" element={<OurAchievement />} />
          <Route path='/portfolio/ProcessOverView' element={<ProcessOverView />} />
          <Route path="/events" element={<Events />}/>
          
          {/* Product list Routing , each product has its own page.*/}
          <Route path="/products/amf-relay/EasyGen1400" element={<EasyGen1400 />}/>
          <Route path="/products/amf-relay/EasyGen1500" element={<EasyGen1500 />}/>
          <Route path="/products/amf-relay/EasyGen1600" element={<EasyGen1600 />}/>
          <Route path="/products/amf-relay/EasyGen1700" element={<EasyGen1700 />}/>
          <Route path="/products/amf-relay/EasyGen1800" element={<EasyGen1800 />}/>

          <Route path="/products/DG-System/EasyGen2300" element={<EasyGen2300 />}/>
          <Route path="/products/DG-System/EasyGen2500" element={<EasyGen2500 />}/>
          <Route path="/products/DG-System/EasyGen3200XT" element={<EasyGen3200XT />}/>
          <Route path="/products/DG-System/EasyGen3500XT" element={<EasyGen3500XT />}/>
          <Route path="/products/DG-System/EasyGenSPMD2" element={<EasyGenSPMD2 />}/>
          <Route path="/products/DG-System/LS-521" element={<LS521 />}/>
          <Route path="/products/DG-System/LS-6XT" element={<LS6XT />}/>

          <Route path="/products/TG-System/LMS/DSLCXT" element={<DSLCXT />}/>
          <Route path="/products/TG-System/LMS/FLEX500" element={<FLEX500 />}/>
          <Route path="/products/TG-System/LMS/LINKNET" element={<LINKNET />}/>
          <Route path="/products/TG-System/LMS/MSLC25" element={<MSLC25 />}/>

          <Route path="/products/TG-System/Over-Speed-protection/ProtectGii" element={<ProtectGii />} />

          {/* SEG Relay Route*/}
          <Route path="/products/SEG-Protection-Relay" element={<SEGRelay />} />
          <Route path="/Service" element={<Service />} />







          <Route
            path="/"
            element={
              <div className="">
                
                <Carousel/>
                <AboutUs/>
                <Portcard />
                <ChooseUs />

                
              </div>
            }
          />
          {/* defining the route for the home page */}
        </Routes>
        <Footer /> {/* rendering the Footer component */}
      </Router>
    </div>
  );
}

export default App; // exporting the App component
