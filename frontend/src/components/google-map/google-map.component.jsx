import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './google-map.component.css';
import config from '../../config';
import MapMarker from '../map-marker/map-marker.component';

const GoogleMap = ({ markers }) => {
  const [clickedChild, setClickedChild] = useState(-1);
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: config.GOOGLE_API_KEY,
        }}
        defaultCenter={{
          lat: 33.89,
          lng: 35.5,
        }}
        defaultZoom={10}
        onChildClick={(id) => { setClickedChild(id); }}
        hoverDistance={15}
      >
        {
          markers.map((child) => (
            <MapMarker
              key={child.id}
              lat={child.lat}
              lng={child.lng}
              title={child.title || 'Marker Title'}
              text={child.text || 'Marker Text'}
              clickedChild={child.id === parseInt(clickedChild, 10)}
              setClickedChild={setClickedChild}
            />
          ))
        }
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
