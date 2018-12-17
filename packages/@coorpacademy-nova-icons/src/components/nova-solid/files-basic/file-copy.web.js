import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1H9c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V5.586L16.414 1zM15 7V2l5 5h-5z" />
      <path d="M5 5H3v16c0 1.103.897 2 2 2h12v-2H5V5z" />
    </g>
  </svg>
);

export default SvgComponent;
