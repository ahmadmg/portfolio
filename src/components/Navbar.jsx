import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import "../styles/Navbar.css";


function Navbar() {

  //  State for the Navbar
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header className="navbar" id={expandNavbar ? "open" : "close"}>
     {/* Toggle Button div  */}
      <div className="toggleButton" >
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
         name="Menu">
         <SlMenu title="Menu"/>
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">My Works</Link>
        <Link to="/ContactMe">Contact me</Link>
      </div>
    </header>
  );
}

export default Navbar;
