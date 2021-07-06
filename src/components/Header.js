import React from "react";
import logo from "../logo/logo3.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/athar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </Link>
      <div className="menu showhidemenu">
        <ul>
          <li>
            <Link to="/athar">Home</Link>
          </li>
          <li>
            <Link to="/athar/about">About</Link>
          </li>
          <li>
            <Link to="/athar/skills">Technical Skills</Link>{" "}
          </li>
          {/* <li>
            <Link to="/courses">Courses</Link>
          </li> */}
          <li>
            <Link to="/athar/contact">Contact</Link>
          </li>
          <li>
            <Link to="/athar/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="hm">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}
