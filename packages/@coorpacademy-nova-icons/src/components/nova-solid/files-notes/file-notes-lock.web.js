import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 10.37c-.551 0-1 .449-1 1V13h2v-1.63c0-.552-.449-1-1-1z" />
      <path d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-2 16H8v-5h1v-1.63c0-1.654 1.346-3 3-3s3 1.346 3 3V13h1v5z" />
    </g>
  </svg>
);

export default SvgComponent;
