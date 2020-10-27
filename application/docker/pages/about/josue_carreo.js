import React from 'react';
import Link from 'next/link';

function josue_carreo() {
  return (
    <>
      <div >
        <h1 >Josue CERREO</h1>
      </div>

      <div>
        <h2>Role</h2>
        <p>I am the team lead</p>
        <div>
          <Link href="/about">
            <a>back to about page</a>
          </Link>
        </div>
      </div>

    </>
  );
}

export default josue_carreo;
