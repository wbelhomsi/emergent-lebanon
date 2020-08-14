import React from 'react';
import GoogleMapReact from 'google-map-react';
import './google-map.component.css';
import config from '../../config';

const MarkerComponent = ({ text }) => <div className="marker-component">{text}</div>;

const GoogleMap = ({ markers }) => (
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
    >
      {
        markers.map((child, i) => (
          <MarkerComponent
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            lat={child.lat}
            lng={child.lng}
            text={child.text || 'Marker Test'}
          />
        ))
      }
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
