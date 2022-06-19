/* eslint-disable react/prop-types */
import React from 'react';
// import styles from './Switch.module.css';

const Switch = ({state, className, onChange, nameTrue, nameFalse}) => {
  // //console.log("tab data ", data);
  return (
    <div className={'switch-container'}>
      <div
        state={state}
        className={className}
        onClick={() => {
          onChange(true);
        }}
      >
        <p className={className}>{nameTrue}</p>
      </div>
      <div
        state={state}
        className={className}
        onClick={() => {
          onChange(false);
        }}
      >
        <p className={className}>{nameFalse}</p>
      </div>
    </div>
  );
};

export default Switch;
