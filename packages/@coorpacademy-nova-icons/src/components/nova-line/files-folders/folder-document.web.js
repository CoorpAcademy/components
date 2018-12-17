import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.618 11H2v11h13v-9H8.618l-1-2zM13 20H4v-7h2.382l1 2H13v5z" />
      <path d="M18.414 2H7c-1.103 0-2 .898-2 2v5h2V4h10v3h3v13h-3v2h3c1.103 0 2-.897 2-2V5.586L18.414 2z" />
    </g>
  </svg>
);

export default SvgComponent;
