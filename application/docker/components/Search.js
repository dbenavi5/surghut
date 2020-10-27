import React, { useState } from 'react';

import {TextInput} from './Input';
import Button from './Button';

function GetCounty(data, key, setResult) {

    //console.log("key == ", key);

    const result = data.filter(
        function (data) {
            return data.name.toLowerCase().includes(key.toLowerCase());
        }
    )

    setResult(result);
}


function Search ({data, setResult}) {

    const [text, setText] = useState("");

    return (
        <div id= "searchWrapper">     
            <label className="search-label" htmlFor="search-input" >
                <TextInput
                placeHolder={"Search..."}
                value={text}
                onTextChange={setText}
                />
                <Button
                onClick={() => {
                    GetCounty(data, text, setResult);
                }}
                >
                Test
                </Button>
            </label> 
        </div> 
    )
}

export default Search;
