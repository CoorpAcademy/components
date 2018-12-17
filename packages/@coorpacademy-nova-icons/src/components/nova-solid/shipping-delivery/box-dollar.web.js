import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.448A1.001 1.001 0 0 0 15 .003h-4v6h8.535L15.832.448zM9 .003H5a1 1 0 0 0-.832.445L.465 6.003H9v-6zM20 10V8.003H0v11a1 1 0 0 0 1 1h13V12c0-1.1.9-2 2-2h4z" />
      <path d="M21 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
