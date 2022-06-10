/* eslint-disable react/prop-types */
import React from 'react';
// import styles from './Switch.module.css';

const Switch = ({state, onChange, nameTrue, nameFalse}) => {
  // //console.log("tab data ", data);
  return (
    <div>
      <div
        onClick={() => {
          onChange(true);
        }}
      >
        <p>{nameTrue}</p>
      </div>
      <div
        onClick={() => {
          onChange(false);
        }}
      >
        <p className="">{nameFalse}</p>
      </div>
    </div>
  );
};

export default Switch;
