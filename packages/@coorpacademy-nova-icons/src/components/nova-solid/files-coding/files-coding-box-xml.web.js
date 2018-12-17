import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-13.5 10H6.533l-.656-1.4L5.22 16H3.251l1.641-3.5L3.251 9H5.22l.656 1.4.657-1.4h1.968l-1.64 3.5 1.64 3.5zm6.125 0h-1.75v-3.234l-.147.22c-.325.487-1.131.487-1.456 0l-.147-.22V16h-1.75V9.875a.876.876 0 0 1 1.603-.486l1.022 1.533 1.022-1.533a.876.876 0 0 1 1.603.486V16zm6.124 0h-4.375V9h1.75v5.25h2.625V16z"
    />
  </svg>
);

export default SvgComponent;
