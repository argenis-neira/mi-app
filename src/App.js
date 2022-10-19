import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import About from './pages/miniform';
import Home from './pages/testing';
import Form1 from './pages/form1';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='v1/form1' element={<Form1 />} />
      </Routes>
    </Router>
  );
}

export default App;