import React from 'react';
import Link from 'next/link';

// import styles from './harsimran.css'
function harsimran_nandhra() {
  return (
    <>
      <div>
        <h1>Harsimran Nandhra</h1>
      </div>

      <div>
        <h2>Role:</h2>
        <p>I will work on the front-end and help with the back-end</p>

        <h2>Link</h2>
        <a href="https://github.com/hnandhra1"> my Github</a>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>

    </>
  );
}

export default harsimran_nandhra;
