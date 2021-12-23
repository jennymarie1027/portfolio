import React from 'react'
import faceDetect from '../imgs/facedetect.png'
import milk from '../imgs/milk.png'
import dad from '../imgs/dadjoke.png'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <main className='marginTop'>
            <section id="projectHeader">
                <h1>PORTFOLIO</h1>
                <p>Below you can see some projects I've been working on lately.</p>
            </section>
            <section className="project">
                <h2>Face Censor</h2>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel officiis dicta iure, reiciendis fuga
                    commodi
                    obcaecati debitis dolore exercitationem veritatis, maxime a inventore quibusdam eligendi aperiam
                    sint.
                    Quis,
                    reiciendis eveniet.</p>
                <div>
                    <a href='http://wwww.github.com'>Learn More</a>
                    <a href='http://wwww.github.com'>See it online</a>
                </div>
                <img src={faceDetect} alt="censorsed face" />
            </section>
            <section class="project">
                <h2>Candy Museum Site</h2>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel officiis dicta iure, reiciendis fuga
                    commodi
                    obcaecati debitis dolore exercitationem veritatis, maxime a inventore quibusdam eligendi aperiam
                    sint.
                    Quis,
                    reiciendis eveniet.</p>
                <a href='http://wwww.github.com'>Learn More</a>
                <a href='http://wwww.github.com'>See it online</a>
                <img src={milk} alt="candystore logo" />
                </section>
            <section class="project">
                <h2>Dad Joke Generator</h2>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel officiis dicta iure, reiciendis fuga
                    commodi
                    obcaecati debitis dolore exercitationem veritatis, maxime a inventore quibusdam eligendi aperiam sint.
                    Quis,
                    reiciendis eveniet.</p>
                <a href='http://wwww.github.com'>Learn More</a>
                <a href='http://wwww.github.com'>See it online</a>
                <div>
                <img src={dad} alt="dad joke" />
                </div>
            </section> 
        </main>
    )
}

export default Projects
