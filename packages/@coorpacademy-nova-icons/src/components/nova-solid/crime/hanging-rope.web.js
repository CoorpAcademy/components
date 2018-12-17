import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M13.46 11.954l2.247-2.248-1.414-1.413C10.211 12.375 7 14.847 7 18c0 4 3.504 4 5 4s5 0 5-4c0-2.387-2.255-4.84-3.54-6.046zM12 20c-2.356 0-3-.43-3-2 0-1.533 1.831-3.572 3-4.668 1.169 1.096 3 3.136 3 4.668 0 1.57-.644 2-3 2zM9.707 11.707l6-6-1.414-1.414L13 5.586V2h-2v5.586l-2.707 2.707z" />
    </g>
  </svg>
);

export default SvgComponent;
