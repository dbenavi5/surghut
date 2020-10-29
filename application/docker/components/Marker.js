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

function Marker({
  data,
  covide,
  fire,
  $hover}) {
  if (!$hover) {
    return (
      <div style={markerStyle}>
        <img
          width="30"
          height="30"
          src="https://image.flaticon.com/icons/png/128/3603/3603850.png"
	  alt="marker position"
        />
      </div>
    );
  }

  return (
    <div
      style={markerStyleHover}
    >
      <p style={{fontSize: 25, color: 'white'}} >{data.name}</p>
      {covide ?
                <>
                  <p style={{fontSize: 15, color: 'white'}} >covide_case by 100K : {data.covide_case}</p>
                  <p style={{fontSize: 15, color: 'white'}} >covide_death by 100K : {data.covide_death}</p>
                </> :
                <></>
      }
      {fire ?
                <>
                  <p style={{fontSize: 15, color: 'white'}} >evacuation_level : {data.evacuation_level}</p>
                  <p style={{fontSize: 15, color: 'white'}} >fire_case : {data.fire_case}</p>
                </> :
                <></>
      }
    </div>
  );
}

export default Marker;
