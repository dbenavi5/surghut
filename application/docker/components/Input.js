import React from 'react';

function TextInput({value, onTextChange, placeHolder}) {

    const eventHandler = (event) => {
        onTextChange(event.target.value)
    }

    return (
        <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={eventHandler}
        />
    );
}

export {TextInput};