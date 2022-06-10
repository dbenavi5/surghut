import React, {useState, useEffect} from 'react';
import {useAuth} from '../../contexts/auth';
import styles from './Navbar.module.css';

const Navbar = () => {
  const {isAuthenticated, logout, user} = useAuth();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbarSection.container');
    document.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        navbar.style.backgroundColor = '#29323c';
      } else {
        navbar.style.backgroundColor = 'transparent';
      }
    });
  }, []);

  return (
    <div id={styles.navbarSection}>
      <div className="navbarSection container" id={styles.contain}>
        <div className={styles.navbar}>
          <div className="brand">
            <h1>
              <span> S</span>urg<span>H</span>ut
            </h1>
          </div>
          <div className={styles.navList}>
            <div
              className={!open ? 'hamburger' : 'hamburger active'}
              onClick={() => setOpen(!open)}
              role="button"
              tabIndex={0}
            >
              <div className="bar"></div>
            </div>
            <ul className={!open ? styles.navList : styles.active}>
              <li>
                <a href="/" data-after="Home" onClick={() => setOpen(!open)}>
                  Home
                </a>
              </li>
              <li className="">
                <a
                  href="/about"
                  data-after="About"
                  onClick={() => setOpen(!open)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/alert"
                  data-after="Alert"
                  onClick={() => setOpen(!open)}
                >
                  Alert
                </a>
              </li>
              {isAuthenticated ? (
                <>
                  {user && user.access_level > 0 ? (
                    <li>
                      <a
                        href="/update"
                        data-after="Update"
                        onClick={() => setOpen(!open)}
                      >
                        Update
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                  {user && user.access_level > 1 ? (
                    <li>
                      <a
                        href="/checking"
                        data-after="Checking"
                        onClick={() => setOpen(!open)}
                      >
                        Checking
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <a
                      href="/mailbox"
                      data-after="Mailbox"
                      onClick={() => setOpen(!open)}
                    >
                      Mailbox
                    </a>
                  </li>
                  <li>
                    <a href="#" data-after="Logout" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <a
                      href="/login"
                      data-after="Login"
                      onClick={() => setOpen(!open)}
                    >
                      Login
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="/register"
                      data-after="Register"
                      onClick={() => setOpen(!open)}
                    >
                      Sign Up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
