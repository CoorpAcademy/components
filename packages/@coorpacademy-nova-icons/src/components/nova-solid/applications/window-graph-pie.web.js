import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zm6 10.001a3 3 0 0 1 0-6v3h3a3 3 0 0 1-3 3zm1-4v-3c1.656 0 3 1.344 3 3H9zm10 2h-4v-2h4v2zm0-3h-3v-2h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
