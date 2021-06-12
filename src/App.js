import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./layouts/Footer/Footer";
import About from './components/About/About';


function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar />
    <Home />
    <About />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
