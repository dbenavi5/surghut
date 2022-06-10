/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({onClick, children, className, style}) => {
  return (
    <button
      style={style}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
