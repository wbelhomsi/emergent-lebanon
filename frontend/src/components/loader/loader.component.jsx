import React, { useState, useEffect } from 'react';
import './loader.component.css';
import { Spinner } from 'spin.js';
import { assign } from 'lodash';
import { v4 as uuidV4 } from 'uuid';

const opts = {
  lines: 10, // The number of lines to draw
  length: 0, // The length of each line
  width: 10, // The line thickness
  radius: 40, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#000000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 0.9, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute',
};

const Loader = ({
  marginTop = 15, display = 'block', lineWidth = 10, lineLength = 10, size = 100, lineCount = 10,
}) => {
  window.Spinner = Spinner;
  const [spinnerId] = useState(uuidV4());
  useEffect(() => {
    let spinner;
    setTimeout(() => {
      const loader = document.getElementById(spinnerId);
      spinner = new Spinner(assign({}, opts, {
        lines: lineCount, width: lineWidth, length: lineLength, radius: size / 2 - lineWidth - lineLength,
      })).spin(loader);
    }, 10);
    return () => {
      // eslint-disable-next-line no-unused-expressions
      spinner && spinner.stop();
    };
  });
  return (
    <div
      style={{
        margin: 'auto', marginTop: `${marginTop} px`, width: `${size} px`, height: `${size} px`, position: 'relative', display,
      }}
      id={spinnerId}
    />
  );
};

export default Loader;
