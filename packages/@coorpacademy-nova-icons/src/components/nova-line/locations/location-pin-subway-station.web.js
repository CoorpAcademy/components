import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.907 8-12.318s-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
      <path d="M14 6h-4a1 1 0 0 0-1 1v6h6V7a1 1 0 0 0-1-1zm-3 6h-1v-1h1v1zm3 0h-1v-1h1v1zm0-3h-4V8h4v1z" />
    </g>
  </svg>
);

export default SvgComponent;
