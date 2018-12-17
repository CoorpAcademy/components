import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 18V6h8v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H4zM18 9h6v2h-6z" />
      <path d="M12 17c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
      <circle cx={15} cy={11} r={2} />
    </g>
  </svg>
);

export default SvgComponent;
