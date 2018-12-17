import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.998 14a7.999 7.999 0 0 1-7.997-7.955C4.953 6.498.998 10.341.998 15c0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.523-.06-1.031-.156-1.53a7.944 7.944 0 0 1-2.844.53z" />
      <path d="M17.998-.001c-3.308 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2V6h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </g>
  </svg>
);

export default SvgComponent;
