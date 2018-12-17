import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.124 10.75h1.75v1.75h-1.75z" />
      <path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.5 16H6.75v-3.234l-.147.22c-.325.487-1.131.487-1.456 0L5 12.766V16H3.25V9.875a.876.876 0 0 1 1.603-.485l1.022 1.533L6.897 9.39a.876.876 0 0 1 1.603.485V16zm6.124 0h-1.75v-1.75h-1.75V16h-1.75V9.875c0-.483.392-.875.875-.875h3.5c.483 0 .875.392.875.875V16zm6.126 0h-1.969l-.656-1.398L17.469 16H15.5l1.641-3.5L15.5 9h1.969l.656 1.4.656-1.4h1.969l-1.641 3.5L20.75 16z" />
    </g>
  </svg>
);

export default SvgComponent;
