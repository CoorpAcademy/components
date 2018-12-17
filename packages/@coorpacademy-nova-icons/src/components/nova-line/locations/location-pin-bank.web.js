import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M13 5h-2v1.051C9.86 6.283 9 7.293 9 8.5c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.378-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V6h-2V5z" />
      <path d="M12 2c-4.411 0-8 3.589-8 8s4.644 9.44 8 12.318c3.354-2.876 8-7.906 8-12.318 0-4.411-3.589-8-8-8zm0 17.654C9.87 17.657 6 13.338 6 10c0-3.309 2.691-6 6-6s6 2.691 6 6c0 3.338-3.87 7.657-6 9.654z" />
    </g>
  </svg>
);

export default SvgComponent;
