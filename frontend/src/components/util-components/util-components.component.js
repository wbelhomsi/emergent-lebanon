import React from 'react';
import './util-components.component.css';

export const CircleComponent = ({ text }) => {
  return (
    <button className="circle-button" role="menuitem" tabindex="0">
      <div className="circle-outer" aria-disabled="true" role="button" tabindex="-1">
        <span className="cirlce-inner" role="link" tabindex="-1">
          {text}
        </span>
      </div>
    </button>
  )
}
