import Link from 'next/link';

import Navbar from '../components/Navbar';



function About () {
    return (
        <div>
            <Navbar/>
            <h1>About This Project</h1>
            <p>Public Safety Web App for California residents facing wildfire surges and monitoring the coronavirus within the users county.</p>

            <h6>Meet the Team</h6>
            <div className="">
                <ul className="navbar-nav ml-auto">
                    <li className="">
                        <Link href="/about/josue_carreo"><a className="nav-link">Josue Carreo</a></Link>
                    </li>
                    <li className="">
                        <Link href="/about/pierre_antoine"><a className="nav-link">Pierre Antoine</a></Link>
                    </li>
                    <li className="">
                        <Link href="/about/harsimran_nandhra"><a className="nav-link">Harsimran Nandhra</a></Link>
                    </li>
                    <li className="">
                        <Link href="/about/kevin_chen"><a className="nav-link">Kevin Chen</a></Link>
                    </li>
                    <li className="">
                        <Link href="/about/diana_benavides"><a className="nav-link">Diana Benavides</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default About;