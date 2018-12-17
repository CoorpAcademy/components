import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2C6.487 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.588 8-8 8z" />
      <path d="M16.127 13.778l-2.146-.001a.538.538 0 0 0-.539.538l.001 1.047a5.08 5.08 0 0 1-4.802-4.804h1.045c.296 0 .537-.24.537-.537l-.001-2.148a.536.536 0 0 0-.536-.536l-2.147-.001A.541.541 0 0 0 7 7.874l.001 2.685h.016a6.705 6.705 0 0 0 6.427 6.427V17h2.683a.54.54 0 0 0 .538-.538l-.001-2.147a.538.538 0 0 0-.537-.537z" />
    </g>
  </svg>
);

export default SvgComponent;
