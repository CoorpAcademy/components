import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.907 8-12.318s-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
      <path d="M13 10.6V9h2V7h-2V5h-2v2H9v2h2v1.6L7 13h10z" />
    </g>
  </svg>
);

export default SvgComponent;
