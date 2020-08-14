import React, { useState } from 'react';
import './map-marker.component.css';

const Pin = ({ markerStatus }) => {
  const color = markerStatus === 'active' ? 'red' : 'green';
  return <div className="pin" style={{ backgroundColor: color }} />;
};

const HoverContent = ({ title, text }) => (
  <div className="marker-content">
    <div className="marker-title">{title}</div>
    <div className="marker-text">{text}</div>
  </div>
);

const ClickContent = ({ setClickedChild }) => (
  <div className="gm-style-iw-a">
    <div className="gm-style-iw-t">
      <div className="gm-style-iw gm-style-iw-c marker-content">
        <div className="gm-style-iw-d">
          <div>
            <img
              src="images/regenerate_icon_waste_green.png"
              className="iconimg"
              alt="Missing Icon"
            />
            <hr />
            <h5>Injaz Industry Sarl</h5>
            <h6>
              Tire recycling
              <hr />
              Phone number: 05/600954
              <br />
              Email: undefined
              <br />
              Website: http://www.injazindustry.com
              <hr />
              Waste, Recycling, Rubber.
              <hr />
              Data source: Minister of Environment
            </h6>
          </div>
        </div>
        <button
          draggable="false"
          title="Close"
          aria-label="Close"
          type="button"
          className="close-button gm-ui-hover-effect"
          onClick={() => setClickedChild(-1)}
        >
          x
        </button>
      </div>
    </div>
  </div>
);

const MapMarker = ({
  title, text, clickedChild, $hover, setClickedChild,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      role="button"
      tabIndex="0"
      className="map-marker"
      onClick={() => setIsClicked(!isClicked)}
    >
      <Pin markerStatus="active" />
      {$hover && <HoverContent title={title} text={text} />}
      {clickedChild && <ClickContent setClickedChild={setClickedChild} />}
    </div>
  );
};

export default MapMarker;
