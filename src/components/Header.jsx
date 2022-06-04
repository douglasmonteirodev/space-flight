import React from "react";
import "./Header.css";
import logo from "./assets/astronauta.png";

const Header = () => {
    return (
        <header>
            <div className='header--image'>
                <img src={logo} alt='logo' />
            </div>
            <h1>Space Flight News</h1>
        </header>
    );
};

export default Header;
