import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M18.001 4c0-1.104-.897-2-2-2h-12c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-6h4V4h-4zm-1.999 16H4.001V4h12l.001 16zm3.999-8h-2v-2h2v2zm-2-4V6h2v2h-2z"
      fill="currentColor"
    />
    <path
      d="M7.001 15c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
      fill="currentColor"
    />
    <circle cx={10.001} cy={9} r={2} fill="currentColor" />
  </svg>
);

export default SvgComponent;
