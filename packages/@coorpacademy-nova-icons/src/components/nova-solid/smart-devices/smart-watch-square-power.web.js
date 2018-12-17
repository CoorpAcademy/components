import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.006h24v24H0z" />
    <path
      fill="currentColor"
      d="M14 9.841v2.15c.155.306.25.644.25 1.01 0 1.24-1.009 2.25-2.25 2.25s-2.25-1.01-2.25-2.25c0-.365.095-.704.25-1.01v-2.15a3.74 3.74 0 0 0-1.75 3.16c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75A3.74 3.74 0 0 0 14 9.841z"
    />
    <path fill="currentColor" d="M11 8.001h2v4h-2z" />
    <path
      fill="currentColor"
      d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z"
    />
  </svg>
);

export default SvgComponent;
