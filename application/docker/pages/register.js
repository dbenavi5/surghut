import React from 'react'
import Link from 'next/link';
import Head from 'next/head';

const Registration = () => (
    
    <div>
        <Head>
            <title>SurgeHut</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        </Head>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <Link href="/"><a className="navbar-brand">SurgeHut</a></Link>
                <div className="collapse navbar-collapse">
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login"><a className="nav-link">Login</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

        <div>
            <center>
                <h1 className= "reg_border">Registration Page</h1>
                <form id="form1" name="form1" >
                    <fieldset className="field">
                        <div>
                            <div><label htmlFor="username">Create a username</label></div>
                            <input id="username" name="username" type="text" placeholder="Username" size="15" required/>
                        </div>
                        
                        <div>
                            <div><label htmlFor="email">Enter email</label></div>
                            <input name="email" type="email" placeholder="Email" size="15" required/>
                        </div>
                    
                        <div>
                            <div><label htmlFor="current-password">Type in a password</label></div>
                            <input id="password" name="password" type="password" placeholder="Password" size="15"
                                    required/>
                        </div>

                        <div>
                            <div><label htmlFor="new-password">Confirm password</label></div>
                            <input id="new-password" name="new-password" type="password" placeholder="Confirm Password" size="15"
                                    required/>
                        </div>
                        <div>
                            <label htmlFor="verifyage">Check the box if over 13 years of age</label>
                            <input type="checkbox" name="verifyage" value="Verify" required/>
                            <label htmlFor="acceptterms">Accept <a id="terms" href="" >Terms of Use</a> and <a id="terms" href="" >Privacy Rules</a></label>
                            <input type="checkbox" name="acceptterms" value="Accept" required/> 
                        </div>

                        <div>
                            <input id="submit" className="submit" type="submit" value="Register" />
                            <input id="reset" className="reset" type="reset" value="Cancel"/>
                        </div>
                        
                    </fieldset>
                </form>
            </center>
        </div>


    </div>
        
);

export default Registration;