import React, { useState } from 'react';
import Dropdown from './Dropdown';
import {useAuth} from '../contexts/auth';
import {MobileButton} from './MobileButton';
import Button from './Button';
import Watermark from './Watermark';
// import Link from 'next/link'


function Navbar() {
  const {isAuthenticated, logout} = useAuth();

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu  = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    <nav className="navbar">
      <a href="/" className="navLogo">
        SurgeHut
      </a>
      <Watermark />
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
          <a href="/about" className="navLinks" onClick={closeMobileMenu}>
            About
          </a>
        </li>
        <li className="navItems"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
          <a href="#" className="navLinks" onClick={closeMobileMenu}>
            Category <i className="fas fa-caret-down"/>   
          </a>
          {dropdown && <Dropdown/>}
        </li>
        {isAuthenticated ? 
          <>
            <li className="navItems">
              <a href="/update" className="navLinks">update</a>
            </li>
            <Button
              onClick={logout}
            >
                  Logout
            </Button>
          </> :
          <>
            <li className="navItems">
              <a href="/login" className="navLinks">Login</a>
            </li>
            <li className="navItems">
              <a href="/register" className="navMobile">Sign Up</a>
            </li>
          </>
      
        }
      </ul>
      <MobileButton />
    </nav>
    </>
    
  );
}

export default Navbar;

