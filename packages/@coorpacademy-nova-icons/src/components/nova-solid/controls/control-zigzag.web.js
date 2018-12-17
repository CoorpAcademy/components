import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16 12H8c-1.103 0-2-.896-2-2s.897-2 2-2h7.586l-1.293 1.293 1.414 1.414L19.414 7l-3.707-3.707-1.414 1.414L15.586 6H8c-2.205 0-4 1.795-4 4s1.795 4 4 4h8a2 2 0 0 1 0 4H4v2h12c2.205 0 4-1.795 4-4s-1.795-4-4-4z"
    />
  </svg>
);

export default SvgComponent;
