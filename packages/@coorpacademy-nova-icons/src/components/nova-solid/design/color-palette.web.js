import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M16.742 2L14 4.899v11.644l8.555-9.045zM10 2.028H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-16c0-1.102-.897-2-2-2zm-6 18v-16h6l.002 16H4z" />
      <path d="M5 6.028h4v4H5zM5 12.028h4v4H5z" />
      <circle cx={7} cy={18.028} r={1} />
      <path d="M22.518 12.966l-4.206.474L14 17.999v2.972l9.283-1.046z" />
    </g>
  </svg>
);

export default SvgComponent;
