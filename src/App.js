import React, {Component} from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";

import './App.css';

import NavBar from './coponemts/NavBar'
import Contact from './coponemts/Contact'
import Hobby from './coponemts/Hobby'
import AboutMe from './coponemts/AboutMe'
import Projects from './coponemts/Projects'
import Landing from './coponemts/Landing';




class  App extends Component {

  render(){
    return (
      <div className="container-fluid">

      <NavBar/>

      <Landing
        title="Landing"
        dark={true}
        id="Landing-Section"
        />
      <AboutMe
        title="AboutMe"
        dark={true}
        id="AboutMe-Section"
        />

      <Projects
        title="Projects"
        dark={true}
        id="Projects-Section"
        />

      <Hobby
        title="Hobby"
        dark={true}
        id="Hobby-Section"
        />
      <Contact
        title="Contact"
        dark={true}
        id="Contact-Section"
        />

        <a href='#'id='toTop' style={{display:'block',}}> 
        <span id='toTopHover'style={{opacity:'0'}}> </span>
            To Top
          </a>
      </div>
     
      
    );
  }
 
}

export default App;
