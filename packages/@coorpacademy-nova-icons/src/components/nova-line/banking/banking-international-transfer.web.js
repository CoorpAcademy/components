import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 12c0 5.515 4.486 10 10 10v-2a7.95 7.95 0 0 1-3-.589V16h3v-2H9v-4h3V8H9V4.59A7.93 7.93 0 0 1 12 4V2C6.486 2 2 6.486 2 12zm5 6.235A8.04 8.04 0 0 1 5.082 16H7v2.235zM7 14H4.264C4.098 13.36 4 12.692 4 12s.098-1.359.264-2H7v4zm0-8.235V8H5.082A8.04 8.04 0 0 1 7 5.765zM17 8h5V6h-3V4h-2v2c-1.654 0-3 1.347-3 3v1c0 1.654 1.346 3 3 3h2c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1h-5v2h3v2h2v-2c1.654 0 3-1.346 3-3v-1c0-1.653-1.346-3-3-3h-2c-.551 0-1-.449-1-1V9c0-.551.449-1 1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
