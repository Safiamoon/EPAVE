import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../images/logo5.PNG'

export default class Navbar extends Component{
    render(){ 
      return (
        <div className="nav sticky-top" style={{backgroundColor: "white", minHeight: "4rem"}}>
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title font-weight-bold pt-1" style={{color: "#F4BB44"}}>
              <img className='logo' alt='' src={logo}></img> 
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div className="ml-auto nav-links pt-4">
            <a className="nav-item isActive">
              <Link className="nav-link font-weight-bold" style={{color: "#32CD32"}} smooth to="#home">ACCUEIL</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link font-weight-bold" style={{color: "#32CD32"}} smooth to="#about">PRÉSENTATION</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link font-weight-bold" style={{color: "#32CD32"}} smooth to="#how">COMMENT ÇA MARCHE</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link font-weight-bold" style={{color: "#32CD32"}} smooth to="#documents">DOCUMENTS À FOURNIR</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link font-weight-bold" style={{color: "#32CD32"}} smooth to="#contact">CONTACT</Link>
            </a>
          </div>
      </div>
      )
    }
}