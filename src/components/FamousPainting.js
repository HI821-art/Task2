import React from 'react';

const FamousPainting = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mona Lisa</h1>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/600px-Mona_Lisa.jpg" 
        alt="Mona Lisa" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <p>
        The "Mona Lisa" is a half-length portrait painting by Leonardo da Vinci, 
        considered an archetypal masterpiece of the Italian Renaissance. It has been described as 
        "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world."
      </p>
      <p>
        The painting's subject is widely believed to be Lisa Gherardini, the wife of a wealthy Florentine merchant. 
        It is renowned for the subject's enigmatic expression, the delicate modeling of forms, and atmospheric illusionism.
      </p>
    </div>
  );
};

export default FamousPainting;
