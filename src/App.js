import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import About from './pages/miniform';
import Home from './pages/testing';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;