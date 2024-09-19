import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Biography from './components/Biography';
import FamousPainting from './components/FamousPainting';
import Gallery from './components/Gallery';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px' }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link></li>
            <li><Link to="/biography" style={{ textDecoration: 'none', color: '#007bff' }}>Biography</Link></li>
            <li><Link to="/famous-painting" style={{ textDecoration: 'none', color: '#007bff' }}>Famous Painting</Link></li>
            <li><Link to="/gallery" style={{ textDecoration: 'none', color: '#007bff' }}>Gallery</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/famous-painting" element={<FamousPainting />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
