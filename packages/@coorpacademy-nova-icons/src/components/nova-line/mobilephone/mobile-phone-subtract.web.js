import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      d="M6 16V8h10V4c0-1.104-.897-2-2-2H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H6zM6 4h8v2H6V4zm8.001 16H6v-2h8.001v2z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M15 10.994h6v2h-6z" />
  </svg>
);

export default SvgComponent;
