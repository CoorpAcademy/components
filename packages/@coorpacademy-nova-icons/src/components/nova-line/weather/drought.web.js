import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 7c1.654 0 3-1.346 3-3S6.654 1 5 1 2 2.346 2 4s1.346 3 3 3zm0-4a1.001 1.001 0 1 1-1 1c0-.551.449-1 1-1zM21.555 6.832A1 1 0 0 0 22 6V4a1 1 0 0 0-2 0v1.465l-1 .667V4.5C19 3.122 17.878 2 16.5 2S14 3.122 14 4.5v4.632l-1-.667V7a1 1 0 0 0-2 0v2a1 1 0 0 0 .445.832L14 11.535V14H2v8h20v-8h-3V8.535l2.555-1.703zM20 20h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H4v-4h2v2h2v-2h2v2h2v-2h2v2h2v-2h4v4zM16 4.5a.5.5 0 0 1 1 0V13h-1V4.5z" />
    </g>
  </svg>
);

export default SvgComponent;
