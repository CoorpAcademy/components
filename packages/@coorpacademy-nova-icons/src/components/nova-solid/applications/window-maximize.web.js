import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 20.006H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM22 .003H6c-1.103 0-2 .896-2 2v2.002h20V2.003a2 2 0 0 0-2-2zm-15 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM4 16.003c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V5.005H4v10.998zm9-6.997h5v5l-1.793-1.793-4.5 4.5-1.414-1.414 4.5-4.5L13 9.006z" />
    </g>
  </svg>
);

export default SvgComponent;
