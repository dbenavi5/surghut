import React , { useState } from 'react';

import styles from './index.module.css'

import Map from '../components/Map';
import Tab from '../components/Tab';
import Marker from '../components/Marker';

import Search from '../components/Search';

import Switch from '../components/Switch';

const db = require('../lib/db');
const escape = require('sql-template-strings');


function Index({data}) {

  const [map, setMap] = useState(true);
  const [covide, setCovide] = useState(true);
  const [fire, setFire] = useState(true);
  //console.log("props index ", data[0]);
  return (
    <>
        <div>
            <h2>CSC 648/848 SW Enginering Fall 2020</h2>
            <h3>Section 2<br/>Team 3</h3>

            <div
             className={styles.container}
            >

            <Switch
            state={map}
            onChange={setMap}
            nameTrue="Map"
            nameFalse="Tab"
            />

            <Switch
            state={covide}
            onChange={setCovide}
            nameTrue="Covide : On"
            nameFalse="Covide : Off"
            />

            <Switch
            state={fire}
            onChange={setFire}
            nameTrue="Fire : On"
            nameFalse="Fire : Off"
            />
            </div>

            {map ?
              <Map>
                {data.map((county) =>
                  <Marker 
                  key={county.id}
                  lat={county.latitude}
                  lng={county.longitude}
                  data={county}
                  covide={covide}
                  fire={fire}
                  />
                )}
              </Map>
            :
              <Tab
              data={data}
              covide={covide}
              fire={fire}
              />
            }

            

        </div>

        <div id="btn-wrapper">
            <div className="button-container"><a className="fire-btn" href="/wildfires_page">Wildfires</a></div>

            <div className="button-container"><a className="fire-btn" href="/covid_page">Coronavirus</a></div>
            <Search/>
        </div>
        
    </>
      
     
  )
};





export async function getServerSideProps({ req, query }) {

  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  return { props: { data :county} }
}

export default Index;