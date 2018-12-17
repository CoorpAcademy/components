import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10.293 17.707l-3-3A1 1 0 0 1 7 14V9h2v4.586l2.707 2.707-1.414 1.414z"
      fill="currentColor"
    />
    <path
      d="M17 17a6.982 6.982 0 0 1-1.594-.189C14.321 19.273 11.86 21 9 21c-3.86 0-7-3.14-7-7s3.14-7 7-7c.548 0 1.079.07 1.591.19a7.012 7.012 0 0 1 1.123-1.77A8.954 8.954 0 0 0 9 5c-4.962 0-9 4.037-9 9s4.038 9 9 9c3.918 0 7.251-2.521 8.484-6.024-.161.01-.321.024-.484.024z"
      fill="currentColor"
    />
    <path
      d="M17 0c1.667 6.666-2 8.75-2 8.75V5.367c-1.707.743-3 2.535-3 4.633 0 2.762 2.238 5 5 5s5-2.238 5-5c0-2.576 0-5-5-10z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
