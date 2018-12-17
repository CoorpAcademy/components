import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 1h2v2h-2zM19.072 6.343l-1.414-1.415 1.414-1.414 1.414 1.414zM21 11h2v2h-2zM19.07 20.486l-1.414-1.415 1.415-1.414 1.414 1.415zM11 21h2v2h-2zM4.929 20.486L3.515 19.07l1.414-1.414 1.414 1.415zM1 11h2v2H1zM4.928 3.514l1.415 1.414-1.414 1.415-1.415-1.414zM11 8H9v5a1.001 1.001 0 0 1-2 0V8H5v5c0 1.654 1.346 3 3 3s3-1.346 3-3V8zM19 8h-2.057l-.957 3.902L15 8h-2l1.963 8h2.058L17 15.919z" />
    </g>
  </svg>
);

export default SvgComponent;
