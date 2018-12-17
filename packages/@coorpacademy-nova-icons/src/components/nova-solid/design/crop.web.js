import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9 15v-4H6v5a2 2 0 0 0 2 2h14v-3H9zM6 1h3v3H6z" />
      <path d="M15 13h3V8a2 2 0 0 0-2-2H2v3h13v4zM15 20h3v3h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
