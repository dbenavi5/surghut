/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import {useState} from "react";
import Switch from "../switch/Switch";
import Search from "../search/Search";
import Map from "../map/Map";
import Tab from "../tab/Tab";
import Marker from "../map/Marker";
const db = require("../../lib/db");
const escape = require("sql-template-strings");

const MapSection = ({data}) => {
  const [county, setCounty] = useState(data);
  const [map, setMap] = useState(true);
  const [covid, setCovid] = useState(true);
  const [fire, setFire] = useState(true);
  return (
    <div className="">
      <Search data={data} setResult={setCounty} />
      <div className="">
        <Switch state={map} onChange={setMap} nameTrue="Map" nameFalse="Tab" />

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

      {map ? (
        <Map>
          {county.map((county) => (
            <Marker
              key={county.id}
              lat={county.latitude}
              lng={county.longitude}
              data={county}
              covid={covid}
              fire={fire}
            />
          ))}
        </Map>
      ) : (
        <Tab data={county} covid={covid} fire={fire} />
      )}
    </div>
  );
};

export async function getServerSideProps({req, query}) {
  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  // console.log('county data = ', county);
  return {props: {data: county}};
}

export default MapSection;
