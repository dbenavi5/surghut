import React, {useState} from 'react';

import {SearchInputWithChoice} from './Input';
import Button from './Button';
import styles from './Form.module.css';


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

  console.log(text);

  return (
    <div className={styles.searchWrapper}>
      <label className={styles.search_label} htmlFor="search-input" >
        <SearchInputWithChoice
          data={data}
          idData="County"
          placeHolder={'Enter the name of your county'}
          value={text}
          className={styles.options}
          onTextChange={setText}
        />
        <Button
          onClick={() => {
            GetCounty(data, text, setResult);
          }}
        >
          <i className="fa  fa-search"/>
        </Button>
      </label>
    </div>
  );
}

export default Search;
