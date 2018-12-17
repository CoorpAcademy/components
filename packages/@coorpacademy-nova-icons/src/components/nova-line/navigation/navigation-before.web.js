import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 1.001c-6.065 0-11 4.935-11 11 0 6.066 4.935 11 11 11s11-4.934 11-11c0-6.065-4.935-11-11-11zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
      <path d="M14 9.001H9.414l2-2L10 5.587l-4.414 4.414L10 14.416l1.414-1.414-2-2H14c1.104 0 2 .898 2 2 0 1.103-.896 2-2 2h-1v2h1c2.205 0 4-1.794 4-4s-1.795-4.001-4-4.001z" />
    </g>
  </svg>
);

export default SvgComponent;
