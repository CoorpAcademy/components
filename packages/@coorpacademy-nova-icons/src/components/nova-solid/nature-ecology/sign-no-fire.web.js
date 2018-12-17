import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.743 6.43C15.71 4.955 14.211 3.211 12 1c2.334 9.332-3 11.25-3 11.25V7.514C6.811 8.553 5 11.064 5 14c0 1.205.305 2.34.842 3.33l10.901-10.9zM23.536 5.293l-1.414-1.414L3.708 22.293l1.414 1.413 3.548-3.547A7 7 0 0 0 19 14c0-1.338-.002-2.509-.359-3.811l4.895-4.896z" />
    </g>
  </svg>
);

export default SvgComponent;
