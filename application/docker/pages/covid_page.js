import Link from 'next/link';
import BottomNav from '../components/BottomNav';

const Covid = () =>(
    <div>
        <head>
            <title>SurgeHut</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        </head>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <Link href="/"><a className="navbar-brand">SurgeHut</a></Link>
                <div class="collapse navbar-collapse">
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/wildfires_page"><a className="nav-link">Wildfires</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <center>
            <div>
                <h1>Coronavirus</h1>
                <p>Pandemic in CA</p>
            </div>
        </center>
        <BottomNav/>
    </div>
    
);

export default Covid;