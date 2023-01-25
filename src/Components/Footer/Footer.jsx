import React from 'react';
import logo from '../../assets//Official_openlySource_logo.png';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='info'>
          <div className='footer-logo'>
            <img src={logo} alt='' width={100} />
            <span>OpenlySource</span>
          </div>
          <p>
            Empowering the next generation of open source contributors, one step
            at a time
          </p>
        </div>
        <div className='nav-links'>
          <Link to='/about'>About Us</Link>
          <Link to='/Members'>Our Members</Link>
          <Link to='/Opportunities'>Opportunities</Link>
          <Link to='/Log-in'>Log In </Link>
          <Link to='/Sign-up'>Sign Up</Link>
        </div>
      </div>
      <div className='separator'></div>
      <div className='social-links'>
        <a
          href='https://github.com/hparashar27/OpenlySource'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
        >
          <FaGithub color='inherit' size={30} />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
        >
          <FaTwitter color='inherit' size={30} />
        </a>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
        >
          <FaInstagram color='inherit' size={30} />
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noreferrer'
          className='icon-link'
        >
          <FaLinkedinIn color='inherit' size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
