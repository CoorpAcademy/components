import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path fill="currentColor" d="M20.001 13h-2V4h-12v9h-2V2h16z" />
    <path
      fill="currentColor"
      d="M9.001 13c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
    />
    <circle fill="currentColor" cx={12.001} cy={6.999} r={2} />
    <path
      fill="currentColor"
      d="M15.859 15a3.99 3.99 0 0 1-3.858 3 3.99 3.99 0 0 1-3.858-3H2.001v7h20v-7h-6.142z"
    />
  </svg>
);

export default SvgComponent;
