import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 4v1.644A11.947 11.947 0 0 0 11.5 3a11.968 11.968 0 0 0-9.256 4.363l1.542 1.273A9.979 9.979 0 0 1 11.5 5c2.189 0 4.276.716 5.989 2H16v2h5V4h-2z" />
      <path d="M16.316 14.052L14 13.279V7h-2v5.612l-1-.333V8H9v7H8a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM15 19h-4.382l-1-2H10a1 1 0 0 0 1-1v-1.612l4 1.333V19z" />
    </g>
  </svg>
);

export default SvgComponent;
