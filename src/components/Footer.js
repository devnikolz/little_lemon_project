import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={small_logo} alt="Logo" />
            </div>
            <div className="footer-section">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-heading">Contact</h3>
                <ul className="footer-list">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3 className="footer-heading">Connect with Us</h3>
                <ul className="footer-list">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
