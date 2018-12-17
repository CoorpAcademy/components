import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 11a1 1 0 0 0 .327-1.943l-18-6.156a.999.999 0 0 0-1.184 1.458l3.693 6.155a1 1 0 0 0 .857.486H21zM6.693 13c-.352 0-.677.186-.857.484l-3.694 6.157a1 1 0 0 0 1.186 1.458l18-6.154A1.001 1.001 0 0 0 21 13H6.693z" />
    </g>
  </svg>
);

export default SvgComponent;
