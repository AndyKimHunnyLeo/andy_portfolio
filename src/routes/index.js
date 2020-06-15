import React from 'react'
// import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Home';

import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer'
import Navigation from '../components/Navigation';
function index() {
    return (
        <div class="app">
            <Navigation />
            <Home />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default index;