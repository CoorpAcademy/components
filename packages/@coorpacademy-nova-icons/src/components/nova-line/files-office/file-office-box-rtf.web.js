import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.75 10.75V16h1.75v-2.625h2.625v-1.75H17.5v-.875H21V9h-3.5c-.965 0-1.75.785-1.75 1.75zM9.125 10.75h1.75V16h1.75v-5.25h1.75V9h-5.25zM8.25 11.625A2.629 2.629 0 0 0 5.625 9H3v7h1.75v-1.75h.452L6.224 16H8.25l-1.253-2.147a2.618 2.618 0 0 0 1.253-2.228zm-2.625.875H4.75v-1.75h.875c.482 0 .875.393.875.875s-.393.875-.875.875z" />
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </g>
  </svg>
);

export default SvgComponent;
