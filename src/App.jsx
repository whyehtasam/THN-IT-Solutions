import "./App.css"; // importing the App.css

import Navbar from "./components/header/Navbar"; // importing the Navbar component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // importing the routing components from react-router-dom

import Contact from "./components/contact/Contact"; // importing the Contact component
import SignIn from "./components/register.jsx/SignIn"; // importing the SignIn component
import SignUp from "./components/register.jsx/SignUp"; // importing the SignUp component
import Footer from "./components/footer/Footer"; // importing the Footer component
import Hero from "./components/landing/Hero"; // importing the Hero component
import Intro from "./components/landing/Intro";
import Intro2 from "./components/landing/Intro2";
import IntroBanner from "./components/landing/IntroBanner";
import IntroCards from "./components/introCards/IntroCards";
import Intro3 from "./components/landing/Intro3";
import "./assets/bg.css";
import svg from "./assets/Animated Shape.svg";
// defining the App component
function App() {
  return (
    <div className=" svg">
      {/* <img src={svg} className="w-full opacity-30 object-fill h-screen absolute" alt="" /> */}
      <Router>
        {" "}
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
          <Route
            path="/"
            element={
              <>
                <Hero /> {/* rendering the Hero component */}
                <Intro />
                <Intro2 />
                <IntroBanner />
                <IntroCards />
                <Intro3 />
              </>
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
