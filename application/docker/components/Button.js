import React from 'react';
// import styles from './CSS/Button.module.css'
import styles from './Form.module.css';

function Button({onClick, children}) {
  return (
    	<button className={styles.search_btn}
      	        onClick={onClick}
        >
     		 {children}
    	</button>
  );
}

export default Button;
