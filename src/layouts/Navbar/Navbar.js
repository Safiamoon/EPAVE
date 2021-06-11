import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './Navbar.css';
import logo from '../../images/logo.png'

export default class Navbar extends Component{
    render(){ 
      return (
        <>
        <div className="nav sticky-top" style={{backgroundColor: "#333", minHeight: "4.5rem"}}>
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title font-weight-bold pt-3" style={{color: "#F4BB44"}}>
              <img className='logo' alt='' src={logo}></img>    FLY DEUTSCH CARS
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div className="ml-auto nav-links">
            <a className="nav-item isActive">
              <Link className="nav-link text-light" smooth to="#">ACCUEIL</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link text-light" smooth to="#about">PRÉSENTATION</Link>
            </a>
            <a className="nav-item">
              <Link  className="nav-link text-light" smooth to="#about">FORMALITÉS</Link>
            </a>
          </div>
      </div>
      </>
      )
    }
}