import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 11H2v11h13v-9H8z" />
      <path d="M18.414 2H7c-1.103 0-2 .898-2 2v5h3.382l1 2H17v11h3c1.103 0 2-.897 2-2V5.586L18.414 2zM17 7V3l4 4h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
