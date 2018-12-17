import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2.003H4c-1.1 0-2 .9-2 2v16c0 1.099.9 2 2 2h16c1.1 0 2-.901 2-2v-16c0-1.1-.9-2-2-2zm-12 18H4v-3h4v3zm0-5H4v-3h4v3zm6 5h-4v-3h4v3zm0-5h-4v-3h4v3zm0-5h-4v-3h4v3zm6 10h-4v-3h4v3z"
    />
  </svg>
);

export default SvgComponent;
