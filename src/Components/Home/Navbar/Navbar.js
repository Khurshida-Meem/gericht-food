import React from 'react';
import './Navbar.css';
import logo from '../../../assets/gericht.png'

const Navbar = () => {
    return (
        <nav className='container flex justify-between'>
            <div>
                <img src={logo} alt="Gericht" width='200px' height='58px' />
            </div>
            <div>
                <ul className="nav__menu flex">
                    <li className="nav__item">Home</li>
                    <li className="nav__item">Pages</li>
                    <li className="nav__item" > Contact Us</li >
        <li className="nav__item" > Blog</li >
            <li className="nav__item" > Landing</li >
                </ul >
            </div >
    <div className='flex'>
        <p style={{ marginRight: '3rem' }}>Log in/ Registration</p>
        <p>Book Table</p>
    </div>
        </nav >
    );
};

export default Navbar;
