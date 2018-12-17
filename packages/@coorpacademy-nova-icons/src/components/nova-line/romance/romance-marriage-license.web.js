import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M2.999 5.998h4v2h-4zM11.76 9.998H2.999v2h7.587a7.953 7.953 0 0 1 1.174-2zM2.999 13.998v2h7.069a8.034 8.034 0 0 1-.069-1c0-.339.028-.67.069-1H2.999z" />
      <path d="M1.999 17.998v-16h6v5a1 1 0 0 0 1 1h5v.08a7.918 7.918 0 0 1 2-.816v-.264a1 1 0 0 0-.293-.707l-6-6a1 1 0 0 0-.707-.293h-8a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1H11.76a7.932 7.932 0 0 1-1.173-2H1.999zm8-14.586l2.586 2.585H9.999V3.412z" />
      <path d="M17.999 8.998c-3.309 0-6 2.692-6 6a6 6 0 0 0 3 5.189v2.811a1.001 1.001 0 0 0 1.707.708l1.293-1.293 1.293 1.293a1 1 0 0 0 1.707-.708v-2.811a6 6 0 0 0 3-5.189c0-3.308-2.691-6-6-6zm0 10c-2.205 0-4-1.794-4-4 0-2.205 1.795-4 4-4s4 1.795 4 4-1.795 4-4 4z" />
      <path d="M18.999 12.998a1 1 0 0 0-1 1 1 1 0 1 0-2 0c0 1 2 3 2 3s2-2 2-3a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
