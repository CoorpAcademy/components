import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 12c0-1 1-1 1-1h8.736A6.956 6.956 0 0 0 20 7c0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h4v-2z" />
      <path d="M23 15h-5.586l-1.707-1.707A1.002 1.002 0 0 0 15 13h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
