import React from 'react'
import Headshot from '../imgs/headshot2.gif'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <main className='marginTop aboutMeContainer'>
            <div class="aboutMeDetails">
                <h2 id="about">I'm a curiosity-driven Front-End Developer.</h2>
                <p></p>
                <p>I'm passionate about bringing both the technical and visual aspects of digital products to life.  User experience, beautiful pixels and writing clean accessible, human code matters to me.  I sweat the details.  And as a follower of John Maeda's Laws Of Simplicity, I agree that less is more</p>
                <p>I have a BA in International Affairs & Spanish Literature from the University of Colorado and a Certificate of Web Development from Colorado State University.</p>
                <p>I am happiest when I'm creating, learning, exploring, and thinking about how to make things better.  In my free time, I enjoy yoga, hiking, and riding bikes with friends. I'm a big fan of coffee, cooking delicious, healthy food, and I love to travel whenever I can.  Currently solving deceptively simple problems at AlgoExpert.com.  I am available for work, feel free to reach out.</p>

            </div>
            <div class='aboutMeHeadshot'>
                <img id='headshot' src={Headshot} alt='JM Headshot' />
            </div>
        </main>
    )
}

export default About
