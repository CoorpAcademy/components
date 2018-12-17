import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <g fill="currentColor">
      <path d="M6.721 16H17.28A7.973 7.973 0 0 0 20 10c0-4.418-3.581-8-8-8s-8 3.582-8 8a7.97 7.97 0 0 0 2.721 6zM12 9a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 9a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zM19.832 20.445l-2-3A1.001 1.001 0 0 0 17 17H7a1 1 0 0 0-.832.445l-2 3A.998.998 0 0 0 5 22h14a1.002 1.002 0 0 0 .832-1.555z" />
    </g>
  </svg>
);

export default SvgComponent;
