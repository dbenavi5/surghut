import React from 'react'
import Link from 'next/link'

import Map from '../component/Map';

function Home() {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Home</h1>
      <img src="/static/home.png" />
      <Map/>
    </>
  )
}

export default Home