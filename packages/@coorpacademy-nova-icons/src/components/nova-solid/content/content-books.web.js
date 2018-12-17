import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2v20h6V2H9zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 12 19zm1-3h-2V5h2v11zM2 2v20h6V2H2zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 5 19zm1-3H4V5h2v11zM16 2v20h6V2h-6zm3 17a1.001 1.001 0 1 1 .002-1.998A1.001 1.001 0 0 1 19 19zm1-3h-2V5h2v11z" />
    </g>
  </svg>
);

export default SvgComponent;
