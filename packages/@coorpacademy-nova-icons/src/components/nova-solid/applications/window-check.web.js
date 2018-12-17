import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM19 14c.342 0 .674.035 1 .09V5.002H0V16c0 1.103.896 2 2 2h11.349c.825-2.328 3.04-4 5.651-4zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.413L18 23.414l5.707-5.708z" />
    </g>
  </svg>
);

export default SvgComponent;
