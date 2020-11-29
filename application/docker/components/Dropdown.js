import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
// import styles from './Dropdown.module.css';

function Dropdown() {
  
    const [click, setClick] = useState( false );
    const handleClick = () => setClick( !click );
    return (
      <>
        <ul onClick={ handleClick }
        className= { click ?  'dropdownMenu clicked' : 'dropdownMenu'}>
            {/* retrieves dropdown categories from MenuItems.js */}
            {MenuItems.map((item, index) => { 
                return (
                    <li key={index}>
                        <a className={item.cName} href={item.path} onClick={() => 
                            setClick(false)}>
                                {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
      </>
  );
}

export default Dropdown;
