import React from "react";
import little_lemon_logo from "../images/little_lemon_logo.png";

const Nav = () => {
    return (
        <nav className="nav-container">
            <img src={little_lemon_logo} alt="Little Lemon Logo" />
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
