import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M21 4H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7.131l-4.667 7h2.404L11 18.303V23h2v-4.697L16.131 23h2.404l-4.667-7H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 10H4V6h16v8zM10 1h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
