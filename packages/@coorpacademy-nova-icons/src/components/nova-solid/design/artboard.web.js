import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M6 6h12v12H6zM16 1h2v3h-2zM6 1h2v3H6zM16 20h2v3h-2zM6 20h2v3H6zM20 6h3v2h-3zM20 16h3v2h-3zM1 6h3v2H1zM1 16h3v2H1z" />
    </g>
  </svg>
);

export default SvgComponent;
