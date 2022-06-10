/* eslint-disable react/prop-types */
import React from 'react';
// import styles from './CSS/Button.module.css'

const TabData = ({data, covid, fire}) => {
  // console.log("tab data ", data);
  return (
    <tr>
      <td>{data.name}</td>
      {covid ? (
        <>
          <td>{data.covid_case}</td>
          <td>{data.covid_death}</td>
        </>
      ) : (
        <></>
      )}
      {fire ? (
        <>
          <td>{data.fire_case}</td>
          <td>{data.evacuation_level}</td>
        </>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default TabData;
