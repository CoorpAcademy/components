import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 5.001h-2v6h-1v-5H9v7H6l3 6h8v-6l-3-2zM21 9.001v6l3-3zM3 15.001v-6l-3 3zM12 .001l-3 3h6zM12 24.001l3-3H9z" />
    </g>
  </svg>
);

export default SvgComponent;
