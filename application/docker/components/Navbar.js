import React from 'react'
import Link from 'next/link';
import Search from './Search';

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <Link href="/"><a className="navbar-brand">SurgeHut</a></Link>


            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/login"><a className="nav-link">Login</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/register"><a className="nav-link">Register</a></Link>
                    </li>   
                </ul>
                <Search/>
            </div>
        </div>
    </nav>
);

export default Navbar;