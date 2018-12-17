import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M8 18.001H6v-16h10v5.994h2V1.001a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h7v-2zm-4 0H2v-16h2v16z"
      fill="currentColor"
    />
    <path
      d="M17 24.001c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M20 18.001h-4v-5h2v3h2z" />
  </svg>
);

export default SvgComponent;
