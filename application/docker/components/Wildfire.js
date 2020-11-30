import React, { Component } from 'react';
// import FireGrid from './FireGrid';
import styles from './FireGrid.module.css';
import { fetchFireData } from '../api/fire/fetchFireData';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';

class Wildfire extends Component {
    
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchFireData();
        console.log(fetchedData);
    }
    render(){
        const { data } = this.state;
        return(
            <div className={styles.container}>
                <p>fire name:{data.incident_name}</p>
                <p>county:{data.incident_county}</p>
                <p>locations:{data.incident_location}</p>
                <p>acres burned:{data.incident_acres_burned}</p>
                <p>containment:{data.incident_containment}</p>
            </div>
        )
    }
}
export default Wildfire;

// state = {
//     incident_name: [],
//     incident_county:[],
//     incident_location: [],
// };

// url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/csv_files/fire_data.csv?token=ANLI5K4ZUEURZB2Q6IWNJUC7ZUU2E";

// async componentDidMount() {

//     const res = await axios.get(this.url);  
//     const rows = res.data.split("\n");
    
//     const fire_name = [];
//     const incident_county = [];
//     const incident_location = [];

//     for (let i = 1; i < rows.length; i++) {
//         const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
//         const fireName = row[0].replace(/"/g,"");
//         const countyName = row[1].replace(/"/g,"");
//         const fireLocation = row[2].replace(/"/g,"");

//         if(fireName !== "") {
//             fire_name.push({
//                 incident_name: fireName,
//                 incident_county: countyName,
//                 incident_location: fireLocation,
//             });
//         }
//     }
//     //console.table(fire_name);

//     this.setState({fire_name, incident_county, incident_location });

// }
// render(){

//     const { incident_name, incident_county, incident_location } = this.state;

//     return(
//         <div className={styles.container}>
//             {incident_name.map((name) => {
//                 return(
//                     <div>
//                         <p>fire name:{name.incident_name}</p>
//                         <p>county:{name.incident_county}</p>
//                         <p>locations:{name.incident_location}</p>
//                     </div>
//                 )
//             })}
                    
//         </div>
//     )
// }

// }