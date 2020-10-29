import React from 'react';
// import styles from './CSS/Button.module.css'
import styles from './Search.module.css';

function Button({onClick, children}) {
    return (
        <button className={styles.search_btn} 
        onClick={onClick}
        //className={styles.button}
        >
        {children}
        </button>
    );
}

export default Button;
