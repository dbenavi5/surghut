/* eslint-disable react/prop-types */
import React from 'react';
// import styles from './CSS/Button.module.css'

const TabData = ({data, covid, fire}) => {
  // console.log("tab data ", data);
  return (
    <tr>
      <td style={{fontSize: '1.2rem'}}>
        {data.name}
      </td>
      {covid ? (
        <>
          <td style={{fontSize: '1.2rem'}}>{data.covid_case}</td>
          <td style={{fontSize: '1.2rem'}}>{data.covid_death}</td>
        </>
      ) : (
        <></>
      )}
      {fire ? (
        <>
          <td style={{fontSize: '1.2rem'}}>{data.fire_case}</td>
          <td style={{fontSize: '1.2rem'}}>{data.evacuation_level}</td>
        </>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default TabData;
