import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M23.001 11h-2.059a9.01 9.01 0 0 0-7.941-7.94V1h-2v2.06A9.01 9.01 0 0 0 3.06 11H1.001v2H3.06a9.013 9.013 0 0 0 7.941 7.941V23h2v-2.059A9.014 9.014 0 0 0 20.942 13h2.059v-2zm-10 7.92V18h-2v.92A7.003 7.003 0 0 1 5.081 13h.92v-2h-.92a7.004 7.004 0 0 1 5.92-5.92V6h2v-.92a7.004 7.004 0 0 1 5.92 5.92h-.92v2h.92a7.004 7.004 0 0 1-5.92 5.92z"
      fill="currentColor"
    />
    <path
      d="M8.95 16c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z"
      fill="currentColor"
    />
    <circle cx={11.95} cy={10} r={2} fill="currentColor" />
  </svg>
);

export default SvgComponent;
