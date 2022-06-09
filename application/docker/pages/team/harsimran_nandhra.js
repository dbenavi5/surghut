/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";

// import styles from './harsimran.css'
function harsimran_nandhra() {
  return (
    <div className="container">
      <div className="header">
        <h1>Harsimran NANDHRA</h1>
      </div>

      <div className="header2">
        <h2>Role:</h2>
        <p>I will work on the front-end and help with the back-end</p>

        <Link href="https://github.com/hnandhra1">
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

export default harsimran_nandhra;
