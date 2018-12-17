import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 14h-4V7a1 1 0 0 0-1-1h-1.101A5.006 5.006 0 0 0 12 0a5.006 5.006 0 0 0-4.898 6H6a1 1 0 0 0-1 1v7H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM12 2c1.654 0 3 1.347 3 3 0 1.654-1.346 3-3 3S9 6.654 9 5c0-1.653 1.346-3 3-3zM2 19h2v-2H2v-1h3v6H2v-3zM7 8h1.025c.914 1.208 2.348 2 3.975 2s3.061-.792 3.975-2H17v14h-2v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4H7V8zm4 14v-3h2v3h-2zm11-5h-2v2h2v3h-3v-6h3v1z" />
      <path d="M8 14h3v2H8zM13 14h3v2h-3zM8 11h3v2H8zM13 11h3v2h-3zM12.293 6.708l1.414-1.414L13 4.586V3h-2v2c0 .265.105.52.293.708l1 1z" />
    </g>
  </svg>
);

export default SvgComponent;
