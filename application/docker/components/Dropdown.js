import React, { useState } from 'react';
import { MenuItems } from './MenuItems';

function Dropdown()  {

    const [click, setClick] = useState( false );
    const handleClick = () => setClick( !click );
    return (
        <>
            <ul onClick={ handleClick }
            className= { click ?  'dropdownMenu clicked' :' dropdownMenu' }>
                {MenuItems.map((item, index) => {
                    return (
                        <li  key={index}>
                            <a className={item.cName} href={item.path} onClick={() => 
                                setClick(false)}>
                                    {item.title}
                            </a>
                        </li>
                    )
                })}

            </ul>
        
        </>
    )
}

export default Dropdown;