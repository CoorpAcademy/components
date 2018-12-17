import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.445A1.001 1.001 0 0 0 15 0h-4v6h8.535L15.832.445zM15 14v-2a1 1 0 0 1 1-1h4V8H0v11a1 1 0 0 0 1 1h6.08c.486-3.39 3.394-6 6.92-6h1zM9 0H5a1 1 0 0 0-.832.445L.465 6H9V0z" />
      <path d="M18.707 12.293l-1.414 1.413L19.586 16H15c-3.309 0-6 2.691-6 6v2h2v-2c0-2.206 1.795-4 4-4h4.586l-2.293 2.293 1.414 1.413L23.414 17l-4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
