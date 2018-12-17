import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={13} cy={12} r={2.5} />
      <path d="M20 2H4c-1.102 0-2 .897-2 2v16c0 1.104.898 2 2 2v1h2v-1h12v1h2v-1a2 2 0 0 0 2-2V4c0-1.103-.896-2-2-2zm-1 17H6v-3H4v-2h2v-4H4V8h2V5h13v14z" />
    </g>
  </svg>
);

export default SvgComponent;
