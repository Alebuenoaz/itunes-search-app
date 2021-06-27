import React from "react";
import logo from "../assets/ITunes_logo.svg"
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
        <img src={logo} alt="" width="50"/>
          iTunes Search App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;