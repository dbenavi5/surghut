import React from 'react'
import Head from 'next/head';

const Registration = () => (
    
    <div>
        <Head>
            <title>SurgeHut</title>
            <meta name="Description" content="SFSU team3 project Fall 2020."></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            {/* <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/> */}
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        </Head>
        <div className="reg-wrap">
            <center>
                <form className="reg-form" name="form1" >
                    <h1 className= "reg_border">Registration Form</h1>
                    <fieldset className="field">
                        <div className="label-wrap">
                            <div><label htmlFor="username">Create a username</label></div>
                            <input className="reg-inputs" id="username" name="username" type="text" placeholder="Username" size="15" required/>
                        </div>
                        
                        <div className="label-wrap">
                            <div><label htmlFor="email">Enter email</label></div>
                            <input className="reg-inputs" name="email" type="email" placeholder="Email" size="15" required/>
                        </div>
                    
                        <div className="label-wrap">
                            <div><label htmlFor="current-password">Type in a password</label></div>
                            <input className="reg-inputs" id="password" name="password" type="password" placeholder="Password" size="15" required/>
                        </div>

                        <div className="label-wrap">
                            <div><label htmlFor="new-password">Confirm password</label></div>
                            <input className="reg-inputs" id="new-password" name="new-password" type="password" placeholder="Confirm Password" size="15"
                                    required/>
                        </div>
                        <div className="check-box">
                            <div className="check1"> 
                                <label  htmlFor="verifyage">Check the box if over 13 years of age</label>
                                <input type="checkbox" name="verifyage" value="Verify" required/>
                            </div>
                            <div className="check2">
                                <label  htmlFor="acceptterms">Accept <a id="terms" href="" >Terms of Use</a> and <a id="terms" href="" >Privacy Rules</a></label>
                                <input type="checkbox" name="acceptterms" value="Accept" required/> 
                            </div>
                        </div>

                        <div className="sumbit-wrap">
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