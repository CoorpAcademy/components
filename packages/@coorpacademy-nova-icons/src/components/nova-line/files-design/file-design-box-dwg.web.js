import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.104 0 2-.898 2-2v-9c0-1.103-.896-2-2-2zm-20 11v-9h20l.002 9H2z" />
      <path d="M4.125 9.002h-1.75v7h1.75c1.93 0 3.5-1.571 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5.25v-3.5c.966 0 1.75.785 1.75 1.75 0 .964-.784 1.75-1.75 1.75zM16.375 10.752v3.5c0 .964.785 1.75 1.75 1.75h1.75c.966 0 1.75-.786 1.75-1.75v-2.625H19v1.75h.875v.875h-1.75v-3.5h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75zM16.375 9.002h-1.8l-.838 3.413-.862-3.413h-1.8l-.838 3.413-.862-3.413h-1.75l1.718 7h1.801l-.019-.071.862-3.415.856 3.486h1.801l-.019-.071z" />
    </g>
  </svg>
);

export default SvgComponent;
