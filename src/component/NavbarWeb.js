import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "../menu/Contact";
import Login from "../menu/Login";

function NavbarWeb() {

    return (
        <div className="NavbarWeb">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
           
        
        <div className="Button">
            <form>
            <input className="search" type="text" placeholder="Cari..." required/>	
            <input className="button" type="button" value="Cari"/>
            </form>		
            <button><li><Link to="/login">Login</Link></li></button>
        </div>
        </div>
    )
}

export default NavbarWeb;