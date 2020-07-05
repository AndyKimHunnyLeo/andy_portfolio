import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/andy_portfolio/" exact component={Home} />
        <Route path="/andy_portfolio/projects" component={Projects} />
        <Route path="/andy_portfolio/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;