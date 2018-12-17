import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M21 3h-4a1 1 0 0 0-1 1v2h-2V4h-2v2h-2V4H8v2H6V4H4v2H2v2h2v2H2v2h2v2H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-5 5v2h-2V8h2zm-6 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2-4v2h-2V8h2zM6 8h2v2H6V8zm0 4h2v2H6v-2zm14 6H3v-2h14a1 1 0 0 0 1-1V5h2v13z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
