import React from 'react'
import rethrift from '../imgs/rethrift.PNG'
import strangerThings from '../imgs/strangerThings.PNG'
import fitnessTracker from '../imgs/fitnessTracker.PNG'
import tictactoe from '../imgs/tictactoe.PNG'


const Projects = () => {
    return (
        <main className='marginTop'>
            <h1 className='projectHeader'>A selection of projects I've built</h1>

            <section className="project">
                <img className='projectImgR' src={rethrift} alt="rethrift homepage" />
                <div className='projectDetailsContainerR'>
                    <h1 className='featuredProjectR'>Featured Project</h1>
                    <h2 className='projectTitleR'>R(e)thrift</h2>
                    <p className='projectDetailsR'>An e-commerce web app that promotes sustainability by specializing in repurposing clothing.  A group programming project with Rafa Brown, Ricardo Martinez, and Brandon Lor</p>
                    <div className='projectTechnologiesR'>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Postgres</p>
                        <p>Heroku</p>
                    </div>
                    <div className='projectLinkContainerR'>
                        <a className='projectLinkR' target='_blank' rel="noreferrer noopener" href='https://github.com/2107-CSU/CoolCoders'><i class="fab fa-github"></i></a>
                        <a className='projectLinkR' target='_blank' rel="noreferrer noopener"  href='https://re-thrift.herokuapp.com/'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </section>







            
            <section className="project">
                <div className='projectDetailsContainerL'>
                    <h1 className='featuredProjectL'>Featured Project</h1>
                    <h2 className='projectTitleL'>Stranger's Things</h2>
                    <p className='projectDetailsL'>A Craigslist-lite application where users can buy and sell goods online.  Visitors are able to make accounts, create new postings, edit or delete previous posts, and message other users.</p>
                    <div className='projectTechnologiesL'>
                        <p>React</p>
                        <p>CSS</p>
                        <p>Netlify</p>
                    </div>
                    <div className='projectLinkContainerL'>
                        <a className='projectLinkL' target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/strangers-things-2'><i class="fab fa-github"></i></a>
                        <a className='projectLinkL' target='_blank' rel="noreferrer noopener"  href='https://jennystrangersthings.netlify.app'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <img className='projectImgL' src={strangerThings} alt="strangerThings homepage" />
            </section>
            <section className="project">
                <img className='projectImgR' src={fitnessTracker} alt="fitnessTracker homepage" />
                <div className='projectDetailsContainerR'>
                    <h1 className='featuredProjectR'>Featured Project</h1>
                    <h2 className='projectTitleR'>Fitness Tracker</h2>
                    <p className='projectDetailsR'>Built an express server, database adapters and an API using Test-Driven Development.  Also developed the front-end for this application, where users are able to create accounts and develop workout routines for themselves and to share with others.</p>
                    <div className='projectTechnologiesR'>
                        <p>React</p>
                        <p>Bootstrap</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Postgres</p>
                        <p>Netlify</p>
                        <p>Heroku</p>
                    </div>
                    <div className='projectLinkContainerR'>
                        <a className='projectLinkR' target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/UNIV_FitnessTrackr_Starter'><i class="fab fa-github"></i></a>
                        <a className='projectLinkR' target='_blank' rel="noreferrer noopener"  href='https://jenny-fitness-tracker.netlify.app/'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </section>




{/* 
            <section className="project">
                <div className='projectDetailsContainerL'>
                    <h1 className='featuredProjectL'>Featured Project</h1>
                    <h2 className='projectTitleL'>Tic Tac Toe</h2>
                    <p className='projectDetailsL'>Developed a tic-tac-toe game using vanilla JavaScrip, with the option to play single or dual player.</p>
                    <div className='projectTechnologiesL'>
                        <p>Vanilla JavaScript</p>
                        <p>CSS</p>
                        <p>Netlify</p>
                    </div>
                    <div className='projectLinkContainerL'>
                        <a className='projectLinkL' target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/tic-tac-toe'><i class="fab fa-github"></i></a>
                        <a className='projectLinkL' target='_blank' rel="noreferrer noopener"  href='https://jennystictactoe.netlify.app/'><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <img className='projectImgL' src={tictactoe} alt="strangerThings homepage" />
            </section> */}
        </main>
    )
}

export default Projects
