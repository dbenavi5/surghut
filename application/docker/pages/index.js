import Map from '../components/Map';
import Marker from '../components/Marker';

import Search from '../components/Search';

const db = require('../lib/db');
const escape = require('sql-template-strings');


function Index({data}) {

  console.log("props index ", data[0]);
  return (
    <>
        <div>
            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
            <h3>Section 2<br/>Team 3</h3>
            

        </div>

        <div id="btn-wrapper">
            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>

            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
            <Search/>
            <Map>
              {data.map((county) =>
                <Marker 
                key={county.id}
                lat={county.latitude}
                lng={county.longitude}
                name={county.name}
                covide_case={county.covide_case}
                covide_death={county.covide_death}
                evacuation_level={county.evacuation_level}
                fire_case={county.fire_case}
                />
              )}
            </Map>
        </div>
    </>
      
     
  )
};

const IP_SERVER = "localhost";

const PORT_SERVER = "3000";


export async function getServerSideProps({ req, query }) {
  console.log("IP_SERVER ", IP_SERVER, " PORT_SERVER ", PORT_SERVER);

  //let answer = await fetch(
  //  'https://' + IP_SERVER + ':3000/api/county',
  //  {
  //    headers: {
  //      Accept: 'application/json',
  //      'Content-Type': 'application/json',
  //    },
  //    method: 'GET',
  //  },
  //);
  //console.log("getInfo: ", answer);  
  //answer = await answer.json();

  //const res = await fetch(
  //  `https://${IP_SERVER}:${PORT_SERVER}/api/county`
  //)
  //const answer = await res.json()

  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  return { props: { data :county} }
}

export default Index;