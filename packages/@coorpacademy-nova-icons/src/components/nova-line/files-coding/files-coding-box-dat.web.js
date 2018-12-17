import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
      <path d="M13.75 9h-3.5a.875.875 0 0 0-.875.875V16h1.75v-1.75h1.75V16h1.75V9.875A.875.875 0 0 0 13.75 9zm-.875 3.5h-1.75v-1.75h1.75v1.75zM5 9H3.25v7H5c1.93 0 3.5-1.57 3.5-3.5S6.93 9 5 9zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75 0 .966-.785 1.75-1.75 1.75zM15.5 10.75h1.75V16H19v-5.25h1.75V9H15.5z" />
    </g>
  </svg>
);

export default SvgComponent;
