import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 17.586V3H7v14.586l-2.293-2.293-1.414 1.413L8 21.414l4.707-4.708-1.414-1.413zM18 11h2V3a1 1 0 0 0-1-1h-3v2h2v7zM20 13h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v1h-4v2h5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 4h-2v-2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
