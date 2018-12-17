import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.103 0-2 .898-2 2v15c0 1.102.897 2 2 2h18c1.103 0 2-.898 2-2V5c0-1.103-.897-2-2-2zm-6 8h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449V18h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 11.5c0-1.207.86-2.217 2-2.449V7.999h2v1h2V11z"
    />
  </svg>
);

export default SvgComponent;
