import React from 'react';

function Navbar () {

    return (
        <nav className="nav-bar">
            <div className="container">
                <a href = "/" className="navbar_brand"><h1>SurgeHut</h1></a>
                <div className="collapse-navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
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
