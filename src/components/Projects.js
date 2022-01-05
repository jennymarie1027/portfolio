import React from 'react'

const Projects = () => {
    return (
        <main className='marginTop'>
            <h1 className='projectHeader'>A selection of stuff I've built</h1>
                
            <section className="project">
                <h2>E-Commerce Website</h2>
                <p>Built an e-commerce website where a user can browse and purchase items with or without an account.  The online store has a complete checkout experience, and user based priviledges so only admin level users are able to manage products.</p>
                <div>
                    <a target='_blank' rel="noreferrer noopener" href='https://github.com/2107-CSU/CoolCoders'>Learn More</a>
                    <a target='_blank' rel="noreferrer noopener"  href='https://jennystrangersthings.netlify.app'>See it online</a>
                </div>
                {/* <img src={faceDetect} alt="censorsed face" /> */}
            </section>
            <section className="project">
                <h2>Stranger's Things</h2>
                <p>A Craigslist-lite application where users can buy and sell goods online.  Visitors are able to make accounts, create new postings, edit or delete previous posts, and message other users.</p>
                <div>
                    <a target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/strangers-things-2'>Learn More</a>
                    <a target='_blank' rel="noreferrer noopener"  href='https://jennystrangersthings.netlify.app'>See it online</a>
                </div>
                {/* <img src={faceDetect} alt="censorsed face" /> */}
            </section>
            <section className="project">
                <h2>Fitness Tracker</h2>
                <p>Built an express server, database adapters and an API using Test-Driven Development.  Also developed the front-end for this application, where users are able to create accounts and develop workout routines for themselves and to share with others.</p>
                <a target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/UNIV_FitnessTrackr_Starter'>Learn More</a>
                <a target='_blank' rel="noreferrer noopener"  href='https://jenny-fitness-tracker.netlify.app/'>See it online</a>
                {/* <img src={milk} alt="candystore logo" /> */}
                </section>
            <section className="project">
                <h2>Tic Tac Toe</h2>
                <p>Developed a tic-tac-toe game using vanilla JavaScrip, with the option to play single or dual player.</p>
                <a target='_blank' rel="noreferrer noopener" href='https://github.com/jennymarie1027/tic-tac-toe'>Learn More</a>
                <a target='_blank' rel="noreferrer noopener"  href='https://jennystictactoe.netlify.app/'>See it online</a>
                <div>
                {/* <img src={dad} alt="dad joke" /> */}
                </div>
            </section> 
        </main>
    )
}

export default Projects
