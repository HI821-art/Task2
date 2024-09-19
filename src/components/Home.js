import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Leonardo da Vinci's World</h1>
      <p>Learn more about the life and works of one of the greatest artists of all time!</p>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/biography" style={{ textDecoration: 'none', color: '#007bff' }}>
            Read Leonardo's Biography
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/famous-painting" style={{ textDecoration: 'none', color: '#007bff' }}>
            View the Famous Painting "Mona Lisa"
          </Link>
        </li>
        <li>
          <Link to="/gallery" style={{ textDecoration: 'none', color: '#007bff' }}>
            Explore the Gallery of Leonardo's Paintings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
