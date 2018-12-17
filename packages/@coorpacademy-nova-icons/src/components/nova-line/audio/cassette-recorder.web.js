import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 19H7v-4H5v4c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h-2v4zM18 4c-2.757 0-5 2.243-5 5 0 .712.154 1.387.424 2h-2.848c.27-.613.424-1.288.424-2 0-2.757-2.243-5-5-5S1 6.243 1 9s2.243 5 5 5c1.13 0 2.162-.39 3-1.025V13h6v-.025A4.947 4.947 0 0 0 18 14c2.757 0 5-2.243 5-5s-2.243-5-5-5zM6 12c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm12 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      <circle cx={18} cy={9} r={2} />
      <circle cx={6} cy={9} r={2} />
      <path d="M9 15h2v2H9zM13 15h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
