import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imgs/jm_logo.jpg'

const Nav = () => {
    return (
        <header className='navbar fixed-top navbar-expand-sm navbar-light'>
            <Link to='/' className='navbar-brand mb-0 h1'>
                <img id='logo' src={Logo} alt='JM LOGO' />
            </Link>
            <button 
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                className='navbar-toggler'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='toggle navigation'>
                <span className='navbar-inverse navbar-toggler-icon'></span>
            </button>
            <div className=' navbar-collapse' id='navbarNav'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/About' className='nav-link' >About</Link>
                <Link to='/Projects' className='nav-link'>Projects</Link>
                <Link to='/Contact' className='nav-link'>Contact</Link>
                {/* <Link to='/Resume' className='nav-link'>Resume</Link> */}
                

            </div>
        </header>
    )
}

export default Nav
