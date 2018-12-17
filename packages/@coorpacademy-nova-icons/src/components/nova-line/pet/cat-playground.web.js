import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M9 2v2h1v1.186A2.992 2.992 0 0 0 8 8c0 1.654 1.346 3 3 3s3-1.346 3-3a2.992 2.992 0 0 0-2-2.814V4h4v8H1v2h1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2c0-.551.449-1 1-1s1 .449 1 1v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2H9zm2 7c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM6 20H4v-6h2v6zm6-4c-1.654 0-3 1.346-3 3v1H8v-6h8v6h-1v-1c0-1.654-1.346-3-3-3zm8 4h-2V4h2v16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
