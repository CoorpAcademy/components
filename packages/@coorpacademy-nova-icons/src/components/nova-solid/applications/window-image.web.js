import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3H4c-1.102 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM2 19c0 1.103.898 2 2 2h16c1.104 0 2-.897 2-2V8.002H2V19zm6-9a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 10zm1 5l2 2 3-4 4 6H6l3-4z" />
    </g>
  </svg>
);

export default SvgComponent;
