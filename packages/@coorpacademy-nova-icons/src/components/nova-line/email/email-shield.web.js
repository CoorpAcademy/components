import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 15l.001 7H2v-7.057l5.419 3.87a1 1 0 0 0 1.162 0L14 14.943V14h-2.12L8 16.77 4.12 14H11v-2H2c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h-2zM12 0v7c0 3.813 3.796 5.579 5.804 5.98l.196.039.196-.039C20.204 12.579 24 10.812 24 7V0H12zm10 7c0 2.763-3.154 3.757-3.998 3.973C17.175 10.757 14 9.748 14 7V2h8v5z" />
      <path d="M17 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
