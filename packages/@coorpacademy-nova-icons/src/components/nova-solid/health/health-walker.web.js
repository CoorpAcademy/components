import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <circle cx={17} cy={19} r={3} />
      <path d="M4 18l-1 4h4l-1-4zM19 2h-4a1 1 0 0 0-1 1h-2a.983.983 0 0 0-.275.039C6.471 4.54 4.789 12.174 4.252 17h2.012c.15-1.269.381-2.644.705-4h5.451l1.793 3.138a3.967 3.967 0 0 1 1.742-.981l-2.087-3.652A.998.998 0 0 0 13 11H7.533c.935-2.844 2.389-5.29 4.614-6H14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
