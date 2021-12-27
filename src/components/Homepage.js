import React from 'react'
import Nav from './Nav'

const Homepage = () => {
    return (
        <main className='marginTop homepageMain'>
            <h1 id="name">JENNY MCGRATH</h1>
            <p className="intro"><span id="hello">Hello!</span> I'm a Colorado based fullstack developer with a passion for data analytics and creating intuitive user experiences.  </p>
            <p className="intro">Proven leader and life-long learner who is enthusiasic about harnessing technology to solve problems - big and small.  Ready to tackle complex issues with patience and empathy.</p>

            <a className="portfoliobutton" href="portfolio.html">See My Work</a>
        </main>

    )
}

export default Homepage
