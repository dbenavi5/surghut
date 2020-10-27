import React from 'react';
import Link from 'next/link';

import {useAuth} from '../contexts/auth';
import Button from './Button';

function Navbar() {
  const {isAuthenticated, logout} = useAuth();

  return (
    <nav className="nav-bar">
            <div className="container">
                <a href = "/" className="navbar_brand"><h1>SurgeHut</h1></a>
                <div className="collapse-navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        {isAuthenticated ?
                        <>
                          <li className="nav-item">
                            <Link href="/update"><a className="nav-link">update</a></Link>
                          </li>
                          <Button
                            onClick={logout}
                          >
                                Logout
                          </Button>
                        </> :
                        <>
                          <li className="nav-item">
                            <Link href="/login"><a className="nav-link">Login</a></Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/register"><a className="nav-link">Register</a></Link>
                          </li>
                        </>
                        }
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Category</a>
                            <div className="drop-content">
                                <a className="dropdown-item" href="#">County</a>
                                <a className="dropdown-item" href="#">COVID-19</a>
                                <a className="dropdown-item" href="#">Wildfires</a>
                            </div> 
                        </li>   
                    </ul>
                </div>
            </div>
    </nav>
  );
}

export default Navbar;
