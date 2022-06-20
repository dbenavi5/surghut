/* eslint-disable react/prop-types */
import React from 'react';
// import styles from './Switch.module.css';

const Switch = ({state, className, onChange, nameTrue, nameFalse}) => {
  // //console.log("tab data ", data);
  return (
    <>
      <div
        state={state}
        className={className}
        onClick={() => {
          onChange(true);
        }}
      >
        <p>{nameTrue}</p>
      </div>
      <div
        state={state}
        className={className}
        onClick={() => {
          onChange(false);
        }}
      >
        <p>{nameFalse}</p>
      </div>
    </>
  );
};

export default Switch;
