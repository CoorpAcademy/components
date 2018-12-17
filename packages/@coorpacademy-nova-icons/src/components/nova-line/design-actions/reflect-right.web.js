import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 12l-5-4v3H8v2h4v3zM20 11h2v2h-2zM20 8h2v2h-2zM20 5h2v2h-2zM14 2h2v2h-2zM17 2h2v2h-2zM20 2h2v2h-2zM20 14h2v2h-2zM20 17h2v2h-2zM20 20h2v2h-2zM17 20h2v2h-2zM14 20h2v2h-2z" />
      <path d="M11 20H4V4h7v3h2V2H2v20h11v-4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
