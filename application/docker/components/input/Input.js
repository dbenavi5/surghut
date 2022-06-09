/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import styles from './Input.module.css';

function TextInput({ style, value, onTextChange, placeHolder, type }) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div className={styles.textInput}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

function InputWithChoice({
  value,
  styles,
  onTextChange,
  placeHolder,
  data,
  idData,
}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        list={idData}
        className={styles}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
      <datalist id={idData}>
        {/* {data.map((data) => <option key={data.id} value={data.name}></option>)} */}
      </datalist>
    </div>
  );
}

function MailTextInput({ value, styles, onTextChange, placeHolder, type }) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <textarea
        className={styles}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

export { TextInput, InputWithChoice, MailTextInput };
