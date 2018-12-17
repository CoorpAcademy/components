import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.121 10.465L12 12.586l-2.121-2.121-1.414 1.414L10.586 14l-2.121 2.121 1.414 1.414L12 15.414l2.121 2.121 1.414-1.414L13.414 14l2.121-2.121z" />
      <path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
    </g>
  </svg>
);

export default SvgComponent;
