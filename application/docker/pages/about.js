import React from 'react'
import Link from 'next/link'

import styles from './about.module.css'

function About() {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.center}>Software Engineering Class SFSU</h1>
        <h1 className={styles.center}>Fall 2020</h1>
        <h1 className={styles.center}>Section 02</h1>
        <h1 className={styles.center}>Team 3</h1>
      </div>

      <div className={styles.box}>
        <div className={styles.button}>
          <Link href="/about/pierre_antoine">
            <a>Pierre ANTOINE</a>
          </Link>
        </div>
        <div className={styles.button}>
          <Link href="/about/diana_benavides">
            <a>Diana BENAVIDES</a>
          </Link>
        </div>
        <div className={styles.button}>
          <Link href="/about/kevin_chen">
            <a>Kevin CHEN</a>
          </Link>
        </div>
        <div className={styles.button}>
          <Link href="/about/josue_carreo">
            <a>Josue CARREO</a>
          </Link>
        </div>
        <div className={styles.button}>
          <Link href="/about/harsimran_nandhra">
            <a>Harsimran NANDHRA</a>
          </Link>
        </div>
      </div>

    </>
  )
}

export default About