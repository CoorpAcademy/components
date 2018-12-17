import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.005h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 17c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
      <circle cx={15} cy={11} r={2} />
      <path d="M24 9h-2V7h-2v2h-2v2h2v2h2v-2h2zM14 8V4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-2h-2v2H4v-2h7v-2H4V8h10zm-2-4v2H4V4h8z" />
    </g>
  </svg>
);

export default SvgComponent;
