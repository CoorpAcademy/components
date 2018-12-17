import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M16 9c0-2.205-1.795-4-4-4S8 6.795 8 9s1.795 4 4 4 4-1.795 4-4zm-6 0a2 2 0 1 1 4.001.001A2 2 0 0 1 10 9z" />
      <path d="M4 13h3V8c0-2.757 2.243-5 5-5s5 2.243 5 5v5h3c1.104 0 2-.897 2-2V9a2 2 0 0 0-2-2h-1.08c-.487-3.387-3.4-6-6.92-6S5.567 3.613 5.08 7H4c-1.103 0-2 .896-2 2v2c0 1.103.897 2 2 2zm16.002-2H19V9h1l.002 2zM4 9h1v2H4V9zM6.35 18h2.201c.693-1.191 1.975-2 3.449-2s2.756.809 3.449 2h2.201c-.826-2.326-3.044-4-5.65-4s-4.824 1.674-5.65 4zM23 22v-2a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v2h-2v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2H0v2h24v-2h-1zM3 22v-1h6v1H3zm12 0v-1h6v1h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
