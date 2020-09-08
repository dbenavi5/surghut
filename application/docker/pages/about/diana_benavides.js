import React from 'react'
import Link from 'next/link'

function diana_benavides() {
  return (
    <>
    <div>
        <h1>Diana Benavides</h1>
    </div>

    <div>
        <h2>GitHub Master and Backend Assistant</h2>

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