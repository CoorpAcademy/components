import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M17 14a4 4 0 0 0 4-4c0-2.06 0-4-4-8 1.333 5.333-1.6 7-1.6 7V6.294C14.034 6.888 13 8.323 13 10a4 4 0 0 0 4 4z" />
      <path d="M3.618 16l2-4H11v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-6H3.618zM14 20H8v-2h6v2zM3 18h3v2H3v-2zm13 2v-2h3v2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
