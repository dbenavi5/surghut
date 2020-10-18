import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import GoogleSignIn from '../components/GoogleSignIn';

const Login = () => (

    <div >
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
                            <Link href="/register"><a className="nav-link">Register</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div>
            <center>
                <h1>Login Page</h1>
                <form id= "form1" name="form1" >
                    <fieldset className="field">
                        <div>
                            <div><label htmlFor="username">Username</label></div>
                            <input id = "username" name="username" type="text" placeholder="Username"
                                size="15" required/>
                        </div>
                        
                        <div>
                            <div><label htmlFor="password">Password</label></div>
                            <input name="password" type="password" placeholder="Password"
                                size="15"required/>
                        </div>
                        <div>
                            <input id="submit" className="submit" type="submit" value="Login" />
                            <input id="reset" className="reset" type="reset" value="Cancel"/>
                        </div>

                        <div>---- Or sign in with Google ----</div>
                        <GoogleSignIn/>
   
                    </fieldset>
                </form>
                
            </center>
        </div>
    </div>
);


export default Login;


