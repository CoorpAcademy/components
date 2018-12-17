import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 13v-2h-2.454L16.73 5.064l1.551-1.939-1.562-1.249L15.02 4H7.98l-1.7-2.124-1.561 1.249L6.27 5.064 2.454 11H0v2h2.454l3.816 5.937-1.551 1.939 1.562 1.249L7.98 20h7.039l1.7 2.125 1.562-1.249-1.551-1.939L20.546 13H23zm-8.046 5H8.046l-3.857-6 3.857-6h6.908l3.857 6-3.857 6z" />
      <path d="M13 10c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-3 1a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
      <circle cx={13} cy={15} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
