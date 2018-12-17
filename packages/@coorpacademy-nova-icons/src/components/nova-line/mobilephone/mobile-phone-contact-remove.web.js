import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 17c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
      <circle cx={15} cy={11} r={2} />
      <path d="M18 9h6v2h-6zM14 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h-2v2H4v-2h7v-2H4V8h10zm-2-4v2H4V4h8z" />
    </g>
  </svg>
);

export default SvgComponent;
