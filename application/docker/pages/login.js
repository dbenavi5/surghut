import React from 'react'
import Head from 'next/head';
import GoogleSignIn from '../components/GoogleSignIn';

const Login = () => (

    <div >
        <Head>
            <title>SurgeHut</title>
            <meta name="Description" content="SFSU team3  project Fall 2020."></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </Head>
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

                        <div className="google-wrap">---- Or sign in with Google ----</div>
                        <GoogleSignIn/>
                    </fieldset>
                </form>
            </center>
        </div>
    </div>
);


export default Login;


