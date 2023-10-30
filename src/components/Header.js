import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-container">
            <section className="header-content">
                <div className="header-logo">
                    <h2>Little Lemon</h2>
                    <h3>Served with lemonade</h3>
                </div>
                <div className="header-description">
                    <p>
                        Focused on traditional recipes served with a modern twist of lemon.
                    </p>
                </div>
                <div className="header-button">
                    <Link to="/Booking">
                        <button aria-label="Reserve Table">Reserve Table</button>
                    </Link>
                </div>
            </section>
        </header>
    );
}

export default Header;
