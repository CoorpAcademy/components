import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.375 9h-1.75v7H14v-1.75h-2.625zM15.75 11.188a2.19 2.19 0 0 0 2.188 2.188h.875a.439.439 0 0 1 0 .876H15.75V16h3.063a2.188 2.188 0 0 0-.001-4.375h-.875a.439.439 0 0 1 0-.876H21V9h-3.063a2.19 2.19 0 0 0-2.187 2.188zM6.281 9l-.656 1.4L4.969 9H3l1.641 3.5L3 16h1.969l.656-1.4.656 1.4H8.25l-1.641-3.5L8.25 9z" />
      <path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM2 17V8h20l.001 9H2z" />
    </g>
  </svg>
);

export default SvgComponent;
