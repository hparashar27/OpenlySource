import React from 'react'
import {BsGithub} from "react-icons/bs"
import "./Navbar.css"
import logo from "../../assets//Official_openlySource_logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='Navbar'>
     <div className='logo' >
<img src={logo} alt="OpenlySource" className="logo_img"/>
<h4 className='logo_des'>OpenlySource</h4>
</div> 
        <div>
            <ul className='Navbar_list'>
             <li className='Navbar_list_items'>
                 <Link to="/about">About us</Link>
                </li>
                <li className='Navbar_list_items'>
                <Link to="/Aim"> Our Aim</Link>
                   </li>
                <li className='Navbar_list_items'>
                <Link to="/Members">Our Members</Link>
                  </li>
                <li className='Navbar_list_items' >
                <a rel="noopener" href="https://github.com/hparashar27/openlysource" target='_blank' >GitHub <BsGithub/></a>
                </li>
                <li className='Navbar_list_items'>
                <Link to="/Sign-in">Sign in / Sign up</Link>
                  </li>                
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar