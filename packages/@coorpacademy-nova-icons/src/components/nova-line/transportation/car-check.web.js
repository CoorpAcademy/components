import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.593 14.422L19.382 16H4.618l2-4H12v-2H5.382L2 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-1.618-3.236-1.789.894zM15 20H9v-2h6v2zM4 18h3v2H4v-2zm13 2v-2h3v2h-3z" />
      <path d="M22.707 6.707l-1.414-1.414L17 9.586l-2.293-2.293-1.414 1.414L17 12.414z" />
    </g>
  </svg>
);

export default SvgComponent;
