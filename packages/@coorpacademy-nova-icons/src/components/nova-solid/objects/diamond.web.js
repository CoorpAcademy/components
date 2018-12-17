import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M13.709 2l2.232 5.021L17.824 2zM14.908 10H9.092L12 19.45zM15.18 9L12 2.016 8.82 9zM6.176 2l1.883 5.021L10.291 2zM11.018 21.356L7.523 10H2.5zM7.199 9L4.92 2.922l-2.814 5.63A.994.994 0 0 0 2.008 9h5.191zM16.801 9h5.191a.987.987 0 0 0-.098-.447l-2.814-5.63L16.801 9zM16.477 10l-3.495 11.356L21.5 10z" />
    </g>
  </svg>
);

export default SvgComponent;
