import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 20.001H4v-1h8v-2H4v-10h12v1h2v-4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8v-2zm-8-16h12v1H4v-1z" />
      <path d="M20 10.001h-4c-1.103 0-2 .896-2 2v8c0 1.104.897 2 2 2h4c1.103 0 2-.896 2-2v-8c0-1.104-.897-2-2-2zm0 2l.001 5H16v-5h4zm-4 8v-1h4.001v1H16z" />
    </g>
  </svg>
);

export default SvgComponent;
