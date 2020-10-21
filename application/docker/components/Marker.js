import React from 'react';

const markerStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
}

const markerStyleHover = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: 280,
    backgroundColor : 'rgba(140,140,140, 0.5)'
}

function Marker({
    name, 
    covide_case,
    covide_death,
    evacuation_level,
    fire_case,
    $hover}) {

    if (!$hover) {
        return (
            <div style={markerStyle}>
                <img
                width="30"
                height="30"
                src="https://image.flaticon.com/icons/png/128/3603/3603850.png"
                />
            </div>
        )

    }

    return (
        <div
        style={markerStyleHover}
        //className={styles.error}
        //className={styles.container}
        >
            <p style={{ fontSize: 25}} >{name}</p>
            <p style={{ fontSize: 15}} >covide_case by 100K : {covide_case}</p>
            <p style={{ fontSize: 15}} >covide_death by 100K : {covide_death}</p>
            <p style={{ fontSize: 15}} >evacuation_level : {evacuation_level}</p>
            <p style={{ fontSize: 15}} >fire_case : {fire_case}</p>
        </div>
    );
}

export default Marker;