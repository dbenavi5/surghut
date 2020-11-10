import React from 'react';
import Link from 'next/link';

import {useAuth} from '../contexts/auth';
import Button from './Button';
import Watermark from './Watermark';
import styles from './Navbar.module.css';

function Navbar() {
  const {isAuthenticated, logout} = useAuth();

  return (
    <nav className={styles.nav_bar}>
      <div className={styles.container}>
        <a href="/" className={styles.nav_brand}><h1 className={styles.logo}>SurgeHut</h1></a>
	  <Watermark className={styles.water} />
        <div className={styles.collapse_navbar}>
          <ul className={styles.navbar_nav}>
            <li className={styles.nav_item}>
              <a href="/about" className= {styles.nav_link}>About</a>
            </li>
            {isAuthenticated ?
                  <>
                    <li className={styles.nav_item}>
                      <Link href="/update"><a className={styles.nav_link}>update</a></Link>
                    </li>
                    <li className={styles.nav_item}>
                      <Link href="/checking"><a className={styles.nav_link}>checking</a></Link>
                    </li>
                    <li className={styles.nav_item}>
                      <Link href="/mailbox"><a className={styles.nav_link}>mailbox</a></Link>
                    </li>
                    <Button
                      onClick={logout}
                    >
                          Logout
                    </Button>
                  </> :
                  <>
                    <li className={styles.nav_item}>
                      <Link href="/login"><a className={styles.nav_link}>Login</a></Link>
                    </li>
                    <li className={styles.nav_item}>
                      <Link href="/register"><a className={styles.nav_link}>Register</a></Link>
                    </li>
                  </>
            }
            <li className={styles.nav_item}>
              <a className={styles.nav_link} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Category</a>
              <div className={styles.drop_content}>
                <a className={styles.dropdown_item} href="#">County</a>
                <a className={styles.dropdown_item} href="/covid_page">COVID-19</a>
                <a className={styles.dropdown_item} href="/wildfires_page">Wildfires</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

