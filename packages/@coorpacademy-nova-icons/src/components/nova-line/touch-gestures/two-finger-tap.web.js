import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.316 17.052L14 16.279V10h-2v5.612l-1-.333V11H9v7H8a1.001 1.001 0 0 0-.895 1.448l2 4c.17.338.516.552.895.552h6a1 1 0 0 0 1-1v-5a.998.998 0 0 0-.684-.948zM15 22h-4.382l-1-2H10a1 1 0 0 0 1-1v-1.612l4 1.333V22z" />
      <path d="M11.497 7a5.474 5.474 0 0 1 5.36 4.258l1.948-.45C18.016 7.389 15.01 5 11.497 5s-6.519 2.389-7.308 5.808l1.948.45A5.474 5.474 0 0 1 11.497 7z" />
    </g>
  </svg>
);

export default SvgComponent;
