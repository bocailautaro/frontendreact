import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header/>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="Sobre LB" exact component={About}/>
          <Route path="Recursos" exact component={Resources}/>
          <Route path="Contacto" exact component={Contact}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;