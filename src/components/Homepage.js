import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <main className='marginTop homepageMain'>
            <p id="hello">Hi, my name is</p>
            <h1 id="name">JENNY MCGRATH</h1>
            <h2 id='subtitle'>I build things for the web.</h2>
            <p className="intro">I'm a Colorado based programmer that specializes in building (and occasionally designing) exceptional digital experiences. I have a passion for data analytics and creating intuitive user experiences.  </p>
            <p className="intro">I am a proven leader and life-long learner who is enthusiasic about harnessing technology to solve problems - big and small.  Ready to tackle complex issues with patience and empathy.</p>

            <Link className="portfoliobutton" to="/projects">See My Work</Link>
        </main>

    )
}

export default Homepage
