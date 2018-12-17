import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 9V7h-2.101a4.949 4.949 0 0 0-.732-1.752l1.489-1.49-1.414-1.414-1.489 1.489A4.941 4.941 0 0 0 13 3.102V1h-2v2.102a4.941 4.941 0 0 0-1.753.731L7.758 2.344 6.344 3.758l1.489 1.49A4.949 4.949 0 0 0 7.101 7H5v2h2v2H5v2h2v2H6a1.003 1.003 0 0 0-.949 1.317l2 6A1 1 0 0 0 8 23h8a1 1 0 0 0 .949-.684l2-6A1 1 0 0 0 18 15h-1v-2h2v-2h-2V9h2zm-3.721 12H8.721l-1.333-4h9.226l-1.335 4zM9 15V8c0-1.654 1.346-3 3-3s3 1.346 3 3v7H9z" />
      <circle cx={12} cy={7} r={1} />
      <circle cx={12} cy={10} r={1} />
      <circle cx={12} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
