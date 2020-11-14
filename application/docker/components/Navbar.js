import React, {useState} from 'react';
import Dropdown from './Dropdown';
import {useAuth} from '../contexts/auth';
import {MobileButton} from './MobileButton';
import Watermark from './Watermark';

function Navbar() {
  const {isAuthenticated, logout} = useAuth();

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="water-wrap">
        <Watermark/>
      </div>
      <nav className="navbar">
        <a href="/" className="navLogo">
          <i className="fab fa-accusoft">SurgeHut </i>
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
            <a href="/about" className="navLinks" onClick={closeMobileMenu}>
            About
            </a>
          </li>
          <li className="navItems">
              <a href="/alert" className="navLinks">Alert</a>
          </li>
          <li className="navItems"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a href="#" className="navLinks" onClick={closeMobileMenu}>
              Category<i className="fas fa-caret-down"/>
            </a>
            {dropdown && <Dropdown/>}
          </li>
          {isAuthenticated ?
          <>
            <li className="navItems">
              <a href="/update" className="navLinks">Update</a>
            </li>
            <li className="navItems">
              <a href="/checking" className="navLinks">Checking</a>
            </li>
            <li className="navItems">
              <a href="/mailbox" className="navLinks">Mailbox</a>
            </li>
	          <li className="navItems">
              <a href="#" className="navLinks"
                onClick={logout}
              >
                    Logout
              </a>
	    </li>

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
        <li className="navItems">
          <a href="!#" >
            <MobileButton />
          </a>
        </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;

