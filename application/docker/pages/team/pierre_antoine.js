/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";

// import styles from './pierre_antoine.module.css';

function pierre_antoine() {
  return (
    <div className="container">
      <div className="header">
        <h1>Pierre ANTOINE</h1>
      </div>

      <div className="header2">
        <h2>Role</h2>
        <p>I am the front lead and server manager</p>
        <h2>Link</h2>
        <Link href="https://github.com/docmurloc">
          <a target="_blank" rel="noreferrer">
            My Github
          </a>
        </Link>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default pierre_antoine;
