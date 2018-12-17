import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 7.002h-1v-1h-2v1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6v-1H4v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1zM8 18.001H6v-8h2v8zm5 0h-2v-8h2v8zm1-10.999h-4v-1h4v1zm4 10.999h-2v-8h2v8z"
    />
  </svg>
);

export default SvgComponent;
