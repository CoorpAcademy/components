import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M21.895 20.553l-9-18c-.339-.678-1.45-.678-1.789 0l-9 18A1.001 1.001 0 0 0 3 22h18a1.001 1.001 0 0 0 .895-1.447zM12 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM7 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    />
  </svg>
);

export default SvgComponent;
