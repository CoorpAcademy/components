import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M7.506 11L12 5.222 16.495 11h1.9L12.75 3.743V0h-1.5v3.743L5.605 11zM22 14v-2H2v2h1v5H2v2h20v-2h-1v-5h1zm-9 0h2v5h-2v-5zm-2 5H9v-5h2v5zm-6-5h2v5H5v-5zm14 5h-2v-5h2v5z" />
    </g>
  </svg>
);

export default SvgComponent;
