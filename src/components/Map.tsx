"use client";

import React from 'react';

interface MapProps {
  apiKey?: string;
}

const Map: React.FC<MapProps> = ({ apiKey }) => {
  // The address we want to show on the map
  const address = "Office 61, Citi Tower Plot-55, Sector-15, C.B.D, Belapur, Navi Mumbai, 400614";
  
  // Coordinates for the location (approximate for Navi Mumbai)
  // You can replace these with the exact coordinates if known
  const latitude = 19.0176;
  const longitude = 73.0156;
  
  // Create the map content based on whether we have an API key
  const renderMap = () => {
    if (apiKey) {
      const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}&zoom=16`;
      
      return (
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          aria-label="Company Location Map"
        ></iframe>
      );
    }
    
    // Fallback if no API key is provided
    const fallbackUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=16&output=embed`;
    
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={fallbackUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        aria-label="Company Location Map"
      ></iframe>
    );
  };
  
  return (
    <div className="w-full h-[500px] -mt-2">
      {renderMap()}
    </div>
  );
};

export default Map; 