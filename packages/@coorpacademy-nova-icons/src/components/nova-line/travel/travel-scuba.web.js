import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 16c0 .551-.449 1-1 1h-2c-.551 0-1-.449-1-1V7c0-1.654-1.346-3-3-3H8C6.346 4 5 5.346 5 7v1H4c-1.103 0-2 .896-2 2v11c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V10c0-1.104-.897-2-2-2H7V7c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v9c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-6h-2v6zM8 10l.001 11H4V10h4z" />
      <path d="M21 4h-4a2 2 0 0 0 0 4h1V7a1 1 0 1 1 2 0v1h1a2 2 0 0 0 0-4z" />
    </g>
  </svg>
);

export default SvgComponent;
