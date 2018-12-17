import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M16.375 9.002h-1.75v7h1.75c1.93 0 3.5-1.57 3.5-3.5 0-1.929-1.57-3.5-3.5-3.5zm0 5.25v-3.5c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75zM10.25 10.752h.875v3.5h-.875v1.75h3.5v-1.75h-.875v-3.5h.875v-1.75h-3.5zM8.753 9.04a.876.876 0 0 0-.981.352L6.75 10.925 5.728 9.392a.875.875 0 0 0-1.603.485v6.125h1.75v-3.235l.147.221c.325.487 1.131.487 1.456 0l.147-.221v3.235h1.75V9.877a.874.874 0 0 0-.622-.837z" />
    </g>
  </svg>
);

export default SvgComponent;
