import React from 'react';
import { Link } from 'react-scroll'
import "./Navigation.css"


function Navigation() {
    return (
        <div class="nav">
            <ul class="headerContainer">
                <Link activeClass="onClick"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    class="nav_text a"
                >
                    <span class="text">HOME</span>
                </Link>
                <Link activeClass="onClick"
                    to="skills"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={500}
                    class="nav_text a"
                >
                    <span class="text">SKILLS</span>
                </Link>
                <Link activeClass="onClick"
                    to="projects"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-80}
                    duration={500}
                    class="nav_text a"
                >
                    <span class="text">PROJECTS</span>
                </Link>
                <Link activeClass="onClick"
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    class="nav_text a"
                >
                    <span class="text">CONTACTS</span>
                </Link>
                {/* 
            <button onClick="" class="nav_text a">home</button>
            <button onClick="" class="nav_text a">projects</button>
            <button onClick="" class="nav_text a">home</button> */}
                {/* <Link to="/" target="_top" class="nav_text home">home</Link>
            <Link to="/projects" target="_top" class="nav_text projects" >projects</Link>
            <Link to="/contact" target="_top" class="nav_text ">contact</Link> */}
            </ul>
        </div >
    );
}

export default Navigation;