import React from 'react';
// import styles from './CSS/Button.module.css'
import styles from './Form.module.css';

function Button({onClick, children}) {
  return (
    <div className={styles.search_wrap}>
      <button className={styles.search_btn}
        onClick={onClick}
        // className={styles.button}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
