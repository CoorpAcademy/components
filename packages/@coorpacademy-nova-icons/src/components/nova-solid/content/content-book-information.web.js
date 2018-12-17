import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM6 20.001h4.262a8.045 8.045 0 0 1-.262-2 8 8 0 0 1 8-8v-9a1 1 0 0 0-1-1H6v20z" />
      <path d="M18 12c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
