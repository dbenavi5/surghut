import axios from 'axios';

const url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/csv_files/fire_data.csv?token=ANLI5KZWITHAJITQMGETZYK7ZTPY4";

export const fetchFireData = async () => {
    try {
        const  { data: {
            incident_name,
            incident_county, 
            incident_location, 
            incident_acres_burned, 
            incident_containment,
            
        }} = await axios.get(url);

        const modifiedData = {
            incident_name,
            incident_county,
            incident_location,
            incident_acres_burned,
            incident_containment
        }

        return modifiedData;
    } catch (error) {
        
    }
}