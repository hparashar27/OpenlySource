import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets//Official_openlySource_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="gradient_bg">
        <div className="Navbar">
          <div className="logo">
            <Link className="logo_link" to="/OpenlySource">
              <img src={logo} alt="OpenlySource" className="logo_img" />
              <h4 className="logo_des">OpenlySource</h4>
            </Link>
          </div>
          <div className="list_container">
            <ul className="Navbar_list">
              <li>
                <Link to="/Aboutus">About us</Link>
              </li>
              <li>
                <Link to="/Members">Our Members</Link>
              </li>
              <li>
                <Link to="/Opportunities">Opportunities</Link>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://github.com/hparashar27/openlysource"
                  target="_blank"
                >
                  GitHub <BsGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              classname="menu_icon"
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              classname="menu_icon"
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="list_container_mobile">
              <ul className="Navbar_list_mobile">
                <li>
                  <Link to="/Aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/Members">Our Members</Link>
                </li>
                <li>
                  <Link to="/Opportunities">Opportunities</Link>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://github.com/hparashar27/openlysource"
                    target="_blank"
                  >
                    GitHub <BsGithub />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
