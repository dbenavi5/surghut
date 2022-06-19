/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';

import {InputWithChoice} from '../input/Input';
import Button from '../button/Button';
import styles from './Search.module.css';

const GetCounty = (data, key, setResult) => {
  // console.log("key == ", key);

  const result = data.filter((data) => {
    return data.name.toLowerCase().includes(key.toLowerCase());
  });

  setResult(result);
};

const Search = ({data, setResult}) => {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const _toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div id={styles.searchSection}>
      <h1>Try out the interactive Google Maps</h1>
      <h2>
        Type in your county in the search bar to get your county information.
      </h2>
      <div className={styles.container}>
        <Button
          className={styles.searchBtn}
          // style={buttonStyle}
          onClick={() => {
            // eslint-disable-next-line new-cap
            GetCounty(data, text, setResult);
            _toggleSearch();
          }}
        >
          {isActive ? (
            <AiOutlineClose color="#1d2732" size={18} />
          ) : (
            <AiOutlineSearch color="#1d2732" size={20} />
          )}
        </Button>
        <InputWithChoice
          data={data}
          idData="County"
          placeHolder={'Enter the name of your county'}
          value={text}
          className={styles.input}
          onTextChange={setText}
        />
      </div>
    </div>
  );
};

export default Search;
