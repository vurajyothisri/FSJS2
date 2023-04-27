import React from "react"
import './App.css'
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <nav className="nav_container">
            <Link to="/">
            <li className="items">Home</li>
            </Link>
            <Link to='/about'>
                <li className="items">About us</li>
            </Link>
            <Link to="./contact">
                <li className="items">Contact Us</li>
            </Link>
        </nav>
        </>
    );
};
export default Navbar