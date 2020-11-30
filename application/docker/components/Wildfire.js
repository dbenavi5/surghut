import React, {Component} from 'react';
import axios from 'axios';
// import FireGrid from '../components/FireGrid';
// import { fetchFireData } from '../api/fire/fetchFireData';

class Wildfire extends Component{
    state = {
            error: null,
            isLoaded: false,
            Name: [],
            County: [],
    }

    url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/new-db/application/docker/json_files/fire_data.json?token=ANLI5K4WTYBJBQ2JUT2CKDS7ZY5V2";

    //"https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=true";

    async componentDidMount() {
        const res = await axios.get(this.url);
        console.log(res);

    }
    
    render(){

        const {error, isLoaded, Name, County }= this.state;

        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading</div>
        } else {
            return(
                <ul>
                    {name.map(item => (
                        <li key={item.Name}>
                            {item.Name}
                        </li>
                    ))}
                </ul>
            )
        }

    }
}

export default Wildfire;