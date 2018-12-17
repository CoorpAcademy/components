import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 10.75h1.75V16H6.5v-5.25h1.75V9H3zM15.25 10.75H17V16h1.75v-5.25h1.75V9h-5.25zM12.406 9l-.656 1.4-.656-1.4H9.125l1.641 3.5L9.125 16h1.969l.656-1.4.656 1.4h1.969l-1.641-3.5L14.375 9z" />
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </g>
  </svg>
);

export default SvgComponent;
