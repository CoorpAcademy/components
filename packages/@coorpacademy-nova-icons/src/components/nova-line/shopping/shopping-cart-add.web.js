import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H5a.998.998 0 0 0-.97 1.243l2 8A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4zM16.205 17H7.781l-1.5-6h11.308l-1.384 6z" />
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M5 8V5h3V3H5V0H3v3H0v2h3v3z" />
    </g>
  </svg>
);

export default SvgComponent;
