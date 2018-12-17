import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 7h-8.25L10.1 4.8A2.009 2.009 0 0 0 8.5 4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.102-.897-2-2-2zM4 19V6h4.5l1.65 2.2c.375.501.974.8 1.6.8H20l.001 10H4z" />
      <path d="M14 12.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5v.5H8v5h7v-5h-1v-.5zm-3 0a.5.5 0 0 1 1 0v.5h-1v-.5zm2 3.5h-3v-1h3v1z" />
    </g>
  </svg>
);

export default SvgComponent;
