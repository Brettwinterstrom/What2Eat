import React from 'react';
import "./Header.css"
import logo from '../images/_Logo (1).png';

function Header() {
    return (
        <div className="start_screen">
            <div className="start_logo">
                <img src={logo} />

            </div>
            <div className="button">LETS EAT!</div>
        </div>
    )
}

export default Header
