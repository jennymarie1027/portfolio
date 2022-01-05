import React from 'react'
import Headshot from '../imgs/headshot2.gif'

const About = () => {
    return (
        <main className='marginTop aboutMeContainer'>
            <div class="aboutMeDetails">
                <h2 id="about">ABOUT ME</h2>
                <p>Hi there! I'm a recent graduate from CSU's web development bootcamp that specializes in frontend development.</p>
                <p>In my free time, I'm a dedicated cat mom that enjoys yoga, hiking, and riding bikes with
                    friends. I'm a big fan of coffee, cooking delicious, healthy food, and I love to travel whenever I can.</p>
            </div>
            <div class='aboutMeHeadshot'>
                <img id='headshot' src={Headshot} alt='JM Headshot' />
            </div>
        </main>
    )
}

export default About
