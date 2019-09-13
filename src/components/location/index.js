import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.0821591093384!2d172.96703!3d-43.805386999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d33cb8a24e27bdb%3A0x5e512df4cad1d1dc!2sAkaroa%20Daily%20Shuttles!5e0!3m2!1sru!2sru!4v1568382391969!5m2!1sru!2sru"
        width="100%" 
        height="500" 
        frameBorder="0" 
        allowFullScreen></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
      
    </div>
  );
};

export default Location;