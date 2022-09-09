import React from "react";
import "./Navbar.css"
// import NavBar from "/home/leilani/Book-review-frontend/book-review/book-review/src/components/NavBar/Navbar.css"

function NavBar() {
    return (
        <div className="navbar">
            <span className="nav-logo">Book Review</span>
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/reviews">Add Book</a>
                <a href="/restaurants">Reviews</a>
                <a href="/add">Add Reviews</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default NavBar