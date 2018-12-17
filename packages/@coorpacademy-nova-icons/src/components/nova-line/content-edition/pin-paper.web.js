import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15 22H4c-1.103 0-2-.897-2-2V9c0-1.102.897-2 2-2h7v2H4v11h11v-7h2v7c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <path
      d="M19 2c-1.654 0-3 1.346-3 3 0 .462.113.894.301 1.285l-7.008 7.008 1.414 1.414L17.715 7.7c.391.187.823.3 1.285.3 1.654 0 3-1.346 3-3s-1.346-3-3-3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
