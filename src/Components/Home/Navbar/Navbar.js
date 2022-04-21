import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../assets/gericht.png'
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {

    const [isExpand, setIsExpand] = useState(false);

    return (
        <nav className='container flex justify-between navigation'>
            <div>
                <img className='logo' src={logo} alt="Gericht" width='200px' height='58px' />
                <button className='menu-btn' onClick={() => {
                    setIsExpand(!isExpand);
                }}>
                    <RiMenu4Line />
                </button>
            </div>
            <div className={isExpand ? 'nav__menu expand' : 'nav__menu'}>
                <ul>
                    <li className="nav__item">Home</li>
                    <li className="nav__item">Pages</li>
                    <li className="nav__item" > Contact Us</li >
                    <li className="nav__item" > Blog</li >
                    <li className="nav__item" > Landing</li >
                    <li className={!isExpand ? 'margin-content nav__item' : "nav__item"}><p >Log in/ Registration</p></li>
                    <li className="nav__item"><p>Book Table</p></li>
                </ul >
            </div >
        </nav >
    );
};

export default Navbar;
