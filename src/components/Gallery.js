import React from 'react';

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Leonardo da Vinci's Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <img 
            src="https://th.bing.com/th/id/OIP.tLGcmVhHK6v1q7lPV4EKYAHaEJ?rs=1&pid=ImgDetMain" 
            alt="The Last Supper" 
            style={{ width: '300px', height: 'auto' }}
          />
          <p>The Last Supper</p>
        </div>
        <div>
          <img 
            src="https://th.bing.com/th/id/OIP.63jlgwLZWF_8bVhC4S7bBwAAAA?rs=1&pid=ImgDetMain" 
            alt="Virgin of the Rocks" 
            style={{ width: '300px', height: 'auto' }}
          />
          <p>Virgin of the Rocks</p>
        </div>
        <div>
          <img 
            src="https://th.bing.com/th/id/OIP.4qI-319bJ7Lyl92tQZymqgHaH3?w=565&h=600&rs=1&pid=ImgDetMain" 
            alt="Ginevra de' Benci" 
            style={{ width: '300px', height: 'auto' }}
          />
          <p>Ginevra de' Benci</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
