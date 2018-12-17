import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 10h-9c-.552 0-1 .449-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V11c0-.551-.448-1-1-1zm-8 6h1v2h-1v-2zm3 2v-2h4v2h-4zm4-4h-2v-2h2v2zm-7-2h3v2h-3v-2zm0 8h3v2h-3v-2zm7 2h-2v-2h2v2zM12 6h-1V3c0-.551-.448-1-1-1H1c-.552 0-1 .449-1 1v4a1 1 0 0 0 1 1h1v2c-.552 0-1 .449-1 1v3c-.552 0-1 .449-1 1v4a1 1 0 0 0 1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4c0-.551-.448-1-1-1v-2a1 1 0 0 0 1-1v-3a1 1 0 0 0 1-1V7c0-.551-.448-1-1-1zm-1 2v2H9V8h2zM9 6H6V4h3v2zM2 4h2v2H2V4zm2 4h3v2H4V8zm-1 4h2v2H3v-2zm-1 6v-2h2v2H2zm1 2h2v2H3v-2zm7 2H7v-2h3v2zm-1-4H6v-2h3v2zm1-4H7v-2h3v2z" />
    </g>
  </svg>
);

export default SvgComponent;
