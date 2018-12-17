import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2V8c0-1.102-.896-2-2-2zM2 17V8h20l.002 9H2z" />
      <path d="M5.875 9h-1.75v7h1.75c1.93 0 3.5-1.569 3.5-3.5 0-1.93-1.57-3.5-3.5-3.5zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75z" />
      <path d="M14.625 10.75v5.057L12.641 12.5l2.1-3.5H12.7l-1.079 1.8L10.542 9H8.5l2.101 3.5L8.5 16h2.042l1.079-1.799L12.7 16h3.675v-2.625H19v-1.75h-2.625v-.875h3.5V9h-3.5c-.965 0-1.75.785-1.75 1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
