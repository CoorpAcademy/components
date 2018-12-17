import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17 2H7a2 2 0 0 0-2 2v10c0 1.103.896 2 2 2h4v6h2v-6h4c1.104 0 2-.897 2-2V4a2 2 0 0 0-2-2zm0 4h-2V4h2v2zm-6 4V8h2v2h-2zm2 2v2h-2v-2h2zm-4-2H7V8h2v2zm2-4V4h2v2h-2zm4 2h1.999l-.001 2H15V8zM9 4v2H7V4h2zm-2 8h2v2H7v-2zm8 2v-2h1.998l-.001 2H15z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
