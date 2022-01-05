import React from 'react'
import Headshot from '../imgs/headshot2.gif'
import {Link, Routes} from 'react-router-dom'

const About = () => {
    return (
        <main className='marginTop grandpa'>
            <div className='aboutMeContainer'>
                <div class="aboutMeDetails">
                    <h2 id="about">I'm a curiosity-driven Front-End Developer</h2>
                    <p>that is passionate about bringing both the technical and visual aspects of digital products to life.  User experience, beautiful pixels and writing clean accessible, human code matters to me.  I sweat the details.  And as a follower of John Maeda's Laws Of Simplicity, I agree that less is more</p>
                    <p>I have a BA in International Affairs & Spanish Literature from the University of Colorado and a Certificate of Web Development from Colorado State University.</p>
                    <p>I am happiest when I'm creating, learning, exploring, and thinking about how to make things better.  In my free time, I enjoy yoga, hiking, and riding bikes with friends. I'm a big fan of coffee, cooking delicious, healthy food, and I love to travel whenever I can.  I am available for work, feel free to reach out.</p>
                    <Link to='/contact' className='getInTouch'>Get In Touch!</Link>
                </div>
                <div class='aboutMeHeadshot'>
                    <img id='headshot' src={Headshot} alt='JM Headshot' />
                </div>
            </div>
            <hr className='aboutMeDivider'></hr>
            <div>
                <h3>Skills & Tools</h3>
                <h1 className='skillsTitle'>My Toolbox & Things I Can Do</h1>
                <p>The skills, tools and technologies I use to bring your products to life:</p>
                
                <div className='skillsContainer'>
                    <div className='singleSkill'>
                        <i class="fab fa-html5"></i>
                        <p>HTML5</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-css3-alt"></i>
                        <p>CSS3</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-js-square"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-react"></i>
                        <p>React</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-git-alt"></i>
                        <p>Git</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-github-square"></i>
                        <p>Github</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-cogs"></i>
                        <p>RESTful APIs</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-terminal"></i>
                        <p>Command Line</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-laptop-code"></i>
                        <p>VS Code</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-mobile"></i>
                        <p>Responsive Websites</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-universal-access"></i>
                        <p>Web Accessibility</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fab fa-node-js"></i>
                        <p>Node.js</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-server"></i>
                        <p>Express</p>
                    </div>
                    <div className='singleSkill'>
                        <i class="fas fa-database"></i>
                        <p>PostgreSQL</p>
                    </div>
                </div>
                <h2 className='skillsTitle'>Currently Working On:</h2>
                <p>Improving my skills and understanding of vanilla JavaScript and React.  Also, having fun with the #100DaysOfCode building and animating things via CSS.</p>
            </div>
        </main>
    )
}

export default About
