import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imgs/jm_logo.jpg'

// https://anniebombanie.com/#work

const Nav = () => {
    return (
        // <nav className='navbar fixed-top navbar-expand-sm navbar-light'>
        <nav className='navbar navbar-expand-md fixed-top'>
            <Link to='/' className='navbar-brand mb-0 h1'>
                <img className='d-inline-block align-top' id='logo' src={Logo} alt='JM LOGO' />
            </Link>
            <button 
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='toggle navigation'>
                <i class="fas fa-bars"></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item '><Link to='/' className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to='/About' className='nav-link' >About</Link></li>
                    <li className='nav-item'><Link to='/Projects' className='nav-link'>Projects</Link></li>
                    <li className='nav-item'><Link to='/Contact' className='nav-link'>Contact</Link></li>
                    {/* <li className='nav-item'><Link to='/Resume' className='nav-link'>Resume</Link></li> */}
                </ul>
            </div>


        </nav>
    )
}

export default Nav
