import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import './App.css';
import About from './pages/About.jsx';

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/help" element={<Help />} /> */}
        </Routes>
      </Router>

      
    </>
  )
}

export default App
