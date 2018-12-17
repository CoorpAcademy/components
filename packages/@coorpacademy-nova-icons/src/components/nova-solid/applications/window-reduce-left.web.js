import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.102 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 .002 1.998A1 1 0 0 1 8 4zM5 4a1 1 0 1 1 .002 1.998A1 1 0 0 1 5 4zM2 8.002V19c0 1.103.898 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zm12 8.001H9v3l-4-4 4-4v3h5v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
