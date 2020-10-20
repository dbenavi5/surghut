import React from 'react';
//import styles from './CSS/Button.module.css'


function Button({onClick, children}) {
    return (
        <button 
        onClick={onClick}
        //className={styles.button}
        >
        {children}
        </button>
    );
}

export default Button;