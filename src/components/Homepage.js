import React from 'react'
import Nav from './Nav'

const Homepage = () => {
    return (
        <main className='marginTop homepageMain'>
            <h1 id="name">JENNY MCGRATH</h1>
            <p className="intro"><span id="hello">Hello!</span> I'm a Colorado based web designer & front-end developer
                focused on crafting clean & user-friendly experiences</p>
            <p className="intro">I have a diverse set of skills ranging from design, React, Node.js </p>

            <a className="portfoliobutton" href="portfolio.html">Check Out My Work</a>
        </main>

    )
}

export default Homepage
