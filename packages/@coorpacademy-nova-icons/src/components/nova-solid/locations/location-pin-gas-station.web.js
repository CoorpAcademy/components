import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm3 13H9v-2H7l4-3.2V8H9V6h2V4h2v2h2v2h-2v1.8l4 3.2h-2v2z"
    />
  </svg>
);

export default SvgComponent;
