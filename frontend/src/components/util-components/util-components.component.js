import React from 'react';
import './util-components.component.css';

export const CircleComponent = ({ title, coordinatedByText, selected, onClick }) => {
  return (
    <button className="circle-button" role="menuitem" tabindex="0" onClick={onClick}>
      <div className="circle-outer" aria-disabled="true" role="button" tabindex="-1">
        <span className={`cirlce-inner ${selected ? "circle-border" : ""}`} role="link" tabindex="-1">
          <p>{title}</p>
          <p className="coordinatedby">coordinated by</p>
          <p className="coordinatedby_text">{coordinatedByText}</p>
        </span>
      </div>
    </button>
  )
}
