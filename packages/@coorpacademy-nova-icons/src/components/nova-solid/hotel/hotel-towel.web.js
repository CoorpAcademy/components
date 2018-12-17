import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M17 7c0-1 .87-2 2-2 1.103 0 2 1 2 2v7h-3v2h4a1 1 0 0 0 1-1V7c0-2.186-1.764-3.962-4-3.994V3H7C4.794 3 3 4.795 3 7v15h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V7z"
    />
  </svg>
);

export default SvgComponent;
