import React , { useState } from 'react';

import styles from './index.module.css'

import Map from '../components/Map';
import Tab from '../components/Tab';
import Marker from '../components/Marker';

import Search from '../components/Search';

import Switch from '../components/Switch';

import Navbar from '../components/Navbar';


const db = require('../lib/db');
const escape = require('sql-template-strings');


function Index({data}) {

  const [county, setCounty] = useState(data);
  const [map, setMap] = useState(true);
  const [covide, setCovide] = useState(true);
  const [fire, setFire] = useState(true);
  //console.log("props index ", data[0]);
  return (
    <>
        <Navbar/>
        <div>
            <Search
              data={data}
              setResult={setCounty}
            />


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
                {county.map((county) =>
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
              data={county}
              covide={covide}
              fire={fire}
              />
            }

            

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