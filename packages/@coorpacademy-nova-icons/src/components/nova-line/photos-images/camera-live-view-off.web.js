import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.899 12.999H20v-2h-3.101A5.005 5.005 0 0 0 13 7.1V3.999h-2V7.1a5.005 5.005 0 0 0-3.899 3.899H4v2h3.101A5.005 5.005 0 0 0 11 16.898v3.101h2v-3.101a5.005 5.005 0 0 0 3.899-3.899zm-4.899 2a3 3 0 1 1 0-6 3 3 0 1 1 0 6zM20 19.999h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4zM20 1.999h-4v2h4v4h2v-4c0-1.103-.897-2-2-2zM4 3.999h4v-2H4c-1.103 0-2 .897-2 2v4h2v-4zM4 15.999H2v4c0 1.103.897 2 2 2h4v-2H4v-4z" />
    </g>
  </svg>
);

export default SvgComponent;
