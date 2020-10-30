import React, { useState } from 'react';
// import Link from 'next/link';
import Dropdown from './Dropdown';
import {useAuth} from '../contexts/auth';
//import Watermark from './Watermark';
//import styles from './Navbar.module.css';
import {MobileButton} from './MobileButton';


function Navbar() {
  const {isAuthenticated, logout} = useAuth();

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu  = () => setClick(false);

  return (
    <>
    <nav className="navbar">
      <a href="/" className="navLogo">
        SurgeHut
      </a>
      <div className="menuIcon" onClick={ handleClick }>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>
      <ul className={click ? 'navMenu active' : 'navMenu'}>
        <li className="navItems">
          <a href="/" className="navLinks" onClick={closeMobileMenu}>
            Home
          </a>
        </li>
        <li className="navItems">
          <a href="#" className="navLinks" onClick={closeMobileMenu}>
            Category <i className="fas fa-caret-down"/>   
          </a>
          {dropdown && <Dropdown/>}
        </li>
        <li className="navItems">
          <a href="/login" className="navLinks" onClick={closeMobileMenu}>
            Sign In
          </a>
        </li>
        <li className="navItems">
          <a href="/register" className="navMobile" onClick={closeMobileMenu}>
            Sign Up
          </a>
        </li>
      </ul>
      <MobileButton />
    </nav>
    </>
    
  );
}

export default Navbar;

