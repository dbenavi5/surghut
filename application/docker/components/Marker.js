import React from 'react';

import styles from './Marker.module.css';

function Marker({
    name, 
    covide_case,
    covide_death,
    evacuation_level,
    fire_case}) {
    return (
        <div
        style={{ width: 300, background : 'red'}}
        //className={styles.error}
        //className={styles.container}
        >
            <p style={{ fontSize: 20}} > county : {name}</p>
            <p style={{ fontSize: 20}} > covide_case by 100K : {covide_case}</p>
            <p style={{ fontSize: 20}} > covide_death by 100K : {covide_death}</p>
            <p style={{ fontSize: 20}} > evacuation_level : {evacuation_level} </p>
            <p style={{ fontSize: 20}} > fire_case : {fire_case} </p>
        </div>
    );
}

export default Marker;