/* eslint-disable react/prop-types */
import React from 'react';

const TextInput = ({value, className, onTextChange, placeHolder, type}) => {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={eventHandler}
    />
  );
};

const InputWithChoice = ({
  value,
  className,
  onTextChange,
  placeHolder,
  data,
  idData,
  type,
}) => {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div className={'styles.wrapper'}>
      <input
        list={idData}
        className={className}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
      <datalist id={idData}>
        {data.map((data) => (
          <option key={data.id} value={data.name}></option>
        ))}
      </datalist>
    </div>
  );
};

const MailTextInput = ({
  value,
  className,
  onTextChange,
  placeHolder,
  type,
}) => {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <textarea
      className={className}
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={eventHandler}
    />
  );
};

export {TextInput, InputWithChoice, MailTextInput};
