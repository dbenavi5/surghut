import React from 'react';

function Marker({
    name, 
    covide_case,
    covide_death,
    evacuation_level,
    fire_case}) {
    return (
        <div>
            <p>county : {name}</p>
            <p>covide_case by 100K : {covide_case}</p>
            <p>covide_death by 100K : {covide_death}</p>
            <p>evacuation_level : {evacuation_level} </p>
            <p>fire_case : {fire_case} </p>
        </div>
    );
}

export default Marker;