import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M17.105 13.447L18.382 16H3.618l2-4H12v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-2.105-4.211-1.79.894zM14 20H8v-2h6v2zM3 18h3v2H3v-2zm13 2v-2h3v2h-3z" />
      <path d="M20.167 8.753C20.691 7.963 21 7.018 21 6c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833L22 13.414 23.414 12l-3.247-3.247zM13 6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
