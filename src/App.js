// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <MainContent activeItem={activeItem} />
    </div>
  );
}

export default App;
