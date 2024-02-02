import "./App.css";
import Navbar from "./components/header/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Contact from "./components/contact/contact";
import SignIn from "./components/register.jsx/SignIn";
import SignUp from "./components/register.jsx/SignUp";
import Footer from "./components/footer/Footer";
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
              <div>content</div>
              </>
            } />
          </Routes>
       <Footer />
      </Router>
    </>
  );
}

export default App;
