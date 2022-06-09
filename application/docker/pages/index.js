/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";

// import styles from './index.module.css';

// import Map from '../components/Map';
// import Tab from '../components/Tab';
// import Marker from '../components/Marker';

import Search from "../components/search/Search";
import Switch from "../components/switch/Switch";
import Hero from "../components/hero/Hero";

// const db = require('../lib/db');
// const escape = require('sql-template-strings');

// eslint-disable-next-line react/prop-types
function Index({ data }) {
  const [county, setCounty] = useState(data);
  const [map, setMap] = useState(true);
  const [covid, setCovid] = useState(true);
  const [fire, setFire] = useState(true);
  // //console.log("props index ", data[0]);
  return (
    <>
      <Hero />
      <Search data={data} setResult={setCounty} />

      <div className="">
        <div className="">
          <Switch
            state={map}
            onChange={setMap}
            nameTrue="Map"
            nameFalse="Tab"
          />

          <Switch
            state={covid}
            onChange={setCovid}
            nameTrue="COVID Cases : On"
            nameFalse="COVID Cases : Off"
          />

          <Switch
            state={fire}
            onChange={setFire}
            nameTrue="Fire Cases : On"
            nameFalse="Fire Cases : Off"
          />
        </div>

        {/* {map ?
              <Map>
                {county.map((county) =>
                  <Marker
                    key={county.id}
                    lat={county.latitude}
                    lng={county.longitude}
                    data={county}
                    covid={covid}
                    fire={fire}
                  />,
                )}
              </Map> :
              <Tab
                data={county}
                covid={covid}
                fire={fire}
              />
          } */}
      </div>
    </>
  );
}

// export async function getServerSideProps({req, query}) {
//   const county = await db.query(escape`
//       SELECT *
//       FROM County
//   `);

//   //console.log('county data = ', county);
//   return {props: {data: county}};
// }

export default Index;
