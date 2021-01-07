import React from 'react';
//import Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer  from './Footer.jsx'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Error from './Error';
import NavBar from './NavBar';
import {Route,Router,Switch} from "react-router-dom";
import AboutMe from "./AboutMe";
import Skill from './Skill';

const App = () =>{
    return (
        <React.Fragment>
       <NavBar/> 
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/About" component={About} />
        <Route component={Error}/>

       </Switch>
       <AboutMe/>
       <Projects/>
       <Skill/>
      <Footer/>
        </React.Fragment>
       
    )
}
export default App;