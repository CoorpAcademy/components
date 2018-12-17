import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M5.324 14.235C4.697 14.615 3 15.843 3 18c0 2.106 1.602 3.379 2.983 3.82.527-.752 1.267-2.107 1.267-3.82 0-1.676-1.137-3.027-1.926-3.765zM10 13.18l-3.022.606c.868.98 1.772 2.425 1.772 4.214 0 1.662-.549 3.035-1.102 4H13v-3c0-2.205 1.795-4 4-4h2V7h-9v6.18z" />
      <path d="M15 19v2.877c2.166-.519 4-2.645 4-4.877h-2a2 2 0 0 0-2 2zM19 2h-9a2 2 0 0 0 0 4h9a2 2 0 0 0 0-4z" />
    </g>
  </svg>
);

export default SvgComponent;
