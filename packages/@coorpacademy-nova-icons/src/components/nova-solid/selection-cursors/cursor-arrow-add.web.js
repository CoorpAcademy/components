import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 3l3 9 1-4.999 5-1zM15 8a7 7 0 1 0 .001 14.001A7 7 0 0 0 15 8zm4 8h-3.001v3h-2v-3H11v-2h2.999v-3h2v3H19v2z"
    />
  </svg>
);

export default SvgComponent;
