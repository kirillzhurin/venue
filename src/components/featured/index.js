import React from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
      <Carrousel />
      <div className="place_name">
        <div className="wrapper">
          New Zealand
        </div>
      </div>
    </div>
  );
};

export default Featured;