import React from 'react';
import { Link } from 'react-router-dom'
import "./Navigation.css"


function Navigation() {
    return (
        <div >
            <ul className="nav">
                <li className="headerContainer">
                    <Link
                        to="/andy_portfolio/"
                        // spy={true}
                        // smooth={true}
                        // hashSpy={true}
                        // offset={0}
                        // duration={500}
                        className="nav_text a"
                    >
                        <span className="text">HOME</span>
                    </Link>

                    <Link
                        to="/andy_portfolio/projects"
                        // spy={true}
                        // smooth={true}
                        // hashSpy={true}
                        // offset={-80}
                        // duration={500}
                        className="nav_text a"
                    >
                        <span className="text">PROJECTS</span>
                    </Link>
                    <Link
                        to="/andy_portfolio/contact"
                        // spy={true}
                        // smooth={true}
                        // hashSpy={true}
                        // offset={0}
                        // duration={500}
                        className="nav_text a"
                    >
                        <span className="text">CONTACTS</span>
                    </Link>
                    {/* 
            <button onClick="" class="nav_text a">home</button>
            <button onClick="" class="nav_text a">projects</button>
        <button onClick="" class="nav_text a">home</button> */}
                    {/* <Link to="/" target="_top" class="nav_text home">home</Link>
            <Link to="/projects" target="_top" class="nav_text projects" >projects</Link>
        <Link to="/contact" target="_top" class="nav_text ">contact</Link> */}
                </li>
            </ul>
        </div >
    );
}

export default Navigation;