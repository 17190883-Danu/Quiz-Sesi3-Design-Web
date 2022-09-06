import './App.css';
import HeaderWeb from './component/HeaderWeb';
import NavbarWeb from './component/NavbarWeb';
import ArticleWeb from './component/ArticleWeb';
import About from './menu/Contact';
import Login from './menu/Login';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from './menu/Contact';


function App() {
  
  return (
    <Router>
            <HeaderWeb/>
            <NavbarWeb/>
            <Routes>
      
                  <Route element={<ArticleWeb/>} path="/"></Route>
                  <Route element={<Contact/>} path="/contact"></Route>
                  <Route element={<Login/>} path="/login"></Route>

                  
          </Routes>  
    </Router>
  );
}

export default App;