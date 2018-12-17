import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H5a1.005 1.005 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM16.205 17H7.781l-1.5-6h11.308l-1.384 6z" />
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M6.293 7.707l1.414-1.414L5.414 4l2.293-2.293L6.293.293 4 2.586 1.707.293.293 1.707 2.586 4 .293 6.293l1.414 1.414L4 5.414z" />
    </g>
  </svg>
);

export default SvgComponent;
