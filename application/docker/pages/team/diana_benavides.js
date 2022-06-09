/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";

function diana_benavides() {
  return (
    <div className="container">
      <div className="header">
        <h1>Diana BENAVIDES</h1>
      </div>

      <div className="header2">
        <h2>GitHub Master and Backend Assistant</h2>

        <p>
          Hello my name is Diana Benavides and I am a senior at SFSU. I&apos;m
          designing a Web Application, along with my team, to bring awareness of
          public safety measures surrounding Covid-19 and the Wildfires across
          California.
        </p>

        <Link href="https://github.com/dbenavi5">
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

export default diana_benavides;
