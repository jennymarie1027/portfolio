import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <main className='marginTop homepageMain'>
            <h5 id="hello">Hi, my name is</h5>
            <h1 id="name">JENNY MCGRATH</h1>
            <h2 className='subtitle'>I build things for the web.</h2>
            <h4 className="subtitle">I'm a Colorado based programmer with a passion for crafting solid and scalable frontend products with great user experiences.  </h4>


            <Link className="portfoliobutton" to="/projects">See My Work</Link>
        </main>

    )
}

export default Homepage
