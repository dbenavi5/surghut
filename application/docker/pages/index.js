/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Hero from '../components/hero/Hero';
import {useState} from 'react';
import Switch from '../components/switch/Switch';
import Search from '../components/search/Search';
import Map from '../components/map/Map';
import Tab from '../components/tab/Tab';
import Marker from '../components/map/Marker';
import styles from './styles/index.module.css';

const db = require('../lib/db');
const escape = require('sql-template-strings');

// eslint-disable-next-line react/prop-types
const Index = ({data}) => {
  const [county, setCounty] = useState(data);
  const [map, setMap] = useState(true);
  const [covid, setCovid] = useState(true);
  const [fire, setFire] = useState(true);
  // const [tab, setTab] = useState('');
  // //console.log("props index ", data[0]);
  return (
    <div className={styles.index}>
      <Hero />
      <Search data={data} setResult={setCounty} />
      <div className={styles.indexContainer}>
        <Switch
          className={map ? styles.buttonActive : styles.buttonInactive}
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

export const getServerSideProps = async ({req, query}) => {
  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  // console.log('county data = ', county);
  return {props: {data: county}};
};

export default Index;
