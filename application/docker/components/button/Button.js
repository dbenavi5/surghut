/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';
// import styles from './CSS/Button.module.css'
// import styles from './Form.module.css';

function Button({onClick, children, className}) {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
