import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H14v2h3.589l-1.384 6H7.781l-.5-2H5.22l.811 3.243c.111.445.51.757.969.757h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4z" />
      <path d="M6 13.02l.196-.039C8.204 12.579 12 10.813 12 7V0H0v7c0 3.813 3.797 5.579 5.804 5.98l.196.04zM2 7V2h8v5c0 2.763-3.153 3.756-3.998 3.973C5.176 10.757 2 9.749 2 7z" />
      <path d="M7 9V7h2V5H7V3H5v2H3v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
