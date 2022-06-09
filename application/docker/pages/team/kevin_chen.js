/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";

function kevin_chen() {
  return (
    <div className="container">
      <div className="header">
        <h1>Kevin CHEN</h1>
      </div>

      <div className="header2">
        <h2>Role</h2>
        <p>Back-end Lead</p>
        <Link href="https://github.com/kevinchen95">
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

export default kevin_chen;
