import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  
  <div>
    <Head>
      <title>SurgeHut</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    <Navbar/>
    <center>
      <div className="container">
        {props.children}
      </div>
    </center>
    
  </div>
);

export default Layout;