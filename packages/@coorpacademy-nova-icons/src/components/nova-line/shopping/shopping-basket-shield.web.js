import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.246 9H20V7h-3.42L12.868.504l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h6v-2H4.803L3.246 9z" />
      <path d="M12 11v7c0 3.813 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.176 21.757 14 20.749 14 18v-5h8v5z" />
      <path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
