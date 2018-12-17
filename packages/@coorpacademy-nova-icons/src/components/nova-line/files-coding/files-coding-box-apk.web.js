import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2V8c0-1.102-.896-2-2-2zM2 17V8h20l.002 9H2z" />
      <path d="M7.625 9h-3.5a.875.875 0 0 0-.875.875V16H5v-1.75h1.75V16H8.5V9.875A.875.875 0 0 0 7.625 9zm-.875 3.5H5v-1.75h1.75v1.75zM18.613 9l-1.363 1.942V9H15.5v7h1.75v-1.942L18.613 16h2.137l-2.456-3.5L20.75 9zM12 9H9.375v7h1.75v-1.75H12a2.628 2.628 0 0 0 2.625-2.625A2.629 2.629 0 0 0 12 9zm0 3.5h-.875v-1.75H12c.482 0 .875.393.875.875s-.393.875-.875.875z" />
    </g>
  </svg>
);

export default SvgComponent;
