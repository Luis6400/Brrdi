import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Home from './pages/home';

import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;