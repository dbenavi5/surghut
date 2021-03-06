/* eslint-disable react/prop-types */
import React from 'react';

const markerStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

const markerStyleHover = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  width: 280,
  backgroundColor: 'rgba(140,140,140, 0.8)',
};

const Marker = ({data, covid, fire, $hover}) => {
  if (!$hover) {
    return (
      <div style={markerStyle}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/color/96/undefined/marker--v1.png"
          alt="marker"
        />
      </div>
    );
  }

  return (
    <div style={markerStyleHover}>
      <p style={{fontSize: 25, color: 'white'}}>{data.name}</p>
      {covid ? (
        <>
          <p style={{fontSize: 15, color: 'white'}}>
            covid_case by 100K : {data.covid_case}
          </p>
          <p style={{fontSize: 15, color: 'white'}}>
            covid_death by 100K : {data.covid_death}
          </p>
        </>
      ) : (
        <></>
      )}
      {fire ? (
        <>
          <p style={{fontSize: 15, color: 'white'}}>
            evacuation_level : {data.evacuation_level}
          </p>
          <p style={{fontSize: 15, color: 'white'}}>
            fire_case : {data.fire_case}
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Marker;
