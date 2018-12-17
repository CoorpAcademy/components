import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zm13 11.001l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3z" />
    </g>
  </svg>
);

export default SvgComponent;
