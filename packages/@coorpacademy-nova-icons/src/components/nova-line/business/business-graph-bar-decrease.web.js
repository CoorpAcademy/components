import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 21.999v-5a1 1 0 0 0-1-1h-4c-.552 0-1 .449-1 1v5h-1v-9a1 1 0 0 0-1-1h-4c-.552 0-1 .449-1 1v9H8v-13a1 1 0 0 0-1-1H3c-.552 0-1 .449-1 1v13H0v2h24v-2h-2zm-18 0v-12h2v12H4zm7 0v-8h2v8h-2zm7 0v-4h2v4h-2z" />
      <path d="M16 12.999v2h6v-6h-2v2.586L8.707.293 7.293 1.707l11.293 11.292z" />
    </g>
  </svg>
);

export default SvgComponent;
