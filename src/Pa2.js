import React from 'react';
import { useLocation } from 'react-router-dom';

const Pa2 = () => {
  const location = useLocation();

  // Check if location.state exists before accessing its properties
  if (location.state && location.state.id) {
    return (
      <div className='body'>
        <h1>This {location.state.id} is a new page</h1>
      </div>
    );
  } else {
    return (
      <div className='body'>
        <h1>No ID found in state</h1>
      </div>
    );
  }
};

export default Pa2;
