import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M17.105 15.447l.277.553H2.618l2-4H10v-2H3.382L0 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-1.105-2.211-1.79.894zM13 20H7v-2h6v2zM2 18h3v2H2v-2zm13 2v-2h3v2h-3zM11 0v7c0 3.575 5.053 5.699 5.628 5.929l.372.148.372-.148C17.947 12.699 23 10.575 23 7V0H11zm10 7c0 1.71-2.658 3.29-4.001 3.911C15.656 10.291 13 8.717 13 7V2h8v5z" />
      <path d="M16 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
