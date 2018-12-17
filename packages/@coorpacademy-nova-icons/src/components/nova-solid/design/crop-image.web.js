import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M20 17V7c0-1.102-.897-2-2-2H6V1H4v4H1v2h3v10c0 1.103.897 2 2 2h12v4h2v-4h3v-2h-3zM7 15l2.065-3.314 1.273 2.043 2.935-4.708L17 15H7z"
    />
  </svg>
);

export default SvgComponent;
