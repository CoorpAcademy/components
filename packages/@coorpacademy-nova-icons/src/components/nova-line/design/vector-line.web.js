import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 2h-4c-1.103 0-2 .898-2 2v4c0 .178.031.348.075.512l-5.563 5.563A1.973 1.973 0 0 0 8 14H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-.177-.031-.347-.075-.511l5.563-5.563c.165.044.334.074.512.074h4c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM4 20v-4h4l.001 4H4zM16 8V4h4l.001 4H16z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
