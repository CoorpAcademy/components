import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 16l1.629-7.329A4.97 4.97 0 0 1 11 5c0-1.131.39-2.162 1.023-3H5c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-4.8L16 14l-5 2z" />
      <path d="M19 5a3 3 0 1 0-6 0c0 1.225.736 2.274 1.788 2.741L13 14l3-2 3 2-1.788-6.259A2.999 2.999 0 0 0 19 5z" />
    </g>
  </svg>
);

export default SvgComponent;
