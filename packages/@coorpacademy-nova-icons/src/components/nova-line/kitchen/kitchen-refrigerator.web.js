import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M17 2H7c-1.104 0-2 .897-2 2v15c0 .737.405 1.375 1 1.723V22h2v-1h8v1h2v-1.277c.595-.348 1-.986 1-1.723V4c0-1.103-.896-2-2-2zm0 2v5H7V4h10zm0 15H7v-8h10v8z" />
      <path d="M8 5h2v3H8zM8 12h2v4H8z" />
    </g>
  </svg>
);

export default SvgComponent;
