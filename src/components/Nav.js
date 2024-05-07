import React from 'react';
import logo from '../images/Logo.jpg';

const Nav = () => {
    return (
        <nav>
            <a href='/'>
                <img src={logo} alt='logo'/>
            </a>
            <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Home'>About</a></li>
                <li><a href='#Home'>Order Online</a></li>
                <li><a href='#Home'>Book</a></li>
            </ul>
        </nav>
    )
}

export default Nav;