import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 4a1 1 0 0 0-.975.775L18.051 9h-4.638A7.998 7.998 0 0 1 6 14c-.357 0-.706-.031-1.05-.077l1.08 4.32A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775L20.795 6H24V4h-4z" />
      <path d="M12 5.984c0-3.308-2.691-6-6-6s-6 2.692-6 6 2.691 6 6 6 6-2.692 6-6zm-7-4h2v3h2v2H5v-5z" />
    </g>
  </svg>
);

export default SvgComponent;
