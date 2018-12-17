import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M7.707 14.292l-2.293-2.293H19v5h2v-5a2 2 0 0 0-2-2H5.414l2.293-2.293-1.414-1.414-4.707 4.707 4.707 4.707 1.414-1.414z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
