import React from 'react';
import { BsGithub } from 'react-icons/bs';
import './Navbar.css';
import logo from '../../assets//Official_openlySource_logo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    <div className='gradient_bg'>
      <div className='Navbar'>
        <div className='logo'>
          <img src={logo} alt='OpenlySource' className='logo_img' />
        <h4 className='logo_des'>
          OpenlySource
            </h4>
        </div>
        <div>
          <ul className='Navbar_list'>
            <li>
           <Link to="/aboutus"> 
           About us
           </Link>
            </li>
            <li>
           <Link to="/members"> 
                Our Members
           </Link> 
            </li>
            <li>
            <Link to="/opportunities"> 
            Opportunities
            </Link>
            </li>
            <li>
              <a
                rel='noreferrer'
                href='https://github.com/hparashar27/openlysource'
                target='_blank'
              >
                GitHub <BsGithub />
              </a>
            </li>
            <li>
            <Link to="/Sign-up"> 
                <button className='btn'>Sign Up</button>
              </Link>
            </li>
            <li>
            <Link to="/Log-in"> 
                <button className='btn'>Log in</button>
            </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
