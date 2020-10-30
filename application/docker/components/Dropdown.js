import React, { useState } from 'react';
import Link from 'next/link';
import { MenuItems } from './MenuItems';
// import './Dropdown.css';

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
                            <Link className={item.cName} href={item.path} onClick={() => 
                                setClick(false)}>
                                    {item.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
        
        </>
    )
}

export default Dropdown;