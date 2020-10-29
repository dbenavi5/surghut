import React from 'react';
import styles from './Watermark.module.css';

function Watermark() {
  return (
    <div>
      <h2 className={styles.watermark}>CSC 648/848<br/> SW Enginering Fall 2020</h2>
      <h3 className={styles.watermark} >Section 2<br/>Team 3</h3>
    </div>
  );
}

export default Watermark;
