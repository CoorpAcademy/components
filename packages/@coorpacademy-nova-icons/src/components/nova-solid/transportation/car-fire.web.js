import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M17.966 15.916l.042.084h-14l2-4h5.349a5.975 5.975 0 0 1-.349-2h-6l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-1.025-1.793a5.956 5.956 0 0 1-2.017.709zM8.008 20h-5v-2h5v2zm11 0h-5v-2h5v2z" />
      <path d="M17.008 14a4 4 0 0 0 4-4c0-2.06 0-4-4-8 1.333 5.333-1.6 7-1.6 7V6.294c-1.366.594-2.4 2.029-2.4 3.706a4 4 0 0 0 4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
