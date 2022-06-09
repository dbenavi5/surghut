/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from 'react';
import Link from 'next/link';

import styles from './pierre_antoine.module.css';

function pierre_antoine() {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.center}>Pierre ANTOINE</h1>
      </div>

      <div className={styles.box}>
        <h2>Role</h2>
        <p>I am the front lead and server manager</p>
        <h2>Link</h2>
        <a href="https://github.com/docmurloc"> my Github</a>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>

    </>
  );
}

export default pierre_antoine;
