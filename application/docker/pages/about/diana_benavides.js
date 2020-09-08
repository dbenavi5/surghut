import React from 'react'
import Link from 'next/link'


import styles from './style.css'

function diana_benavides() {
  return (
    <>
    <div className={styles.box}>
        <h1 className={styles.center}>Diana Benavides</h1>
    </div>

    <div className={styles.box}>
        <h2>GitHub Master and Backend Assistant</h2>

        <img class="img_of_me" src ="me.JPG" width = "300px" height= "400px" alt="photo of me"></img>
        <p>Hello my name is Diana Benavides and I am a senior at SFSU. I'm designing a Web Application, 
            along with my team, to bring awareness of public safety measures surrounding Covid-19 and the Wildfires across California.</p>
  
        <a href="https://github.com/dbenavi5" class="btn"> my Github</a>
        <div>
            <Link href="/about">
            <a>back to about page</a>
            </Link>
        </div>
    </div>
      
    </>
  )
}

export default diana_benavides