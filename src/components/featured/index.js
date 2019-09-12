import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
      <Carrousel />
      <div className="place_name">
        <div className="wrapper">
          New Zealand
        </div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;