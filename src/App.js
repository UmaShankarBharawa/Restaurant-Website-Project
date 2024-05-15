import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Main />
        <Menu />
        <Footer/>
      </>
    </Router>
  );
}

export default App;
