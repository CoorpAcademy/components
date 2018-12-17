import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M16.989 20.093C15.471 19.392 13.782 19 12 19s-3.471.392-4.989 1.093A1 1 0 0 0 7.43 22h9.141a1 1 0 0 0 .418-1.907zM11 8h2v2h-2zM13 10h2v2h-2zM9 10h2v2H9z" />
      <path d="M20 2H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zm-3 6h-2v2h2v2h-2v2h-2v-2h-2v2H9v-2H7v-2h2V8H7V6h2v2h2V6h2v2h2V6h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
