import React from 'react'
import Link from 'next/link';

function Navbar () {

    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/"><a className="navbar_brand">SurgeHut</a></Link>
                <div className="collapse-navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login"><a className="nav-link">Login</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/register"><a className="nav-link">Register</a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Category</a>
                            {/* <div className="drop-content">
                                <a className="dropdown-item" href="#">County</a>
                                <a className="dropdown-item" href="/covid_page">COVID-19</a>
                                <a className="dropdown-item" href="/wildfires_page">Wildfires</a>
                            </div> */}
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;