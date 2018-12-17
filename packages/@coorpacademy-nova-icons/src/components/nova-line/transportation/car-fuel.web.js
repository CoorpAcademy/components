import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3.618 16l2-4H12v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-6H3.618zM14 20H8v-2h6v2zM3 18h3v2H3v-2zm13 2v-2h3v2h-3z" />
      <path d="M18 14a4 4 0 0 0 4-4c0-3-4-8-4-8s-4 5-4 8a4 4 0 0 0 4 4zm0-9.022V12c-1.104 0-2.021-.896-2-2 .021-1.062 1.851-4.795 2-5.022z" />
    </g>
  </svg>
);

export default SvgComponent;
