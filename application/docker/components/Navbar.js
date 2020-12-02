import React, {useState} from 'react';
//import Dropdown from './Dropdown';
import {useAuth} from '../contexts/auth';
import {MobileButton} from './MobileButton';
import Watermark from './Watermark';
import styles from './Navbar.module.css';

function Navbar() {
  const {isAuthenticated, logout, user} = useAuth();

  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  // for mobile layout
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
      <div className={styles.water_wrap}>
        <Watermark/>
      </div>
      <nav className={styles.navbar}>
        <a href="/" className={styles.navLogo}>
          <i className="fab fa-accusoft">SurgeHut </i>
        </a>
        <div className={styles.menuIcon} onClick={ handleClick }>
          <i className={click ? 'closeIcon fas fa-times' : 'bars fas fa-bars'}/>
        </div>
        <ul className={click ? 'navMenu active' : 'navMenu'}>
          <li className={styles.navItems}>
            <a href="/" className={styles.navLinks} onClick={closeMobileMenu}>
            Home
            </a>
          </li>
          <li className={styles.navItems}>
            <a href="/about" className={styles.navLinks} onClick={closeMobileMenu}>
            About
            </a>
          </li>
          <li className={styles.navItems}>
              <a href="/alert" className={styles.navLinks}>Alert</a>
          </li>
          {/*
          <li className={styles.navItems}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a href="#" className={styles.navLinks} onClick={closeMobileMenu}>
              Category<i className={`${styles.caretDown} fas fa-caret-down`}/>
            </a>
            {dropdown && <Dropdown/>}
          </li>
          */}
          {isAuthenticated ?
          <>
            {user && user.access_level > 0 ? 
              <li className={styles.navItems}>
                <a href="/update" className={styles.navLinks}>Update</a>
              </li>
            
              :
              <></>}
            {user && user.access_level > 1 ?
                  <li className={styles.navItems}>
                  <a href="/checking" className={styles.navLinks}>Checking</a>
                </li>
          
               : <></>}
            <li className={styles.navItems}>
              <a href="/mailbox" className={styles.navLinks}>Mailbox</a>
            </li>
	          <li className={styles.navItems}>
              <a href="#" className={styles.navLinks}
                onClick={logout}
              >
                    Logout
              </a>
	          </li>

          </> :
          <>
            <li className={styles.navItems}>
              <a href="/login" className={styles.navLinks}>Login</a>
            </li>
            <li className={styles.navItems}>
              <a href="/register" className={styles.navLinks}>Sign Up</a>
            </li>
          </>
          }
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

