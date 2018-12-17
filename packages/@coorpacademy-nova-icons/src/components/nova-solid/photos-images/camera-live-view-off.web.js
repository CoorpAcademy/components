import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={2} />
      <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4c0-1.103-.896-2-2-2zM4 6.001c0-1.103.897-2 2-2h4v2H6v4H4v-4zM10 20H6c-1.103 0-2-.897-2-2v-4h2v4h4v2zm3-2h-2v-2.142A3.993 3.993 0 0 1 8.142 13H6v-2h2.142A3.995 3.995 0 0 1 11 8.143V6.001h2v2.142a3.995 3.995 0 0 1 2.858 2.858H18v2h-2.142A3.993 3.993 0 0 1 13 15.859V18zm7 0c0 1.103-.897 2-2 2h-4v-2h4v-4h2v4zm0-8h-2V6h-4V4h4c1.103 0 2 .897 2 2v4z" />
    </g>
  </svg>
);

export default SvgComponent;
