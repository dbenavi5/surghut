/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from 'react';
import Link from 'next/link';

import styles from './kevin_chen.module.css';

function kevin_chen() {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.center}>Kevin CHEN</h1>
      </div>

      <div className={styles.box}>
        <h2>Role</h2>
        <p>Back-end Lead</p>
        <h2>Link</h2>
        <a href="https://github.com/kevinchen95"> my Github</a>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>

    </>
  );
}

export default kevin_chen;
