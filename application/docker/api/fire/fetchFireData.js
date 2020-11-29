import axios from 'axios';

const url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/csv_files/fire_data.csv?token=ANLI5K7IU5ANAAMGADO5W6S7ZUKAQ"
export const fetchFireData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const {incident_name, incident_county, incident_location, incident_acres_burned, incident_containment} = data;
    } catch (error) {
        
    }
}