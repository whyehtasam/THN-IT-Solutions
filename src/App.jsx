import "./App.css";
import Navbar from "./components/header/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Hero from "./components/hero/Hero";
import Contact from "./components/contact/contact";
import SignIn from "./components/register.jsx/SignIn";
import SignUp from "./components/register.jsx/SignUp";
import Footer from "./components/footer/Footer";
import Container from "./components/wrappers/Container";

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
          <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signIn" element={<SignIn/>} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/" element={
              <>
              <Hero/>
              
              </>
            } />
          </Routes>
       <Footer />
      </Router>
    </>
  );
}

export default App;
