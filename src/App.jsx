import "./App.css"; // importing the App.css

import Navbar from "./components/header/Navbar"; // importing the Navbar component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // importing the routing components from react-router-dom
import AboutUs  from "./components/about/AboutUs";
import Contact from "./components/contact/Contact"; // importing the Contact component
import OurServices from "./components/ourService/OurServices";
import Portfolio   from "./components/portfolio/portfolio";
import SignIn from "./components/register.jsx/SignIn"; // importing the SignIn component
import SignUp from "./components/register.jsx/SignUp"; // importing the SignUp component
import Footer from "./components/footer/Footer"; // importing the Footer component
// import Hero from "./components/landing/Hero"; // importing the Hero component
// import Intro from "./components/landing/Intro";
// import Intro2 from "./components/about/Intro2";
// import IntroBanner from "./components/landing/IntroBanner";
// import IntroCards from "./components/introCards/IntroCards";
// import Intro3 from "./components/about/Intro3";
// import "./assets/bg.css";
// import svg from "./assets/Animated Shape.svg";
// // defining the App component
// import {IntroServiceCardData} from './components/introCards/cardData'
// import ServiceIntro from "./components/trees/ServiceIntro";
// // import SliderCheck from "./components/wrappers/Slidercheck";
// import CenterMode from "./components/Slider/CenterMode";
import Carousel from "./components/carousel/Carousel";
import Application from "./components/ourService/Application";

function App() {
  return (
    <div className=" svg ">
      {/* <div  className="w-full border  h-96 top-0 absolute" alt=""></div> */}
      <Router>
        
        {/* starting the routing configuration */}
        <Navbar /> {/* rendering the Navbar component */}
        <Routes>
          {" "}
          {/* starting the routing configuration */}
          <Route path="/contact" element={<Contact />} />{" "}
          {/* defining the route for the Contact component */}
          <Route path="/signIn" element={<SignIn />} />{" "}
          {/* defining the route for the SignIn component */}
          <Route path="/signUp" element={<SignUp />} />{" "}
          {/* defining the route for the SignUp component */}
          {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
          <Route path="/ourServices" element={<OurServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/serviceApplicationDevelopment" element={<Application />} />
          <Route
            path="/"
            element={
              <div className="">
                {/* <Hero /> rendering the Hero component */}
                {/* <IntroBanner title="Unveiling THN IT Solutions: A Deep Dive"/> */}
                {/* <Intro /> */}
                {/* <Intro2 />
                <IntroBanner />
                <IntroCards />
                <Intro3 /> */}
                {/* <IntroBanner title="Our Services"/> */}
                {/* <IntroCards data={IntroServiceCardData}/> */}
                {/* <ServiceIntro /> */}
                {/* <CenterMode /> */}
                <Carousel/>
                <AboutUs/>
                

                
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
