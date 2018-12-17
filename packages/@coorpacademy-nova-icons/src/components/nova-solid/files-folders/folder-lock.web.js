import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 11.37c-.551 0-1 .449-1 1V14h2v-1.63c0-.552-.449-1-1-1z" />
      <path d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-4 12H8v-5h1v-1.63c0-1.654 1.346-3 3-3s3 1.346 3 3V14h1v5z" />
    </g>
  </svg>
);

export default SvgComponent;
