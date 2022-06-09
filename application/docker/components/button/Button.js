/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from 'react';

function Button({onClick, children, className, style}) {
  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
