/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";

function josue_carreon() {
  return (
    <div className="container">
      <div className="header">
        <h1>Josue CARREON</h1>
      </div>

      <div className="header2">
        <h2>Role</h2>
        <p>I am the team lead</p>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default josue_carreon;
