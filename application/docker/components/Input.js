import React from 'react';

function TextInput({value, onTextChange, placeHolder, type}) {
  const eventHandler = (event) => {
    onTextChange(event.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

export {TextInput};
