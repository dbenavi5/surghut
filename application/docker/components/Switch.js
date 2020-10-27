import React from 'react';
import styles from './Switch.module.css';


function Switch({state, onChange, nameTrue, nameFalse}) {
  // console.log("tab data ", data);
  return (
    <div
      className={styles.container}
    >
      <div
        className={ state ? styles.buttonActive : styles.buttonInactive}
        onClick={() => {
          onChange(true);
        }}
      >
        <p className={styles.text}>{nameTrue}</p>
      </div>
      <div
        className={ state ? styles.buttonInactive : styles.buttonActive}
        onClick={() => {
          onChange(false);
        }}
      >
        <p className={styles.text} >{nameFalse}</p>
      </div>
    </div>
  );
}

export default Switch;
