/* eslint-disable quote-props */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import { InputWithChoice } from "../input/Input";
import Button from "../button/Button";
import styles from "./Search.module.css";

function GetCounty(data, key, setResult) {
  // console.log("key == ", key);

  const result = data.filter((data) => {
    return data.name.toLowerCase().includes(key.toLowerCase());
  });

  setResult(result);
}

function Search({ data, setResult }) {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const _toggleSearch = () => {
    setIsActive(!isActive);
  };

  const mystyle = {
    position: "relative",
    height: "36px",
    width: "36px",
    border: "none",
    zIndex: 1,
    cursor: "pointer",
    background: "none",
    ":hover": {
      color: "white",
      "::after": {
        opacity: 1,
        transform: "scale(1)",
      },
    },
    "::after": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      borderRadius: 0,
      zIndex: -1,
      background: "black",
      transition: "0.2s ease",
      transform: "scale(0.6)",
      opacity: 0,
    },
  };

  return (
    <div id={styles.searchSection}>
      <div className={styles.container}>
        <Button
          style={mystyle}
          onClick={() => {
            // eslint-disable-next-line new-cap
            GetCounty(data, text, setResult);
            _toggleSearch();
          }}
        >
          {isActive ? (
            <AiOutlineClose size={18} />
          ) : (
            <AiOutlineSearch size={20} />
          )}
        </Button>
        <InputWithChoice
          data={data}
          idData="County"
          placeHolder={"Enter the name of your county"}
          value={text}
          className={styles.input}
          onTextChange={setText}
        />
      </div>
    </div>
  );
}

export default Search;
