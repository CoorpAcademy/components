import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6 19H2c-1.103 0-2-.897-2-2V2C0 .898.897 0 2 0h15c1.103 0 2 .898 2 2v4h-2V2H2v15h4v2z"
      fill="currentColor"
    />
    <g fill="currentColor">
      <path d="M16 14v-2h-2v-2h-2v2h-2v2h2v2h2v-2z" />
      <path d="M21.207 19.793l-3.322-3.322A5.959 5.959 0 0 0 19 13c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6c1.294 0 2.49-.416 3.471-1.115l3.322 3.321 1.414-1.413zM9 13c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
