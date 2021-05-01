import React from 'react';
import { Route, Switch, } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () =>{
  return (
    <>
    <Navbar/>
    <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/About" component={About}/>
       <Route exact path="/Service" component={Service}/>
       <Route exact path="/Contact" component={Contact}/>
       
    </Switch>
    <Footer/>
    </>
  )
}

export default App;
