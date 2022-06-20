/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Switch.module.css';

const Switch = ({state, onChange, nameTrue, nameFalse}) => {
  // //console.log("tab data ", data);
  return (
    <>
      <div
        className={state ? styles.buttonActive : styles.buttonInactive}
        onClick={() => {
          onChange(true);
        }}
      >
        <p className={styles.text}>{nameTrue}</p>
      </div>
      <div
        className={state ? styles.buttonActive : styles.buttonInactive}
        onClick={() => {
          onChange(false);
        }}
      >
        <p className={styles.text}>{nameFalse}</p>
      </div>
    </>
  );
};

export default Switch;
