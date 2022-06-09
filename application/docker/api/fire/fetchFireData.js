/* eslint-disable no-unused-vars */
import axios from 'axios';

const url =
  'https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=true';
// "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/master/application/docker/json_files/fire_data.json?token=ANLI5K42WJ3IVOJYNL563S27ZYFBG";

export const fetchFireData = async () => {
  try {
    const data = await axios.get(url);

    // console.log(data);
    // return {data};
  // eslint-disable-next-line no-empty
  } catch (error) {}
};
