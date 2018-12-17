import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.105 15.447l.277.553H3.618l2-4H11v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-1.105-2.211-1.79.894zM14 20H8v-2h6v2zM3 18h3v2H3v-2zm13 2v-2h3v2h-3z" />
      <path d="M21 5.194a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V10a1.5 1.5 0 0 0 0 3c.843 0 1.569-.707 1.487-1.631.021 0 .013-3.979.013-4l3.5-1.141V9a1.5 1.5 0 0 0 0 3c.843 0 1.569-.707 1.487-1.631.02 0 .013-5.154.013-5.175z" />
    </g>
  </svg>
);

export default SvgComponent;
