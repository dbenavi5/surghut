import React from 'react';
import styles from './Search.module.css';

function TextInput({value, onTextChange, placeHolder, type}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.search_input}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

export {TextInput};
