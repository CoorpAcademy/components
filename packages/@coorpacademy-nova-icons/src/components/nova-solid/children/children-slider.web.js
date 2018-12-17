import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M18.998 1.998h-5c-1.654 0-3 1.346-3 3v17h2v-7h7v7h2v-17c0-1.654-1.346-3-3-3zm-5 4h5v2h-5v-2zM3.998 19.998h-2v2h2c1.447 0 3.926-2.184 6-4.316V14.75c-2.648 2.906-5.232 5.193-6 5.248z" />
    </g>
  </svg>
);

export default SvgComponent;
