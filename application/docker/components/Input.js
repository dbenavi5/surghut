import React from 'react';
import styles from './Form.module.css';

function SearchTextInput({value, onTextChange, placeHolder, type}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.form_input}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

function TextInput({value, onTextChange, placeHolder, type}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.form_input}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

function InputWithChoice({value, onTextChange, placeHolder, data, idData}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        list={idData}
        className={styles.form_input}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
      <datalist id={idData}>
        {data.map((data) => <option key={data.id} value={data.name}></option>)}
      </datalist>
    </div>
  );
}

function SearchInputWithChoice({value, onTextChange, placeHolder, data, idData}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        list={idData}
        className={styles.search_input}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
      <datalist id={idData}>
        {data.map((data) => <option key={data.id} value={data.name}></option>)}
      </datalist>
    </div>
  );
}


export {SearchTextInput, TextInput, InputWithChoice, SearchInputWithChoice};
