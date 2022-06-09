/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';

import {InputWithChoice} from '../input/Input';
import Button from '../button/Button';
// import styles from './Form.module.css';

function GetCounty(data, key, setResult) {
  // console.log("key == ", key);

  const result = data.filter(function(data) {
    return data.name.toLowerCase().includes(key.toLowerCase());
  });

  setResult(result);
}

function Search({data, setResult}) {
  const [text, setText] = useState('');

  // console.log(text);

  return (
    <div className="">
      <label className="" htmlFor="search-input">
        <InputWithChoice
          data={data}
          idData="County"
          placeHolder={'Enter the name of your county'}
          value={text}
          className=""
          onTextChange={setText}
        />
        <Button
          onClick={() => {
            // eslint-disable-next-line new-cap
            GetCounty(data, text, setResult);
          }}
        >
          <i className="fa  fa-search" />
        </Button>
      </label>
    </div>
  );
}

export default Search;
