import React, {useState} from 'react';

import {TextInput} from './Input';
import Button from './Button';
import styles from './Search.module.css';


function GetCounty(data, key, setResult) {
  // console.log("key == ", key);

  const result = data.filter(
      function(data) {
        return data.name.toLowerCase().includes(key.toLowerCase());
      },
  );

  setResult(result);
}


function Search({data, setResult}) {
  const [text, setText] = useState('');

  return (
    <div className={styles.searchWrapper}>
      <label className={styles.search_label} htmlFor="search-input" >
        <TextInput 
          type={'text'}
          placeHolder={'Search...'}
          value={text}
          onTextChange={setText}
        />
        <Button
          onClick={() => {
            GetCounty(data, text, setResult);
          }}
        >
               <i className="fa  fa-search"> Search</i>
        </Button>
      </label>
    </div>
  );
}

export default Search;
