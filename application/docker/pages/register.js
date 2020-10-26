import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import BottomNav from '../components/BottomNav';
import {RegisterForm} from '../components/Form';

import Navbar from '../components/Navbar';


const Registration = () => (
    
        <div>
            <Navbar/>
            <RegisterForm/>
        </div>
);

export default Registration;