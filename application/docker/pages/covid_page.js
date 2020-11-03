import React  from 'react';
import Navbar from '../components/Navbar';
import Covid from '../components/Covid';

const CovidPage = () =>(
    <div>
        <center>
            <div>
                <Navbar/>
                <Covid />
                {/* <h1>Coronavirus</h1>
                <p>Pandemic in CA</p> */}
            </div>
        </center>
    </div>
);

export default CovidPage;
