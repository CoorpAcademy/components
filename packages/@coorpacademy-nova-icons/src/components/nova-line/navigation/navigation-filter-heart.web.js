import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path d="M18 22.001H3a1 1 0 0 1-1-1v-15h2v14h14v2z" fill="currentColor" />
    <path
      d="M21 18.001H7a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-13-2h12v-12H8v12z"
      fill="currentColor"
    />
    <path
      d="M16 6.001c-1.105 0-2 1-2 2 0-1-.896-2-2-2a2 2 0 0 0-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
